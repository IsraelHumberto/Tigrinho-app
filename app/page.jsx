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
import Machine from "./components/Machine";

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

  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    getResultWinner(result, bet, setBalance, setWinner);
    setDisableButton(true);

    setTimeout(() => {
      setDisableButton(false);
    }, 1200);
  }, [result]);

  return (
    <>
      <Header />
      <div className={styles.page}>
        <Deposit />
        <div className={styles.resultIcons}>
          <Machine />
        </div>
        <div className={styles.betContainer}>
          <input
            className={styles.input}
            type="number"
            id="betInput"
            value={bet}
            onChange={(event) => {
              if (!/[0-9]/.test(event.key)) {
                if (event.key === "Backspace") {
                  return;
                }
                setBet(event.target.value);
                event.preventDefault();
              }
            }}
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
            disabled={disableButton}
            // onClick={() => setResult(getResultSymbols(symbols))}
          >
            Play
          </button>
        </div>

        {messageBet && <div className={styles.message}>{messageBet}</div>}
        {winner && <ModalWinner />}
      </div>
    </>
  );
}
