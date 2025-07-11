import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { watchData } from '../data/watch';

const ComputerPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHeader = (brand) =>{
        if(selectedProduct.includes(brand)){
            setSelectedProduct(selectedProduct.filter((item)=> item !== brand))
        }else{
            setSelectedProduct([...selectedProduct, brand])
        }
        console.log(selectedProduct);
    }
    const filteredProduct = selectedProduct.length === 0 ? 
        watchData : watchData.filter((item) => selectedProduct.includes(item.brand));
    
    
  return (
    <>
    <Navbar/>
    <div className="fullpage">
        <div className="pro-selected">
            {watchData.map((watch)=>{
                return(
                    <div>
                        <label>
                            <input className="pro-input"
                                type="checkbox"
                                checked={selectedProduct.includes(watch.brand)}

                                onChange={()=> companyHeader(watch.brand)}
                            />
                            {watch.brand}
                        </label>
                    </div>
                )
            })}
        </div>
    <div className="pageSection">
        {filteredProduct.map((item)=>{
            return(
                <div>
                    <Link to={`/Watch/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                    </Link>
                    <div className="proModel">
                        <h4>{item.brand} {item.model}</h4>
                    </div>
                </div>
            )
        })}
    </div>
    </div>

    </>
  )
}

export default ComputerPage
