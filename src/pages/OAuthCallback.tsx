import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function OAuthCallback() {
  const location = useLocation()
  const navigate = useNavigate()
  const [params, setParams] = useState<URLSearchParams | null>(null)

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    setParams(searchParams)

    const code = searchParams.get('code')
    const state = searchParams.get('state')

    if (code) {
      console.log('OAuth code received:', code)
      console.log('State:', state)
    }
  }, [location])

  const handleRedirectHome = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>OAuth Callback</h1>
      <p>This page handles OAuth callbacks from external providers.</p>

      {params && params.toString() && (
        <div>
          <h2>Received Parameters:</h2>
          <pre>{params.toString()}</pre>
        </div>
      )}

      <button onClick={handleRedirectHome}>Go to Home</button>
    </div>
  )
}
