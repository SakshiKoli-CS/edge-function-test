export default function NewPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>✅ New Page</h1>
      <p style={{ fontSize: '1.2rem', color: 'green' }}>You successfully reached the new page!</p>
      <p>If you came from <code style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>/old-page</code>, the edge function redirect worked perfectly! 🎉</p>
      
      <div style={{ marginTop: '2rem' }}>
        <a href="/" style={{ color: 'blue', textDecoration: 'underline', fontSize: '1.1rem' }}>
          ← Back to Home
        </a>
      </div>
    </main>
  )
}

