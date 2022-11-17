import React from 'react'
import About from './components/About/About'
import AboutTest from './components/About/AboutTest'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <About /> */}
			<AboutTest />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
