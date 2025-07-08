import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'

const AcPage = () => {
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
       acData : acData.filter((orange)=> selectedProduct.includes(orange.company));
    
  return (
    <>
    <Navbar/>
    <div className="fullpage">
        <div className="pro-selected">
            {acData.map((ac) => {
            return (
                <div key={ac.id}>
                <label>
                    <input className="pro-input"
                    type="checkbox"
                    checked={selectedProduct.includes(ac.company)}
                    onChange={() => companyHandler(ac.company)}
                    />
                    {ac.company}
                </label>
                </div>
            );
            })}
        </div>
    
        <div className="pageSection">
            {filteredProduct.map((item) => {
            return (
                <div key={item.id}>
                <Link to={`/Ac/${item.id}`}>
                    <div className="pageImg">
                    <img src={item.image} alt="" />
                    </div>
                </Link>
                <div className="proModel">
                    {item.company} {item.model}
                </div>
                </div>
            );
            })}
        </div>
    </div>
    </>
  )
}

export default AcPage;
