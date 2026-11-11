// Cloudflare Pages Functions middleware: negotiate Markdown before static assets.
// HTML remains canonical; every page has a sibling `/path/index.md` sidecar.
export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);

  // Canonical host: the site is published on the non-www domain.
  if (url.hostname === 'www.flourmillingpro.com') {
    return Response.redirect(`https://flourmillingpro.com${url.pathname}${url.search}`, 301);
  }

  const accept = request.headers.get('Accept') || '';
  const isRead = request.method === 'GET' || request.method === 'HEAD';
  const isPagePath =
    isRead &&
    !url.pathname.startsWith('/_astro/') &&
    !url.pathname.startsWith('/images/') &&
    !/\.[a-z0-9]+$/i.test(url.pathname);

  if (isPagePath && accept.includes('text/markdown')) {
    const mdPath = url.pathname.endsWith('/')
      ? `${url.pathname}index.md`
      : `${url.pathname}/index.md`;
    const mdResponse = await env.ASSETS.fetch(new URL(mdPath, url));

    if (mdResponse.ok) {
      const headers = new Headers(mdResponse.headers);
      headers.set('Content-Type', 'text/markdown; charset=utf-8');
      headers.set('Vary', 'Accept');
      headers.set('X-Markdown-Source', 'pages-middleware');
      return new Response(request.method === 'HEAD' ? null : mdResponse.body, {
        status: 200,
        headers,
      });
    }
  }

  const response = await next();
  if (!response) return response;

  const headers = new Headers(response.headers);
  if ((headers.get('Content-Type') || '').includes('text/html')) {
    headers.set('Vary', 'Accept');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }
  return response;
}
