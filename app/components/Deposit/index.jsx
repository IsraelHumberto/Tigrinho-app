import React, { useEffect } from "react";
import { useMachineContext } from "../../context/MachineContext";
import { useAccountContext } from "../../context/AccountContext";
import styles from "./deposit.module.css";

const Deposit = () => {
  const { modalDeposit, setModalDeposit } = useMachineContext();
  const { balance, setBalance } = useAccountContext();

  return modalDeposit ? (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button
          onClick={() => setModalDeposit(false)}
          className={styles.btnClose}
        >
          x
        </button>
        <h2 className={styles.title}>Digite o valor</h2>

        <input
          className={styles.input}
          type="number"
          id="depositInput"
          onKeyDown={(event) => {
            if (!/[0-9]/.test(event.key)) {
              if (event.key === "Backspace") {
                return;
              }
              event.preventDefault();
            }
          }}
          maxLength={4}
        />

        <button
          className={styles.btnDeposit}
          onClick={() => {
            const input = document.querySelector(`#depositInput`);
            const value = parseInt(input.value, 10);
            if (!isNaN(value)) {
              setBalance((prevBalance) => prevBalance + value);
              setModalDeposit(false);
            }
          }}
        >
          Depositar
        </button>
      </div>
    </div>
  ) : null;
};

export default Deposit;
