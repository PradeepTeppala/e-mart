import React, {useState}from 'react'
import Navbar from '../components/Navbar'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'

const FurniturePage = () => {
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
                    furnitureData : furnitureData.filter((item) => selectedProduct.includes(item.brand));
                
  return (
    <>
    <Navbar/>
    <div className="fullpage">
        <div className="pro-selected">
            {furnitureData.map((furniture)=>{
                return(
                    <div key={furniture.id}>
                        <label>
                            <input className="pro-input"
                                type="checkbox"
                                checked={selectedProduct.includes(furniture.brand)}
                                onChange={()=> companyHeader(furniture.brand)}
                            />
                            {furniture.brand}
                        </label>
                    </div>
                )
            })}
        </div>
        <div className="pageSection">
            {filteredProduct.map((item)=>{
                return(
                    <div key={item.id}>
                        <Link to={`/Furniture/${item.id}`}>
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

export default FurniturePage
