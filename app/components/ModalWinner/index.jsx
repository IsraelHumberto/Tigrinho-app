import React from "react";
import styles from "./modalwinner.module.css";
import { useMachineContext } from "../../context/MachineContext";
import { useAccountContext } from "../../context/AccountContext";

const ModalWinner = () => {
  const { bet } = useAccountContext();
  const { result, setWinner } = useMachineContext();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Parabéns! <br /> Você ganhou...
      </h2>
      <div className={styles.value}>R$ {bet * 10}</div>
    </div>
  );
};

export default ModalWinner;
