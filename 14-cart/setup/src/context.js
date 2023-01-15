import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
import useFetch from './hooks/useFetch';
import { useCallback } from 'react';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const { data, error, loading } = useFetch('https://course-api.com/react-useReducer-cart-project');

  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const increaseItem = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  const decreaseItem = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };
  const fetchCartItems = useCallback(() => {
    dispatch({ type: 'FETCH_CART', payload: data });
  }, [data]);

  useEffect(() => {
    fetchCartItems();
  }, [data, fetchCartItems]);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        fetchCartItems,
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
