import React from 'react'
import { Element } from 'react-scroll'
import GlobalStyles from './GlobalStyles.style'
import Nav from './Modules/Nav'
import Header from './Modules/Header'
import About from './Modules/About'
import Portfolio from './Modules/Portfolio'
import Contact from './Modules/Contact'
import Footer from './Modules/Footer'

function App () {
  return (
    <div className='App'>
      <GlobalStyles />
      <Nav />
      <Element name='header' className='element'>
        <Header />
      </Element>
      <Element name='about' className='element'>
        <About />
      </Element>
      <Element name='portfolio' className='element'>
        <Portfolio />
      </Element>
      <Element name='contact' className='element'>
        <Contact />
      </Element>
      <Footer />
    </div>
  )
}

export default App
