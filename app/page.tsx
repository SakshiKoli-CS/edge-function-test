export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Edge Function Test</h1>
      <p>Your Next.js app with Contentstack Launch Edge Function is live! 🚀</p>
      
      <h2>Test the Edge Function Redirect:</h2>
      <ul>
        <li>
          <a href="/old-page" style={{ color: 'blue', textDecoration: 'underline' }}>
            Visit /old-page
          </a>
          {' '}→ Will redirect to /new-page
        </li>
      </ul>

      <h2>Pages:</h2>
      <ul>
        <li><a href="/" style={{ color: 'blue' }}>Home (you are here)</a></li>
        <li><a href="/new-page" style={{ color: 'blue' }}>New Page</a></li>
      </ul>
    </main>
  )
}

