import React from 'react'
import Image_content from './image_content'
import Aboutus from './aboutus'
import ExperienceDetails from './exp'
import CeodeskPage from './ceodeskpage'
import Card from './cardslider'
import FAQ from './faq'
import Footer from './footer'




function Home() {
  return (
    <div>
      <Image_content/>
      <Aboutus/>
      <ExperienceDetails/>
      <CeodeskPage/>
      <Card/>
      
      <FAQ/>
      <Footer/>
     
    </div>
  )
}

export default Home
