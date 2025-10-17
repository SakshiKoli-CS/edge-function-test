export default function TestRedirect() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem',
      backgroundColor: '#f0f0f0',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '2rem' }}>
        Test Redirect Page
      </h1>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '2rem', 
        borderRadius: '8px',
        maxWidth: '600px',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', color: '#555', marginBottom: '1rem' }}>
          ✅ Redirect Successful!
        </h2>
        <p style={{ color: '#666', lineHeight: '1.6', fontSize: '1.1rem' }}>
          You were redirected here from <code style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '0.2rem 0.5rem', 
            borderRadius: '4px',
            color: '#e03e3e'
          }}>/old-page</code> using the Contentstack Launch Edge Function.
        </p>
        
        <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
          <strong style={{ color: '#333' }}>Try it:</strong>
          <div style={{ marginTop: '0.5rem' }}>
            <a href="/old-page" style={{ color: '#0070f3', textDecoration: 'underline', fontSize: '1.1rem' }}>
              Click here to visit /old-page
            </a>
          </div>
          <div style={{ color: '#666', marginTop: '0.5rem', fontSize: '0.9rem' }}>
            (You'll be redirected back to this page)
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <a href="/" style={{ 
          color: '#0070f3', 
          textDecoration: 'none',
          fontSize: '1.1rem'
        }}>
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
