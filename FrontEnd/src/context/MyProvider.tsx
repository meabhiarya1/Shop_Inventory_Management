// context/MyProvider.tsx
import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import axios from "axios";

const MyProvider: React.FC = ({ children }: any) => {
  const [initialState, setInitialState] = useState({ toggleState: false });
  const [totalProducts, setTotalProducts] = useState([]);
  const [openAddProductModal, setOpenAddProductModal] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const [existingData, setExistingData] = useState(null);
  const [isOpenEditModal, setOpenEditModal] = useState(false);

  //FETCHED ALL PRODUCTS
  useEffect(() => {
    const fetcheData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/`);

        setTotalProducts(response?.data);
        if (!selectedStore) {
          setSelectedStore(response?.data[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetcheData();
  }, [openAddProductModal, isOpenEditModal, setOpenAddProductModal]);

  const toggleStateHandler = () => {
    setInitialState((prev) => {
      return { ...prev, toggleState: !prev.toggleState };
    });
  };
  const store = {
    toggleStateHandler: toggleStateHandler,
    toggleState: initialState.toggleState,
    totalProducts: totalProducts,
    openAddProductModal: openAddProductModal,
    setOpenAddProductModal: setOpenAddProductModal,
    selectedStore: selectedStore,
    setSelectedStore: setSelectedStore,
    existingData,
    setExistingData,
    isOpenEditModal,
    setOpenEditModal,
  };

  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
};

export default MyProvider;
