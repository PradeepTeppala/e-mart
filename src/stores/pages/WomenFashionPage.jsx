
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { womanData } from "../data/woman";
import { Link } from "react-router-dom";

const MenFashionPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHeader = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== brand));
    } else {
      setSelectedProduct([...selectedProduct, brand]);
    }
    console.log(selectedProduct);
  };
  const filteredProduct =
    selectedProduct.length === 0
      ? womanData
      : womanData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {womanData.map((woman) => {
            return (
              <div>
                <label>
                  <input
                    className="pro-input"
                    type="checkbox"
                    checked={selectedProduct.includes(woman.brand)}
                    onChange={() => companyHeader(woman.brand)}
                  />
                  {woman.brand}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div>
                <Link to={`/WomenFashion/${item.id}`}>
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

export default MenFashionPage;
