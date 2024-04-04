import './App.css'
import { About } from './components/About/About'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App
