import React from "react";
import styles from "./Title.module.css";
import { NavLink } from "react-router-dom";
const Title = () => {
  return (
    <div id={styles.MasterContainer}>
      <div id={styles.ButtonContainer}>
        <NavLink to={"/"} >
          <div id={styles.Button}/>
        </NavLink>
        </div>
      <div id={styles.TitleContainer}>
        <h1 id={styles.Title}>Who let the Dogs Out</h1>
        </div>
      </div>
  );
};

export default Title;
