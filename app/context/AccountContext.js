"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context
export const AccountContext = createContext();

// Create a provider component
export const AccountProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [bet, setBet] = useState(1);

  useEffect(() => {
    if (bet > 9999) {
      setBet(9999);
    }
  }, [bet]);

  useEffect(() => {
    const storedBalance = localStorage.getItem("balance");
    if (storedBalance) {
      setBalance(parseFloat(storedBalance));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  return (
    <AccountContext.Provider
      value={{
        balance,
        setBalance,
        bet,
        setBet,
        loading,
        setLoading,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountContext = () => useContext(AccountContext);
