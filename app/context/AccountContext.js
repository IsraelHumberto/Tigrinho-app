"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context
export const AccountContext = createContext();

// Create a provider component
export const AccountProvider = ({ children }) => {
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(1);

  useEffect(() => {
    if (bet > 9999) {
      setBet(9999);
    }
  }, [bet]);

  return (
    <AccountContext.Provider
      value={{
        balance,
        setBalance,
        bet,
        setBet,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountContext = () => useContext(AccountContext);
