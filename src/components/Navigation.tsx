import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/oauth/callback">OAuth Callback</Link>
        </li>
      </ul>
    </nav>
  )
}
