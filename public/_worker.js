// Cloudflare Pages advanced mode: negotiate Markdown for AI/agent clients.
// HTML remains canonical; every page has a sibling `/path/index.md` sidecar.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const accept = request.headers.get('Accept') || '';

    const isPagePath =
      request.method === 'GET' &&
      !url.pathname.startsWith('/_astro/') &&
      !url.pathname.startsWith('/images/') &&
      !/\.[a-z0-9]+$/i.test(url.pathname);

    if (isPagePath && accept.includes('text/markdown')) {
      const mdPath = url.pathname.endsWith('/')
        ? `${url.pathname}index.md`
        : `${url.pathname}/index.md`;
      const mdUrl = new URL(mdPath, url);
      const mdResponse = await env.ASSETS.fetch(mdUrl);

      if (mdResponse.ok) {
        const headers = new Headers(mdResponse.headers);
        headers.set('Content-Type', 'text/markdown; charset=utf-8');
        headers.set('Vary', 'Accept');
        headers.set('X-Markdown-Source', 'pages-worker');
        return new Response(mdResponse.body, { status: 200, headers });
      }
    }

    const response = await env.ASSETS.fetch(request);
    if (isPagePath && (response.headers.get('Content-Type') || '').includes('text/html')) {
      const headers = new Headers(response.headers);
      headers.set('Vary', 'Accept');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }
    return response;
  },
};
