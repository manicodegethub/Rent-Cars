import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Product from './pages/Product'
import SellCar from './pages/SellCar'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import WhatsApp from './components/Whatsapp'


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
      once: true,
    })
  }, [])

  return (
    <BrowserRouter>
     
      <WhatsApp />

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="sell" element={<SellCar />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App