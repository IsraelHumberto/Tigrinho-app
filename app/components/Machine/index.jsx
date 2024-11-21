import React, { useEffect } from "react";
import styles from "./machine.module.css";
import { useMachineContext } from "../../context/MachineContext";
import { useAccountContext } from "../../context/AccountContext";

import RedGrapes from "../Icons/RedGrapes";
import Bananas from "../Icons/Bananas";
import Cherry from "../Icons/Cherry";
import Orange from "../Icons/Orange";
import Strawberry from "../Icons/Strawberry";

const Machine = () => {
  const { result, symbols } = useMachineContext();

  const symbolsImages = [...symbols, ...symbols, ...symbols, ...symbols];

  useEffect(() => {
    console.log(result);
    if (result[0]) {
      const isMobile = window.innerWidth <= 600;
      let distanceImages = 150;
      result.map((item, index) => {
        const position = symbols.findIndex((item) => item === result[index]);

        let distance =
          distanceImages * position + 750 * (Math.floor(Math.random() * 2) + 1);

        // Esse fimal 200 é para ajustar a posição das imagens pois o inicio ta com top -150px
        // 395 é a altura de cada imagem * a quantidade de imagens: 5
        if (isMobile) {
          distanceImages = 79;
          distance =
            distanceImages * position +
            395 * (Math.floor(Math.random() * 2) + 1) -
            160;
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
          {symbolsImages.map((item, index) => {
            return (
              <div key={index} className={styles.icon}>
                {item === "redgrapes" && <RedGrapes />}
                {item === "banana" && <Bananas />}
                {item === "cherry" && <Cherry />}
                {item === "orange" && <Orange />}
                {item === "strawberry" && <Strawberry />}
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${styles.slot} ${styles.slot2}`}>
        <div className={styles.slotContent} id="slot-2">
          {symbolsImages.map((item, index) => {
            return (
              <div key={index} className={styles.icon}>
                {item === "redgrapes" && <RedGrapes />}
                {item === "banana" && <Bananas />}
                {item === "cherry" && <Cherry />}
                {item === "orange" && <Orange />}
                {item === "strawberry" && <Strawberry />}
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${styles.slot} ${styles.slot3}`}>
        <div className={styles.slotContent} id="slot-3">
          {symbolsImages.map((item, index) => {
            return (
              <div key={index} className={styles.icon}>
                {item === "redgrapes" && <RedGrapes />}
                {item === "banana" && <Bananas />}
                {item === "cherry" && <Cherry />}
                {item === "orange" && <Orange />}
                {item === "strawberry" && <Strawberry />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Machine;
