import React from 'react'
import Category from './components/Category/Category'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Category/>
    </div>
  )
}

export default App