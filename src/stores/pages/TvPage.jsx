
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { tvData } from "../data/tv";
import { Link } from "react-router-dom";

const TvPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHeader = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== brand));
    } else {
      setSelectedProduct([...selectedProduct, brand]);
    }
    console.log(selectedProduct);
  };
  const filteredProduct = selectedProduct.length === 0? 
  tvData : tvData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {tvData.map((tv) => {
            return (
              <div key={tv.id}>
                <label>
                  <input
                    className="pro-input"
                    type="checkbox"
                    checked={selectedProduct.includes(tv.brand)}
                    onChange={() => companyHeader(tv.brand)}
                  />
                  {tv.brand}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/Tv/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt="" />
                  </div>
                </Link>
                <div className="proModel">
                  <h5>{item.brand} {item.model}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TvPage;
