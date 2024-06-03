import React, { useContext } from "react";
import Footer from "./Footer";
import myntraImg from "../Images/330-3306304_myntra-logo-transparent-png-myntra-online-shopping-app-removebg-preview.png";
import { Form, useNavigate } from "react-router-dom";
import { ProductList } from "../Store/ProductListStore";
const Profile = () => {
  const navigate = useNavigate();

  
  const {submitData,successfull,logout} = useContext(ProductList)

  

  return (
    <>
      <div className="watchListNav">
        <img src={myntraImg} alt="" onClick={() => navigate("/")} />
      </div>

      {successfull === true ? (
        <div className="sucessfully-login">
          <h1>Your Successfully login</h1>
          <button onClick={logout}>Logout</button>
          
        </div>
      ) : (
        <>
          <div className="profile">
            <Form onSubmit={submitData} >
              <div>
                <label htmlFor="email">E-mail</label>
                <br />
                <input
                  type="emial"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="Password">Password</label>
                <br />
                <input
                  type="text"
                  id="Password"
                  name="password"
                  placeholder="Password@gmail.com"
                  required
                />
              </div>
              <button>Submit</button>
            </Form>
          </div>
        </>
      )}

      <Footer></Footer>
    </>
  );
};

export default Profile;
