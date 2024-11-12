'use client'
import React, { createContext, useContext, useState } from 'react';

// Create a context
export const MachineContext = createContext();

// Create a provider component
export const MachineProvider = ({ children }) => {
    const [result, setResult] = useState(["", "", ""]);
    const symbols = ["🍒", "🍉", "🍇", "🍓", "🍊"];

    return (
        <MachineContext.Provider value={{symbols, result, setResult }}>
            {children}
        </MachineContext.Provider>
    );
};

export const useMachineContext = () => useContext(MachineContext);