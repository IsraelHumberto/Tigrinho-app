import React, { useEffect, useState } from "react";
import styles from "./admin.module.css";

const Admin = () => {
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
    </div>
  );
};

export default Admin;
