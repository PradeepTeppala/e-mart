import React from 'react'
import Mobiles from './Mobiles'
import Computers from './Computers'
import ManFashion from './ManFashion'
import WomanFashion from './WomanFashion'
import Watches from './Watches'
import Furniture from './Furniture'
import Kitchen from './Kitchen'
import AC from './AC'
import Books from './Books'
import Tv from './Tv'
import Speaker from './Speaker'

const Products = () => {
  return (
    <div>
      <Mobiles/>
      <Computers/>
      <Watches/>
      <Tv/>
      <Books/>
      <Speaker/>
      <Furniture/>
      <Kitchen/>
      {/* <AC/> */}
      <ManFashion/>
      <WomanFashion/>
    </div>
  )
}

export default Products
