import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import axios from "axios";
import MenShoes from "./MenShoes";

import Footer from "./Footer";

const Kids = () => {
  const [kids, setkids] = useState([]);
  // const [watches, setwatches] = useState([]);
  // const [wear, setwear] = useState([]);
  const [search, setsearch] = useState([]);
  const [check, setcheck] = useState(false);
  const [length, setlength] = useState(1);

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=kids")
      .then((res) => res.json())
      .then((d) => {
        setkids(d.products);
        console.log(d.products);
      });
  }, []);

  const searchData = (data) => {
    console.log(data);
    setsearch([]);
    setcheck(false);
    fetch(`https://dummyjson.com/products/search?q= ${data}`)
      .then((res) => res.json())
      .then((d) => {
        if (d.products.length !== 0) {
          setsearch(d.products);
          setcheck(true);
          setlength(1);
        } else {
          setlength(0);
        }
        console.log(d);
      });
  };

  return (
    <div>
      <Header searchData={searchData}></Header>
      <Outlet></Outlet>

      {check === true && (
        <>
          <h1 className="biggestDeals">SEARCH COLLECTION</h1>
          <div className="container1">
            {search.map((d) => {
              return <MenShoes key={d.id} d={d}></MenShoes>;
            })}
          </div>
        </>
      )}

      {length === 0 ? (
        <h1 className="biggestDeals">Search not found</h1>
      ) : (
        <>
          <h1 className="biggestDeals">LITTLE KIDS ACCESSORIES</h1>
          <div className="container1">
            {kids.map((d) => {
              return <MenShoes key={d.id} d={d}></MenShoes>;
            })}
          </div>
        </>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Kids;
