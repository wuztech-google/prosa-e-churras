import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { WHATSAPP_LINK } from './constants'
import { IconWhatsApp } from './components/Icons'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <a className="whats-flutuante" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Chamar no WhatsApp">
        <IconWhatsApp />
      </a>
    </>
  )
}
