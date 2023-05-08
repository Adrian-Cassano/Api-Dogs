import React from "react";

import BREEDS from "../../components/Array/Array";

import styles from "./Select.module.css";



const Select = () => {

  return (
    <div id={styles.MasterContainer}>
      <select
        id={styles.Select}
      >
        {BREEDS?.map((dog) => {
          
          return (
            dog.breeds !== "All" &&(
              <option value={dog.breeds} key={dog.key}>
              {dog.breeds}
            </option>
            )
           
          );
        })}
      </select>
    </div>
  );
};
export default Select;
