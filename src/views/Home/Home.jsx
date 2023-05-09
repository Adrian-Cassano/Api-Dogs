import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import Card from "../../components/Card";
import Title from "../../components/Title/Title";
import BREEDS from "../../components/Array/ArrayBreeds";
import TEMPERAMENT from "../../components/Array/ArrayTemperament";
import AGE from "../../components/Array/ArrayAge";

import styles from "./Home.module.css";

var i = 1;
var minimo = 0;
var maximo = 9;

const Home = () => {
  const navigate = useNavigate();

  const dogsStore = useSelector((state) => state.dogsSlice.dogs);

  const [dogs, setDogs] = useState(dogsStore);

  const [numPage, setNumPage] = useState(i);

  const [breeds, setBreeds] = useState();

  const [temperament, setTemperament] = useState();

  const [age, setAge] = useState();

  console.log(dogsStore)

  var promedio = dogs.length / 10;
 
  console.log(Math.ceil(promedio))
  

  useEffect(() => {
    if (!dogsStore || dogsStore.length === 0) {
      navigate("/");
    }
  });

  const handleInputChange = (e) => {
    setBreeds(BREEDS[0].breeds);
    setAge(AGE[0].age)
    setTemperament(TEMPERAMENT[0].temperament)
    const search = e.target.value;

    var perrosFiltrados = dogsStore?.filter((dog) =>
      dog.name.toLowerCase().toString().includes(search)
    );

    setNumPage(1);
    minimo = 0;
    maximo = 9;
    i = 1;

    setDogs(perrosFiltrados);
  };

  const onChangeBreeds = (e) => {
    setAge(AGE[0].age)
    setTemperament(TEMPERAMENT[0].temperament)
    const breeds = e.target.value;

    if (breeds === "All") {
      setDogs(dogsStore);
    } else {
      var perrosFiltrados = dogsStore?.filter((dog) =>
        dog.breed_group?.includes(breeds)
      );

      setNumPage(1);
      minimo = 0;
      maximo = 9;
      i = 1;

      setDogs(perrosFiltrados);
      setBreeds();
    }
  };
  const onChangeTemperaments = (e) => {
    setBreeds(BREEDS[0].breeds);
    setAge(AGE[0].age)
    const temperaments = e.target.value;

    if (temperaments === "All") {
      setDogs(dogsStore);
    } else {
      var perrosFiltrados = dogsStore?.filter((dog) =>
        dog.temperament?.includes(temperaments)
      );

      setNumPage(1);
      minimo = 0;
      maximo = 9;
      i = 1;

      setDogs(perrosFiltrados);
      setTemperament();
    }
  };
  const onChangeAge = (e) => {
    setBreeds(BREEDS[0].breeds);
    setTemperament(TEMPERAMENT[0].temperament)
    const age = e.target.value;

    if (age === "All") {
      setDogs(dogsStore);
    } else {
      var perrosFiltrados = dogsStore?.filter((dog) =>
        dog.life_span?.includes(age)
      );

      setNumPage(1);
      minimo = 0;
      maximo = 9;
      i = 1;

      setDogs(perrosFiltrados);
      setAge();
    }
  };

  const buttonNext = () => {
    setNumPage(numPage + 1);
    i++;
    minimo = maximo;
    maximo = i * 9;
  };
  const buttonPrev = () => {
    if (i <= 1) {
      return null;
    }
    i--;
    setNumPage(numPage - 1);
    if (minimo <= 1) {
      return null;
    }
    minimo = minimo - 9;
    maximo = maximo - 9;
  };

  return (
    <div>
      <Title />
      <div id={styles.MasterContainer}>
        <div id={styles.NavBarContainer}>
          <div>
            <input
              maxLength="30"
              onChange={handleInputChange}
              id={styles.Search}
              type="text"
              placeholder="Search"
            />
          </div>
          <div id={styles.SelectContainer}>
            <div className={styles.SelectCU}>BREEDS
            <select value={breeds} id={styles.Select} onChange={onChangeBreeds}>
              {BREEDS.map((dog) => {
                return <option key={dog.key}>{dog.breeds}</option>;
              })}
            </select>
            </div>
            <div className={styles.SelectCU}>TEMPERAMENT
            <select
              value={temperament}
              id={styles.Select}
              onChange={onChangeTemperaments}
            >
              {TEMPERAMENT.map((dog) => {
                return <option key={dog.key}>{dog.temperament}</option>;
              })}
            </select>
            </div>
            <div className={styles.SelectCU}>MORTALITY
            <select
              value={age}
              id={styles.Select}
              onChange={onChangeAge}
            >
              {AGE.map((dog) => {
                return <option key={dog.key}>{dog.age}</option>;
              })}
            </select>
            </div>
          </div>
          <div id={styles.ButtonContainer}>
            <NavLink to={"/createCard"} id={styles.ButtonCreate}>
              Create New Card
            </NavLink>
          </div>
        </div>
      </div>
      <div id={styles.CardsContainer}>
        {dogs?.map((dog, index) => {
          return (
            <Card
              key={dog.id}
              id={dog.id}
              index={index}
              name={dog.name}
              image={dog.image.url}
              minimo={minimo}
              maximo={maximo}
            />
          );
        })}
      </div>
      <div id={styles.ContainerNumPage}>
        {i !== 1 && (
          <button className={styles.ButtonPage} onClick={buttonPrev}>
            «
          </button>
        )}
        {i === 1 &&(
          <button className={styles.ButtonPageOFF} >
          «
        </button>
        )}
        <div id={styles.NumPage}>{numPage}</div>
        {i !== Math.ceil(promedio) &&
          dogsStore.length !== 0 &&
          dogs.length > 10 && (
            <button className={styles.ButtonPage} onClick={buttonNext}>
              »
            </button>
          )}
          {i === Math.ceil(promedio)&& (
             <button className={styles.ButtonPageOFF} >
             »
           </button>
          )}
      </div>
    </div>
  );
};

export default Home;
