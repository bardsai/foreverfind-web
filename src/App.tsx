import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AppPage from './pages/App'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import HomeConcept from './pages/HomeConcept'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/concept/editorial" element={<HomeConcept variant="editorial" />} />
        <Route path="/concept/warm" element={<HomeConcept variant="warm" />} />
      </Routes>
    </Router>
  )
}
