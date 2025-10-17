// Contentstack Launch Edge Function with simple redirect logic
export default async function handler(request, context) {
  const parsedUrl = new URL(request.url);
  const route = parsedUrl.pathname;

  // Redirect /old-page to /test-redirect
  if (route === '/old-page') {
    const redirectUrl = new URL('/test-redirect', request.url);
    return Response.redirect(redirectUrl, 301);
  }

  // Forward all other requests to the origin server
  return fetch(request);
}
