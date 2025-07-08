import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'

const MenFashionPage = () => {
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
                menData : menData.filter((item) => selectedProduct.includes(item.brand));
            
  return (
    <>
    <Navbar/>
    <div className="fullpage">
        <div className="pro-selected">
                            {menData.map((men)=>{
                                return(
                                    <div>
                                        <label>
                                            <input className="pro-input"
                                                type="checkbox"
                                                checked={selectedProduct.includes(men.brand)}
                                                onChange={()=> companyHeader(men.brand)}
                                            />
                                            {men.brand}
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
        <div className="pageSection">
        {filteredProduct.map((item)=>{
            return(
                <div>
                    <Link to={`/MenFashion/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                    </Link>
                    <div className="proModel">
                        {item.brand} {item.model}
                    </div>
                </div>
            )
        })}
    </div>
    </div>
    </>
  )
}

export default MenFashionPage
