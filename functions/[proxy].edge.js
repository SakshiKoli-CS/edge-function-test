// Simple Edge Function - URL Redirect
export default async function handler(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Redirect /old-page to /new-page
  if (pathname === '/old-page') {
    url.pathname = '/new-page';
    return Response.redirect(url, 301);
  }

  // Forward all other requests to origin
  return fetch(request);
}

