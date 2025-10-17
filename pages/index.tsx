export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🚀 Edge Function Test</h1>
      <p>Your Next.js app with Contentstack Launch Edge Function is live!</p>
      
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
        <h2>Test the Edge Function Redirect:</h2>
        <ul>
          <li>
            <a href="/old-page" style={{ color: 'blue', textDecoration: 'underline' }}>
              Click here to visit /old-page
            </a>
            <br />
            <small>→ Will redirect to /new-page via edge function</small>
          </li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Pages:</h2>
        <ul>
          <li><a href="/" style={{ color: 'blue' }}>Home</a> (you are here)</li>
          <li><a href="/new-page" style={{ color: 'blue' }}>New Page</a></li>
        </ul>
      </div>
    </main>
  )
}

