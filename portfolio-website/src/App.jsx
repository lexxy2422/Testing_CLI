import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar  from './components/Navbar'
import React from 'react'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Work from './components/Work'

const App = () => (
<div>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Work />
    <Testimonial />
    <Contact />
    <Footer />
  </div>
);

export default App ;
