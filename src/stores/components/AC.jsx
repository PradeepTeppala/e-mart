import React from 'react'
import { acData } from '../data/ac';

const AC = () => {

        const firstFiveImages = acData.slice(0, 5);
    
  return (
    <>
    <h2>AC</h2>
    <div className='proSection'>
      {
        firstFiveImages.map((item)=>{
            return(
                <div className='imgBox'>
                    <img className='proImage' src={item.image} alt="" />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default AC
