import React from 'react'
import { watchData } from '../data/watch';

const Watches = () => {

        const firstFiveImages = watchData.slice(0, 5);
    
  return (
    <>
    <h2>Watches</h2>
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

export default Watches
