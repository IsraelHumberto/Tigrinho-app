"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context
export const MachineContext = createContext();

// Create a provider component
export const MachineProvider = ({ children }) => {
  const [result, setResult] = useState(["", "", ""]);
  const [modalDeposit, setModalDeposit] = useState(false);
  const symbols = ["redgrapes", "banana", "cherry", "orange", "strawberry"];
  const [messageBet, setMessageBet] = useState("");
  const [winner, setWinner] = useState(false);
  const [homeAmount, setHomeAmount] = useState(200);
  const [chanceWin, setChanceWin] = useState(25);

  useEffect(() => {
    const storedHomeAmount = localStorage.getItem("homeAmount");
    if (storedHomeAmount) {
      setHomeAmount(parseFloat(storedHomeAmount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("homeAmount", homeAmount);
  }, [homeAmount]);

  return (
    <MachineContext.Provider
      value={{
        symbols,
        result,
        setResult,
        modalDeposit,
        setModalDeposit,
        messageBet,
        setMessageBet,
        winner,
        setWinner,
        homeAmount,
        setHomeAmount,
        chanceWin,
        setChanceWin,
      }}
    >
      {children}
    </MachineContext.Provider>
  );
};

export const useMachineContext = () => useContext(MachineContext);
