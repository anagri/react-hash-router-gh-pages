import { HashRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import OAuthCallback from './pages/OAuthCallback'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navigation />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/oauth/callback" element={<OAuthCallback />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App
