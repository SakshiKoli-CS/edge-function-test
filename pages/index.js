export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#333', marginBottom: '1rem' }}>
        Welcome to Next.js
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '0.5rem' }}>
        With Contentstack Launch Edge Function
      </p>
      <p style={{ fontSize: '1rem', color: '#999', marginBottom: '2rem' }}>
        Domain-based redirect implementation
      </p>
      <a 
        href="/test-redirect" 
        style={{ 
          padding: '0.75rem 1.5rem',
          backgroundColor: '#0070f3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '6px',
          fontSize: '1rem',
          fontWeight: '500'
        }}
      >
        Learn About Edge Function
      </a>
    </div>
  );
}

