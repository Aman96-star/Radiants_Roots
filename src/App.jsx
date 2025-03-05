import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Homepage from './Components/homPage'
import Cart from './Components/cart'
import SingleProduct from './Components/singleProduct'
import Slider from './Components/slider'

function App() {
  

  return (
    <>
     <Navbar/>
      {/* <Homepage/> */}
      <Slider/>
      {/* <Cart/> */}
    </>
  )
}

export default App
