"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useContext, useEffect } from "react";
import { useMachineContext } from "./context/MachineContext";
import { useAccountContext } from "./context/AccountContext";
import { getResultSymbols, playGame, getResultWinner } from "./utils/utils";
import Header from "./components/Header";
import Deposit from "./components/Deposit";
import ModalWinner from "./components/ModalWinner";

export default function Home() {
  const {
    symbols,
    result,
    setResult,
    messageBet,
    setMessageBet,
    winner,
    setWinner,
  } = useMachineContext();

  const { balance, setBalance, bet, setBet } = useAccountContext();

  useEffect(() => {
    getResultWinner(result, bet, setBalance, setWinner);
  }, [result]);

  return (
    <div className={styles.page}>
      <Header />
      <Deposit />
      <div className={styles.resultIcons}>{result}</div>
      <div className={styles.betContainer}>
        <input
          className={styles.input}
          type="number"
          id="betInput"
          maxLength={4}
          onBlur={(event) => {
            setBet(event.target.value);
          }}
        />
        <button
          className={styles.btnPlay}
          onClick={() =>
            playGame(
              bet,
              balance,
              setBalance,
              setMessageBet,
              setResult,
              symbols
            )
          }
          // onClick={() => setResult(getResultSymbols(symbols))}
        >
          Play
        </button>
      </div>

      {messageBet && <div className={styles.message}>{messageBet}</div>}
      {winner && <ModalWinner />}
    </div>
  );
}
