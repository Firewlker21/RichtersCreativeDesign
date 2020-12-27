import React from 'react'
import ProductShowcase from './ProductShowcase'
import Showcase from './Showcase'
import Footer from './Footer/Footer'
import WeAreSection from './WeAreSection'

function Home() {
  return (
    <div>
      <Showcase imgURL='/images/watermark2.png' />

      <WeAreSection />
      <ProductShowcase />
      <Footer />
    </div>
  )
}

export default Home
