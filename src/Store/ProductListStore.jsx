import { createContext, useReducer, useState } from "react";

export const ProductList = createContext({
  productList: [],
  sendProducts: () => {},
  submitData: () => {},
  logout: () => {},
});

const productListReducer = (currValue, action) => {
  let newListProduct = currValue;
  if (action.type === "SEND_PRODUCTS") {
    newListProduct = [action.payload, ...currValue];
  }
  return newListProduct;
};

const ProductListProvider = ({ children }) => {
  const [productList, dispatchproductList] = useReducer(productListReducer, []);
  const [successfull, setsuccessfull] = useState(false);

  const sendProducts = (data) => {
    console.log(productList);

    dispatchproductList({
      type: "SEND_PRODUCTS",
      payload: {
        data,
      },
    });
  };

  const submitData = () => {
    console.log("submit");
    setsuccessfull(true);
  };

  const logout = () => {
    console.log("logout");
    setsuccessfull(false);
  };
  return (
    <ProductList.Provider
      value={{ productList, sendProducts, submitData, successfull, logout }}
    >
      {children}
    </ProductList.Provider>
  );
};

export default ProductListProvider;
