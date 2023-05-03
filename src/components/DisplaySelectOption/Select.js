import React from "react";
import styles from "./Select.module.css";

const Select = () => {
  return (
    <div id={styles.MasterContainer}>
      <select id={styles.Select}>
        <option>All dogs</option>
        <option>Small</option>
      </select>
    </div>
  );
};
export default Select;
