import React, { useContext } from "react";
import { ProductList } from "../Store/ProductListStore";

import Footer from "./Footer";
import myntraImg from "../Images/330-3306304_myntra-logo-transparent-png-myntra-online-shopping-app-removebg-preview.png";

const WatchesLists = () => {
  const { productList } = useContext(ProductList);
  console.log(productList);
  return (
    <>
      <div className="watchListNav">
        <img src={myntraImg} alt="" />
      </div>
      <div className="watchlist">
        {productList.map((d) => {
          return (
            <>
              <div className="watchListProducts" key={d.data.id}>
                <div className="left">
                  <img src={d.data.thumbnail} alt="" />
                </div>
                <div className="right">
                  <h3>{d.data.title}</h3>
                  <p>{d.data.description}</p>
                  <h5>Price $ {d.data.price}</h5>

                  <button>ADD TO BAG</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Footer></Footer>
    </>
  );
};

export default WatchesLists;
