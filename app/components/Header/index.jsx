import React, { useEffect } from "react";
import { GiTigerHead } from "react-icons/gi";
import styles from "./header.module.css";
import { useAccountContext } from "../../context/AccountContext";
import { useMachineContext } from "../../context/MachineContext";

const Header = () => {
  const { balance } = useAccountContext();
  const { modalDeposit, setModalDeposit } = useMachineContext();

  return (
    <header className={styles.header}>
      <GiTigerHead />
      <h1 className={styles.nameApp}>Tigrinho app</h1>
      <div className={styles.balanceContainer}>
        <div className={styles.nameUser}>Israel</div>
        <div className={styles.balance}>R$ {balance}</div>
        <div className={styles.deposit} onClick={() => setModalDeposit(true)}>
          depositar
        </div>
      </div>
    </header>
  );
};

export default Header;
