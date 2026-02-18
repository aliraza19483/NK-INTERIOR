import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Founder from './components/Founder.jsx'
import Portfolio from './components/Portfolio.jsx'
import Process from './components/Process.jsx'
import Magazine from './components/Magazine.jsx'
import Form from './components/Form.jsx'
import SpecialOffer from './components/SpecialOffer.jsx'
import OfferModal from './components/OfferModal.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <OfferModal />
    <Header />
    <Hero />
    <SpecialOffer />
    <Founder />
    <Portfolio />
    <Process />
    <Magazine />
    <Form />
    <Footer />
  </>
)
