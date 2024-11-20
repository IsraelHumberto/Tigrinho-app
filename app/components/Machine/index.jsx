import React, { useEffect } from "react";
import styles from "./machine.module.css";
import { useMachineContext } from "../../context/MachineContext";
import { useAccountContext } from "../../context/AccountContext";
import {
  PiSunFill,
  PiMoonStarsFill,
  PiShootingStarLight,
  PiCloudRainFill,
  PiOrangeFill,
} from "react-icons/pi";
import { FaAppleAlt } from "react-icons/fa";
import { GiBananaPeeled, GiGrapes, GiCherry } from "react-icons/gi";

const Machine = () => {
  const { result, symbols } = useMachineContext();

  const symbolsImages = [...symbols, ...symbols, ...symbols];

  useEffect(() => {
    console.log(result);
    if (result[0]) {
      const isMobile = window.innerWidth <= 600;
      let distanceImages = 150;
      result.map((item, index) => {
        const position = symbols.findIndex((item) => item === result[index]);

        let distance =
          distanceImages * position + 750 * (Math.floor(Math.random() * 2) + 1);

        if (isMobile) {
          distanceImages = 70;
          distance =
            distanceImages * position +
            distanceImages * 5 * (Math.floor(Math.random() * 2) + 1);
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
                {item === "GiCherry" && <GiCherry color="#8b1818" />}
                {item === "GiGrapes" && <GiGrapes color="#6F2DA8" />}
                {item === "GiBananaPeeled" && (
                  <GiBananaPeeled color="#d6b707" />
                )}
                {item === "FaAppleAlt" && <FaAppleAlt color="#D52B1E" />}
                {item === "PiOrangeFill" && <PiOrangeFill color="#FF7F00" />}
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
                {item === "GiCherry" && <GiCherry color="#8b1818" />}
                {item === "GiGrapes" && <GiGrapes color="#6F2DA8" />}
                {item === "GiBananaPeeled" && (
                  <GiBananaPeeled color="#d6b707" />
                )}
                {item === "FaAppleAlt" && <FaAppleAlt color="#D52B1E" />}
                {item === "PiOrangeFill" && <PiOrangeFill color="#FF7F00" />}
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
                {item === "GiCherry" && <GiCherry color="#8b1818" />}
                {item === "GiGrapes" && <GiGrapes color="#6F2DA8" />}
                {item === "GiBananaPeeled" && (
                  <GiBananaPeeled color="#d6b707" />
                )}
                {item === "FaAppleAlt" && <FaAppleAlt color="#D52B1E" />}
                {item === "PiOrangeFill" && <PiOrangeFill color="#FF7F00" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Machine;
