import React, { useRef } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import myntraImg from "../Images/330-3306304_myntra-logo-transparent-png-myntra-online-shopping-app-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
// import SearchProducts from "./SearchProducts";
import { ProductList } from "../Store/ProductListStore";
import { useContext } from "react";

const Header = ({ searchData }) => {
  const { productList } = useContext(ProductList);
  const navigate = useNavigate();
  const inputData = useRef();

  const SumitData = (e) => {
    e.preventDefault();
    console.log(inputData.current.value);
    // navigate("/SeachProducts");
    searchData(inputData.current.value);
    inputData.current.value = "";
  };

  return (
    <>
      <div className="nav">
        <div className="nav1">
          <img src={myntraImg} alt="" onClick={() => navigate("/")} />
          <Link to="/Men">MEN</Link>
          <Link to="/Women">WOMEN</Link>
          <Link to="/Kids">KIDS</Link>
          <Link to="/Homeliving">HOME & LIVING</Link>
          <Link to="/Beauty">BEAUTY</Link>
        </div>
        <div className="nav2">
          <div className="searchDiv">
            <p className="search">
              <IoMdSearch onClick={SumitData}></IoMdSearch>
            </p>
            <form onSubmit={SumitData} id="fetch">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                ref={inputData}
              />
            </form>
          </div>
          <div className="icons">
            <Link to="/Profile" className="icon">
              <FaRegUser></FaRegUser>
            </Link>
            <Link to="/Profile" className="details">
              Profile
            </Link>
          </div>
          {/* <div className="icons">
            <Link to="WatchesLists" className="icon">
              <FaRegHeart></FaRegHeart>
            </Link>
            <p className="details">Watchlist</p>
          </div> */}
          <div className="icons">
            <Link to="/Bag" className="icon">
              <IoBagHandleOutline></IoBagHandleOutline>
            </Link>
            <Link to="/Bag" className="details">
              Bag {productList.length !==0 && productList.length}  
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
