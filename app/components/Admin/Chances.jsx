import React, { useEffect, useState } from "react";
import styles from "./admin.module.css";
import { useMachineContext } from "../../context/MachineContext";

const Chances = ({ conditions, status }) => {
  const { chanceWin } = useMachineContext();
  const [chance, setChance] = useState("");

  useEffect(() => {
    if (status) {
      if (conditions === "green") {
        setChance("1 / 1");
      } else {
        setChance("1 / ∞");
      }
    } else {
      setChance("");
    }
  }, [conditions, status]);

  return (
    <div className={styles.chancesContainer}>
      <span className={styles.labelChances}>Chances</span>
      <span className={styles.chances}>
        {chance ? <>{chance}</> : <>1/{chanceWin}</>}
      </span>
    </div>
  );
};

export default Chances;
