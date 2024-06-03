import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import axios from "axios";
import MenShoes from "./MenShoes";

import Footer from "./Footer";

const Homeliving = () => {
  const [sofa, setsofa] = useState([]);
  const [light, setlight] = useState([]);
  const [door, setdoor] = useState([]);
  const [search, setsearch] = useState([]);
  const [check, setcheck] = useState(false);
  const [length, setlength] = useState(1);

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=sofa")
      .then((res) => res.json())
      .then((d) => {
        setsofa(d.products);
        console.log(d.products);
      });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=light")
      .then((res) => res.json())
      .then((d) => {
        setlight(d.products);
        console.log(d.products);
      });
  }, []);
  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=door")
      .then((res) => res.json())
      .then((d) => {
        setdoor(d.products);
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
          <h1 className="biggestDeals">BRANDED SOFFA'S</h1>
          <div className="container1">
            {sofa.map((d) => {
              return <MenShoes key={d.id} d={d}></MenShoes>;
            })}
          </div>
          <h1 className="biggestDeals">TOP BRAND LIGHTS & BULB</h1>
          <div className="container1">
            {light.map((d) => {
              return <MenShoes key={d.id} d={d}></MenShoes>;
            })}
          </div>
          <h1 className="biggestDeals">TRENDING IN OTHERS PRODUCTS</h1>
          <div className="container1">
            {door.map((d) => {
              return <MenShoes key={d.id} d={d}></MenShoes>;
            })}
          </div>
        </>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Homeliving;
