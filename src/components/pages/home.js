import React from 'react'
import Image_content from './image_content'
import Aboutus from './aboutus'
import ExperienceDetails from './exp'
import CeodeskPage from './ceodeskpage'
import Card from './cardslider'
import FAQ from './faq'
import Footer from './footer'
import Reqformdata from './reqformdata'





function Home() {
  return (
    <div className="bg-green-50">
      <Image_content/>
      <Aboutus/>
      <ExperienceDetails/>
      <CeodeskPage/>
      <Card/>
    <Reqformdata/>
      <FAQ/>
      <Footer/>
     
    </div>
  )
}

export default Home
