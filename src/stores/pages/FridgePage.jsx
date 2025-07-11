import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'

const FridgePage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);
        
          const companyHandler = (mango) => {
            if (selectedProduct.includes(mango)) {
              setSelectedProduct(selectedProduct.filter((item) => item !== mango));
            } else {
              setSelectedProduct([...selectedProduct, mango]);
            }
            console.log(selectedProduct);
          };
        
           const filteredProduct = selectedProduct.length === 0?
           fridgeData : fridgeData.filter((orange)=> selectedProduct.includes(orange.brand));
        
  return (
    <>
    <Navbar/>
    <div className="fullpage">
        <div className="pro-selected">
            {fridgeData.map((fridge) => {
            return (
                <div key={fridge.id}>
                <label>
                    <input className="pro-input"
                    type="checkbox"
                    checked={selectedProduct.includes(fridge.brand)}
                    onChange={() => companyHandler(fridge.brand)}
                    />
                    {fridge.brand}
                </label>
                </div>
            );
            })}
        </div>
    
        <div className="pageSection">
            {filteredProduct.map((item) => {
            return (
                <div key={item.id}>
                <Link to={`/Fridge/${item.id}`}>
                    <div className="pageImg">
                    <img src={item.image} alt="" />
                    </div>
                </Link>
                <div className="proModel">
                    <h4>{item.brand} {item.model}</h4>
                </div>
                </div>
            );
            })}
        </div>
    </div>
    </>
  )
}

export default FridgePage
