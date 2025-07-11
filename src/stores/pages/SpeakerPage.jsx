import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { speakerData } from "../data/speaker";
import { Link } from "react-router-dom";

const SpeakerPage = () => {
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
      ? speakerData
      : speakerData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {speakerData.map((speaker) => {
            return (
              <div key={speaker.id}>
                <label>
                  <input
                    className="pro-input"
                    type="checkbox"
                    checked={selectedProduct.includes(speaker.brand)}
                    onChange={() => companyHeader(speaker.brand)}
                  />
                  {speaker.brand}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/Speaker/${item.id}`}>
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
  );
};

export default SpeakerPage;
