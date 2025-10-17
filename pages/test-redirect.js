export default function TestRedirect() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem',
      backgroundColor: '#f0f0f0',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '2rem' }}>
        Domain-Based Edge Function Redirect
      </h1>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '2rem', 
        borderRadius: '8px',
        maxWidth: '700px',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', color: '#555', marginBottom: '1rem' }}>
          🔀 How It Works
        </h2>
        <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1rem', marginBottom: '1rem' }}>
          The edge function redirects entire domains to new destinations. When a user visits 
          the old domain, they are automatically redirected to the new location.
        </p>
        
        <div style={{ 
          backgroundColor: '#f9f9f9', 
          padding: '1.5rem', 
          borderRadius: '6px',
          marginTop: '1.5rem'
        }}>
          <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1rem' }}>
            Current Redirect Rule:
          </h3>
          <div style={{ 
            fontFamily: 'monospace', 
            backgroundColor: '#fff', 
            padding: '1rem',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}>
            <div style={{ color: '#e03e3e', marginBottom: '0.5rem' }}>
              <strong>From:</strong> onestarrewards.com
            </div>
            <div style={{ color: '#0070f3' }}>
              <strong>To:</strong> www.cherokeecasino.com/rewards-program
            </div>
            <div style={{ color: '#666', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              Status: 302 (Temporary Redirect)
            </div>
          </div>
        </div>

        <div style={{ 
          marginTop: '1.5rem',
          padding: '1rem',
          backgroundColor: '#fffbeb',
          borderLeft: '4px solid #f59e0b',
          borderRadius: '4px'
        }}>
          <strong style={{ color: '#92400e' }}>Note:</strong>
          <p style={{ color: '#78350f', margin: '0.5rem 0 0 0', fontSize: '0.95rem' }}>
            Any path or query parameters from the original URL are ignored. 
            All requests to <code style={{ backgroundColor: '#fef3c7', padding: '0.2rem 0.4rem', borderRadius: '3px' }}>
              onestarrewards.com
            </code> will redirect to the same destination.
          </p>
        </div>
      </div>

      <div style={{ 
        backgroundColor: 'white', 
        padding: '2rem', 
        borderRadius: '8px',
        maxWidth: '700px',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', color: '#555', marginBottom: '1rem' }}>
          🧪 Testing Instructions
        </h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '1rem' }}>
          To test this redirect locally, you need to modify your <code style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '0.2rem 0.5rem', 
            borderRadius: '4px'
          }}>/etc/hosts</code> file:
        </p>
        
        <ol style={{ color: '#666', lineHeight: '2', paddingLeft: '1.5rem' }}>
          <li>Open terminal and run: <code style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '0.2rem 0.5rem', 
            borderRadius: '4px',
            fontSize: '0.9rem'
          }}>sudo nano /etc/hosts</code></li>
          <li>Add this line: <code style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '0.2rem 0.5rem', 
            borderRadius: '4px',
            fontSize: '0.9rem'
          }}>127.0.0.1 onestarrewards.com</code></li>
          <li>Save and exit (Ctrl+X, then Y, then Enter)</li>
          <li>Visit <code style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '0.2rem 0.5rem', 
            borderRadius: '4px'
          }}>http://onestarrewards.com:3000</code></li>
        </ol>
        
        <div style={{ 
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#eff6ff',
          borderRadius: '4px'
        }}>
          <strong style={{ color: '#1e40af' }}>💡 Tip:</strong>
          <p style={{ color: '#1e3a8a', margin: '0.5rem 0 0 0', fontSize: '0.95rem' }}>
            When deployed to Contentstack Launch, this will work automatically without 
            needing to modify hosts file.
          </p>
        </div>
      </div>

      <div style={{ 
        backgroundColor: 'white', 
        padding: '2rem', 
        borderRadius: '8px',
        maxWidth: '700px'
      }}>
        <h2 style={{ fontSize: '1.5rem', color: '#555', marginBottom: '1rem' }}>
          ⚙️ Configuration
        </h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '1rem' }}>
          Add more domain redirects by editing the <code style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '0.2rem 0.5rem', 
            borderRadius: '4px'
          }}>domainRedirects</code> object in the edge function:
        </p>
        
        <pre style={{ 
          backgroundColor: '#1e1e1e', 
          color: '#d4d4d4',
          padding: '1.5rem',
          borderRadius: '6px',
          overflow: 'auto',
          fontSize: '0.9rem',
          lineHeight: '1.6'
        }}>
{`const domainRedirects = {
  'onestarrewards.com': 'www.cherokeecasino.com/rewards-program',
  'old-domain.com': 'new-domain.com',
  'promo.example.com': 'https://example.com/special-offer'
};`}
        </pre>
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
