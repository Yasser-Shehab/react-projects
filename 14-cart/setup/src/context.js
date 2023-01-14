import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
import useFetch from './hooks/useFetch';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const { data, error, loading } = useFetch('https://course-api.com/react-useReducer-cart-project');

  const [cart, setCart] = useState(data);

  useEffect(() => {
    setCart(data);
  }, [data]);

  return (
    <AppContext.Provider
      value={{
        cart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
