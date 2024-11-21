"use client";
import React, { createContext, useContext, useState } from "react";

// Create a context
export const MachineContext = createContext();

// Create a provider component
export const MachineProvider = ({ children }) => {
  const [result, setResult] = useState(["", "", ""]);
  const [modalDeposit, setModalDeposit] = useState(false);
  const symbols = ["redgrapes", "banana", "cherry", "orange", "strawberry"];
  const [messageBet, setMessageBet] = useState("");
  const [winner, setWinner] = useState(false);

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
      }}
    >
      {children}
    </MachineContext.Provider>
  );
};

export const useMachineContext = () => useContext(MachineContext);
