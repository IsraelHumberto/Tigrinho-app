"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useContext, useEffect } from "react";
import { useMachineContext } from "./context/MachineContext";
import { getResultSymbols } from "./utils/utils";
import Header from "./components/Header";

export default function Home() {
  const { state, symbols, result, setResult } = useMachineContext();

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.resultIcons}>{result}</div>
      <button
        className={styles.btnPlay}
        onClick={() => setResult(getResultSymbols(symbols))}
      >
        Play
      </button>
    </div>
  );
}
