import React from "react";
import styles from "./modalwinner.module.css";
import { useMachineContext } from "../../context/MachineContext";
import { useAccountContext } from "../../context/AccountContext";

const ModalWinner = () => {
  const { bet } = useAccountContext();
  const { result, setWinner } = useMachineContext();
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.resultIcons}>{result}</div>
        <h2 className={styles.title}>
          Parabéns! <br /> Você ganhou...
        </h2>
        <div className={styles.value}>R$ {bet * 10}</div>
        <button className={styles.btnClose} onClick={() => setWinner(false)}>
          Jogar Novamente
        </button>
      </div>
    </div>
  );
};

export default ModalWinner;
