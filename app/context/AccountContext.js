"use client";
import React, { createContext, useContext, useState } from "react";

// Create a context
export const AccountContext = createContext();

// Create a provider component
export const AccountProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [bet, setBet] = useState(1);

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
