import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'

const KitchenPage = () => {
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
                    kitchenData : kitchenData.filter((item) => selectedProduct.includes(item.brand));
                
  return (
    <>
    <Navbar/>
    <div className="fullpage">
        <div className="pro-selected">
            {kitchenData.map((kitchen)=>{
                return(
                    <div key={kitchen.id}>
                        <label>
                            <input className="pro-input"
                                type="checkbox"
                                checked={selectedProduct.includes(kitchen.brand)}
                                onChange={()=> companyHeader(kitchen.brand)}
                            />
                            {kitchen.brand}
                        </label>
                    </div>
                )
            })}
        </div>
        <div className="pageSection">
        {filteredProduct.map((item)=>{
            return(
                <div key={item.id}>
                    <Link to={`/Kitchen/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                    </Link>
                    <div className="proModel">
                        <h5>{item.brand} {item.model}</h5>
                    </div>
                </div>
            )
        })}
    </div>
    </div>
    </>
    
  )
}

export default KitchenPage