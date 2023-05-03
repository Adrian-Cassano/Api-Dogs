import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Card.module.css";



const Card = ({ index, id, name, image, minimo, maximo}) => {
 

  return (
    <div>
      <div id={styles.MasterContainer}>
        {index <= maximo && index >= minimo && 
        (
          <NavLink id={styles.Link} to={`/Ficha?id=${id}`}>
            <div id={styles.CardContainer}>
              <div id={styles.Name}>{name}</div>
              <div>
                <img id={styles.CardImg} src={image} alt="Dog"></img>
              </div>
            </div>
          </NavLink>
        )}
      </div>
     
    </div>
  );
};

export default Card;
