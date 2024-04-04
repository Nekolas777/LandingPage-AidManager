import './App.css'
import { About } from './components/About/About'
import { BrandCarousel } from './components/BrandCarousel/BrandCarousel'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Service } from './components/Service/Service'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Service />
        <BrandCarousel />
      </main>
    </>
  )
}

export default App
