import React, { useContext } from "react";

import {ProductList} from "../Store/ProductListStore";

const MenShoes = ({ d}) => {

  const {sendProducts} = useContext(ProductList)

  
  return (
    <div className="product">
      <img src={d.thumbnail} key={d.id} alt="" onClick={()=> {sendProducts(d),alert("ADDED TO THE BAG.")}} />
      <h2>{Math.floor(Math.random() * 100 + 1)}% OFF</h2>
    </div>
  );
};

export default MenShoes;
