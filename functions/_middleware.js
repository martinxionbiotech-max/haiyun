// Cloudflare Pages Function: negotiate Markdown for AI/agent clients.
// HTML remains the canonical representation; `/path/index.md` is the sidecar.
export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);
  const accept = request.headers.get('Accept') || '';

  if (request.method !== 'GET' || url.pathname.endsWith('.md')) {
    return next();
  }

  if (accept.includes('text/markdown')) {
    const mdPath = url.pathname.endsWith('/')
      ? `${url.pathname}index.md`
      : `${url.pathname}/index.md`;
    const mdRequest = new Request(new URL(mdPath, url), {
      method: 'GET',
      headers: request.headers,
    });
    const mdResponse = await env.ASSETS.fetch(mdRequest);

    if (mdResponse.ok) {
      const headers = new Headers(mdResponse.headers);
      headers.set('Content-Type', 'text/markdown; charset=utf-8');
      headers.set('Vary', 'Accept');
      headers.set('X-Markdown-Source', 'pages-function');
      return new Response(mdResponse.body, { status: 200, headers });
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
