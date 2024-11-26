"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useContext, useEffect } from "react";
import { useMachineContext } from "./context/MachineContext";
import { useAccountContext } from "./context/AccountContext";
import {
  getResultSymbols,
  playGame,
  getResultWinner,
  getQtdPossibleResults,
} from "./utils/utils";
import Header from "./components/Header";
import Deposit from "./components/Deposit";
import ModalWinner from "./components/ModalWinner";
import Machine from "./components/Machine";
import { FaPlus, FaMinus } from "react-icons/fa";
import Admin from "./components/Admin";

export default function Home() {
  const {
    symbols,
    result,
    setResult,
    messageBet,
    setMessageBet,
    winner,
    setWinner,
    homeAmount,
    setHomeAmount,
    setChanceWin,
  } = useMachineContext();

  const { balance, setBalance, bet, setBet } = useAccountContext();

  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (result[0] !== "" && result[1] !== "" && result[2] !== "") {
      getResultWinner(result, bet, setBalance, setWinner, setHomeAmount);
    }
    setDisableButton(true);
    setTimeout(() => setDisableButton(false), 1000);
  }, [result]);

  useEffect(() => {
    const localStorage = window.localStorage.getItem("difficult");
    if (localStorage) {
      window.localStorage.setItem("difficult", "");
    }
  }, []);

  useEffect(() => {
    getQtdPossibleResults(homeAmount, bet, setChanceWin);
  }, [bet, result]);

  return (
    <>
      <Header />
      <div className={styles.page}>
        <Deposit />
        <div className={styles.resultIcons}>
          <Machine />
        </div>
        <div className={styles.betContainer}>
          <div className={styles.inputBet}>
            <button
              className={`${styles.btnValueBet} ${styles.btnValueBetMinus}`}
              onClick={() => (bet >= 6 ? setBet(Number(bet) - 5) : setBet(1))}
            >
              <FaMinus />
            </button>
            <label className={styles.currencySign}>R$</label>
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
                  if (bet === 9999) {
                    setMessageBet("Valor máximo de aposta: R$ 9999");
                  } else {
                    setMessageBet("");
                  }
                  setBet(event.target.value);
                  event.preventDefault();
                }
              }}
              onBlur={() => getQtdPossibleResults(homeAmount, bet)}
            />
            <button
              className={`${styles.btnValueBet} ${styles.btnValueBetPlus}`}
              onClick={() => setBet(Number(bet) + 5)}
            >
              <FaPlus />
            </button>
          </div>
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
