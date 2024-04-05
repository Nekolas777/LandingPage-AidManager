import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'
import { About } from './components/About/About'
import { BrandCarousel } from './components/BrandCarousel/BrandCarousel'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Service } from './components/Service/Service'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Service />
        <BrandCarousel />
        <Testimonials />
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
