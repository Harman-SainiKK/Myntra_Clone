import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import MenShoes from "./MenShoes";

import Footer from "./Footer";

const Women = () => {
  const [jewellery, setjewellery] = useState([]);
  const [women, setwomen] = useState([]);
  const [sneaker, setsneaker] = useState([]);
  const [search, setsearch] = useState([]);
  const [check, setcheck] = useState(false);
  const [length, setlength] = useState(1);

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=jewellery")
      .then((res) => res.json())
      .then((d) => {
        setjewellery(d.products);
        console.log(d.products);
      });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=women")
      .then((res) => res.json())
      .then((d) => {
        setwomen(d.products);
        console.log(d.products);
      });
  }, []);
  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=sneaker")
      .then((res) => res.json())
      .then((d) => {
        setsneaker(d.products);
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
          <h1 className="biggestDeals">WOMEN'S JEWELLERY</h1>
          <div className="container1">
            {jewellery.map((d) => {
              return <MenShoes key={d.id} d={d}></MenShoes>;
            })}
          </div>
          <h1 className="biggestDeals">GIRLS FASHIONS & ACCESSORIES</h1>
          <div className="container1">
            {women.map((d) => {
              return <MenShoes key={d.id} d={d}></MenShoes>;
            })}
          </div>
          <h1 className="biggestDeals">TRENDING IN INDIAN GIRLS WEAR</h1>
          <div className="container1">
            {sneaker.map((d) => {
              return <MenShoes key={d.id} d={d}></MenShoes>;
            })}
          </div>
        </>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Women;
