import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Slider from "./Components/Slider.jsx";
import Men from "./Components/Men.jsx";
import Women from "./Components/Women.jsx";
import Kids from "./Components/Kids.jsx";
import Beauty from "./Components/Beauty.jsx";
import Homeliving from "./Components/Homeliving.jsx";
// import SearchProducts from "./Components/SearchProducts.jsx";
import ProductListProvider from "./Store/ProductListStore";
import WatchesLists from "./Components/WatchesLists.jsx";
import Bag from "./Components/Bag.jsx";
import Footer from "./Components/Footer.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import Profile from "./Components/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Slider />,
      },
    ],
  },
  {
    path: "/Men",
    element: <Men />,
    children: [
      {
        path: "/Men",
        element: <Slider></Slider>,
      },
    ],
  },
  {
    path: "/Women",
    element: <Women />,
    children: [
      {
        path: "/Women",
        element: <Slider></Slider>,
      },
    ],
  },
  {
    path: "/Kids",
    element: <Kids />,
    children: [
      {
        path: "/Kids",
        element: <Slider></Slider>,
      },
    ],
  },
  {
    path: "/Beauty",
    element: <Beauty />,
    children: [
      {
        path: "/Beauty",
        element: <Slider></Slider>,
      },
    ],
  },
  {
    path: "/Homeliving",
    element: <Homeliving />,
    children: [
      {
        path: "/Homeliving",
        element: <Slider></Slider>,
      },
    ],
  },
  // {
  //   path: "/WatchesLists",
  //   element: <WatchesLists />,
    
  // },
  {
    path: "/Profile",
    element: <Profile />,
    
  },
  {
    path: "/Bag",
    element: <Bag />,
    
  },
  {
    path:"/Footer",
    element:<Footer/>
  },
  {
    path:"/ContactUs",
    element:<ContactUs></ContactUs>
  }
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductListProvider>
      <RouterProvider router={router} />
    </ProductListProvider>
  </React.StrictMode>
);
