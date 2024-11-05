import React from 'react'
import Category from './components/Category/Category'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import headphone from "./assets/hero/headphone.png"
import Products from './components/Products/Products'

const BannerData={
  discount:"30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  description: "Some description whatever",
  bgColor: "#f42c37",
};


const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden">
      <Navbar/>
      <Hero/>
      <Category/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
    </div>
  )
}

export default App