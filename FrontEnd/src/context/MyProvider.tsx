// context/MyProvider.tsx
import React, { useState } from "react";
import MyContext from "./MyContext";

const MyProvider: React.FC = ({ children }: any) => {
  const [initialState, setInitialState] = useState({ toggleState: false });

  const toggleStateHandler = () => {
    setInitialState((prev) => {
      return { ...prev, toggleState: !prev.toggleState };
    });
  };
  const store = {
    toggleStateHandler: toggleStateHandler,
    toggleState: initialState.toggleState,
  };

  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
};

export default MyProvider;
