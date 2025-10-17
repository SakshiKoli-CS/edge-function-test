export default function NewPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>✅ New Page</h1>
      <p>You successfully reached the new page!</p>
      <p>If you came from <code>/old-page</code>, the edge function redirect worked!</p>
      
      <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        ← Back to Home
      </a>
    </main>
  )
}

