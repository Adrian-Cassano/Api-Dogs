import React, { useState, useEffect } from "react";

import styles from "./Ficha.module.css";
import { useSelector } from "react-redux";

const Ficha = () => {

  const dogsStore = useSelector((state) => state.dogsSlice.dogs);

  const [dogs, setDogs] = useState(dogsStore);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  const idNum = id ? parseInt(id) : null;

  useEffect(() => {
    const perrosFiltrados = dogsStore?.filter((dog) => dog.id === idNum);
    setDogs(perrosFiltrados);
  },[idNum, dogsStore]);

  
  return (
    <div>
      {dogs?.map((dog) => {
        return (
          <div key={dog.id}>
            <div id={styles.MasterContainer}>
              <div id={styles.NavBarContainer}>{dog.name}</div>
            </div>
            <div id={styles.CardsContainer}>
              <div id={styles.ImgContainer}>
                <img id={styles.CardImg} src={dog.image.url} alt="Dog"></img>
              </div>
              <div id={styles.InfoMasterContainer}>
                <div id={styles.InfoContainer}>
                  <div>NAME: {dog.name}</div>
                  <div>BREED: {dog.breed_group}</div>
                  <div>BRED FOR: {dog.bred_for}</div>
                  <div>ORIGIN: {dog.origin}</div>
                  <div>TEMPERAMENT: {dog.temperament}</div>
                  <div>AGE: {dog.life_span}</div>
                  <div>WEIGHT: {dog.weight.metric}</div>
                  <div>SIZE IN METERS: {dog.height.metric}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ficha;
