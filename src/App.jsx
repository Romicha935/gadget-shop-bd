import { useState } from 'react'

import './App.css'
import Navbar from './components/Header/Navbar'
import HomeBanner from './components/Banner/Banner'
import TopCategories from './components/categories/TopCategories'


function App() {
  

  return (
    <>
      <Navbar/> 
      <HomeBanner/> 
      <TopCategories/>
    </>
  )
}

export default App
