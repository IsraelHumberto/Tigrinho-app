import React, { useEffect, useState } from "react";
import styles from "./admin.module.css";
import Chances from "./Chances";
import { useMachineContext } from "../../context/MachineContext";

const Admin = () => {
  const { homeAmount } = useMachineContext();
  const [status, setStaus] = useState(false);
  const [condition, setCondition] = useState("green");
  useEffect(() => {
    if (status) {
      localStorage.setItem("difficult", condition);
    } else {
      localStorage.setItem("difficult", "");
    }
  }, [status, condition]);
  return (
    <div>
      <h1 className={styles.header}>MANIPULAÇÃO</h1>

      <div className={styles.labelOnoff}>
        <label htmlFor="onoff">Ligar</label>
        <input
          type="checkbox"
          id="onoff"
          className={styles.checkboxOnOff}
          onChange={(e) => setStaus(e.target.checked)}
        />
      </div>

      {status && (
        <div className={styles.labelCondition}>
          <label htmlFor="condition">Resultado</label>
          <select
            id="condition"
            className={styles.selectCondition}
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          >
            <option value="green">Green</option>
            <option value="red">Red</option>
          </select>
        </div>
      )}

      <Chances conditions={condition} status={status} />
      <div className={styles.homeAmountContainer}>
        <div>Valor da casa</div>
        <span className={styles.homeAmount}>R$ {homeAmount}</span>
      </div>
    </div>
  );
};

export default Admin;
