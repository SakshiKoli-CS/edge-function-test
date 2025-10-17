export default function handler(request, context) {
    
    const parsedUrl = new URL(request.url);
    console.log(`Received request for ${parsedUrl.host}`);

    // Define domain mapping for redirects
    const domainRedirects = {
        'edge-function-test.contentstackapps.com': 'edge-function-test-dev.contentstackapps.com'
    };

    // Get the hostname without port for matching
    const hostname = parsedUrl.hostname;
    const redirectTarget = domainRedirects[hostname];
    
    if (redirectTarget) {
        // eslint-disable-next-line no-console
        console.log(`Redirecting ${parsedUrl.host} to ${redirectTarget}`);
        
        // Build the new URL with the redirect target
        // Handle cases where redirect target includes a path
        const redirectUrl = redirectTarget.startsWith('http') 
            ? redirectTarget 
            : `${parsedUrl.protocol}//${redirectTarget}`;
        
        // Return 302 redirect response
        return new Response(null, {
            status: 302,
            headers: {
                'Location': redirectUrl
            }
        });
    }

    return fetch(request);
}
