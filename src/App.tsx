import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AppPage from './pages/App'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/app" element={<AppPage />} />
      </Routes>
    </Router>
  )
}