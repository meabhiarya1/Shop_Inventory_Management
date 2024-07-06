// context/MyProvider.tsx
import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import axios from "axios";

const MyProvider: React.FC = ({ children }: any) => {
  const [initialState, setInitialState] = useState({ toggleState: false });
  const [totalProducts, setTotalProducts] = useState([]);

  //FETCHED ALL PRODUCTS
  useEffect(() => {
    const fetcheData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setTotalProducts(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetcheData();
  }, [totalProducts]);

  const toggleStateHandler = () => {
    setInitialState((prev) => {
      return { ...prev, toggleState: !prev.toggleState };
    });
  };
  const store = {
    toggleStateHandler: toggleStateHandler,
    toggleState: initialState.toggleState,
    totalProducts: totalProducts,
  };

  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
};

export default MyProvider;
