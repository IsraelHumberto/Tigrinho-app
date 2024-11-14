import React, { useEffect } from "react";
import styles from "./machine.module.css";
import { useMachineContext } from "../../context/MachineContext";
import { useAccountContext } from "../../context/AccountContext";

const Machine = () => {
  const { result, symbols } = useMachineContext();

  const symbolsImages = [...symbols, ...symbols, ...symbols];

  useEffect(() => {
    if (result[0]) {
      const isMobile = window.innerWidth <= 600;
      let distanceImages = 141;
      result.map((item, index) => {
        const position = symbols.findIndex((item) => item === result[index]);

        let distance =
          distanceImages * position + 704 * (Math.floor(Math.random() * 2) + 1);

        if (isMobile) {
          distanceImages = 70;
          distance =
            distanceImages * position +
            352 * (Math.floor(Math.random() * 2) + 1);
        }

        const slot = document.getElementById(`slot-${index + 1}`);
        slot.style.transition = `all 1s ease-in-out`;
        slot.style.top = `-${distance}px`;
      });
    }
  }, [result]);

  return (
    <div className={styles.machine}>
      <div className={`${styles.slot} ${styles.slot1}`}>
        <div className={styles.slotContent} id="slot-1">
          {symbolsImages}
        </div>
      </div>
      <div className={`${styles.slot} ${styles.slot2}`}>
        <div className={styles.slotContent} id="slot-2">
          {symbolsImages}
        </div>
      </div>
      <div className={`${styles.slot} ${styles.slot3}`}>
        <div className={styles.slotContent} id="slot-3">
          {symbolsImages}
        </div>
      </div>
    </div>
  );
};

export default Machine;
