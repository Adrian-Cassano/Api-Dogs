import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import Card from "../../components/Card";
import Title from "../../components/Title/Title";

import styles from "./Home.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import BREEDS from "../../components/Array/Array";

var i = 1;
var minimo = 0;
var maximo = 9;

const Home = () => {
  const navigate = useNavigate();

  const dogsStore = useSelector((state) => state.dogsSlice.dogs);

  const [dogs, setDogs] = useState(dogsStore);

  const [numPage, setNumPage] = useState(i);

  const [breeds1, setBreeds] = useState();

  var promedio = dogs.length / 10;

  useEffect(() => {
    if (!dogsStore || dogsStore.length === 0) {
      navigate("/");
    }
  });

  const handleInputChange = (e) => {
    setBreeds(BREEDS[0].breeds);

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

  const onChangeSelect = (e) => {
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
          <select value={breeds1} id={styles.Select} onChange={onChangeSelect}>
            {BREEDS.map((dog) => {
              return <option key={dog.key}>{dog.breeds}</option>;
            })}
          </select>
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
        <div id={styles.NumPage}>{numPage}</div>
        {i !== Math.trunc(promedio) &&
          dogsStore.length !== 0 &&
          dogs.length > 10 && (
            <button className={styles.ButtonPage} onClick={buttonNext}>
              »
            </button>
          )}
      </div>
    </div>
  );
};

export default Home;
