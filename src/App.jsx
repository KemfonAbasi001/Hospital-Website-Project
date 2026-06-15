import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Header.jsx'
import HospitalSection from './pages/Hospital.jsx'
import DoctorSection from './pages/Doctor.jsx'
import ServiceSection from './pages/Services.jsx'
import EmergencySection from './pages/Emergency.jsx'
import HomeSection from './pages/index.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/services" element={<ServiceSection />} />
        <Route path="/doctor" element={<DoctorSection />} />
        <Route path="/hospital" element={<HospitalSection />} />
        <Route path="/emergency" element={<EmergencySection />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
