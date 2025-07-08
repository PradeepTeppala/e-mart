import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {computerData} from '../data/computers'
import { Link } from 'react-router-dom'

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
        computerData : computerData.filter((item) => selectedProduct.includes(item.company));
    
    
  return (
    <>
    <Navbar/>
    <div className="fullpage">
        <div className="pro-selected">
            {computerData.map((computer)=>{
                return(
                    <div>
                        <label>
                            <input className="pro-input"
                                type="checkbox"
                                checked={selectedProduct.includes(computer.company)}
                                onChange={()=> companyHeader(computer.company)}
                            />
                            {computer.company}
                        </label>
                    </div>
                )
            })}
        </div>
    <div className="pageSection">
        {filteredProduct.map((item)=>{
            return(
                <div>
                    <Link to={`/Computer/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                    </Link>
                    <div className="proModel">
                        {item.company} {item.model}
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
