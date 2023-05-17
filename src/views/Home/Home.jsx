import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import Card from "../../components/Card";
import Title from "../../components/Title/Title";
import BREEDS from "../../components/Array/ArrayBreeds";
import TEMPERAMENT from "../../components/Array/ArrayTemperament";
import AGE from "../../components/Array/ArrayAge";

import styles from "./Home.module.css";

var indexPage = 1;
var minimo = 0;
var maximo = 9;

const Home = () => {
  const navigate = useNavigate();

  const dogsStore = useSelector((state) => state.dogsSlice.dogs);

  const [dogs, setDogs] = useState(dogsStore);

  const [numPage, setNumPage] = useState(indexPage);

  const [breeds, setBreeds] = useState();

  const [temperament, setTemperament] = useState();

  const [age, setAge] = useState();

  var promedio = dogs.length / 10;

  useEffect(() => {
    if (!dogsStore || dogsStore.length === 0) {
      navigate("/");
    }
  });

  const handleInputChange = (e) => {
    setBreeds(BREEDS[0].breeds);
    setAge(AGE[0].age);
    setTemperament(TEMPERAMENT[0].temperament);
    const search = e.target.value;
    
    
    var perrosFiltrados = dogsStore?.filter((dog) =>
      dog.name.toLowerCase().toString().includes(search)
    );

    setNumPage(1);
    minimo = 0;
    maximo = 9;
    indexPage = 1;

    setDogs(perrosFiltrados);
  };

  const onChangeBreeds = (e) => {
    setAge(AGE[0].age);
    setTemperament(TEMPERAMENT[0].temperament);
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
      indexPage = 1;

      setDogs(perrosFiltrados);
      setBreeds();
    }
  };
  const onChangeTemperaments = (e) => {
    setBreeds(BREEDS[0].breeds);
    setAge(AGE[0].age);
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
      indexPage = 1;

      setDogs(perrosFiltrados);
      setTemperament();
    }
  };
  const onChangeAge = (e) => {
    setBreeds(BREEDS[0].breeds);
    setTemperament(TEMPERAMENT[0].temperament);
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
      indexPage = 1;

      setDogs(perrosFiltrados);
      setAge();
    }
  };

  const buttonNext = () => {
    setNumPage(numPage + 1);
    indexPage++;
    minimo = maximo + 1;
    maximo = indexPage * 9 + indexPage - 1;
  };
  const buttonPrev = () => {
    indexPage--;
    setNumPage(numPage - 1);

    minimo = minimo - 10;
    maximo = maximo - 10;
  };

  return (
    <div id={styles.MegaContainer}>
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
            <div className={styles.SelectCU}>
              BREEDS
              <select
                value={breeds}
                id={styles.Select}
                onChange={onChangeBreeds}
              >
                {BREEDS.map((dog) => {
                  return <option key={dog.key}>{dog.breeds}</option>;
                })}
              </select>
            </div>
            <div className={styles.SelectCU}>
              TEMPERAMENT
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
            <div className={styles.SelectCU}>
              MORTALITY
              <select value={age} id={styles.Select} onChange={onChangeAge}>
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
        {indexPage !== 1 && (
          <button className={styles.ButtonPage} onClick={buttonPrev}>
            «
          </button>
        )}
        {indexPage === 1 && <button className={styles.ButtonPageOFF}>«</button>}
        <div id={styles.NumPage}>{numPage}</div>
        {indexPage !== Math.ceil(promedio) &&
          dogsStore.length !== 0 &&
          dogs.length > 10 && (
            <button className={styles.ButtonPage} onClick={buttonNext}>
              »
            </button>
          )}
        {indexPage === Math.ceil(promedio) && (
          <button className={styles.ButtonPageOFF}>»</button>
        )}
      </div>
      <div id={styles.ContainerContact}>
        <div id={styles.ContainerInfoP}>
          <div>Nombre y Apellido: Adrian Daniel Cassano</div>
          <div>Telefono: 1141909467</div>
          <div id={styles.EmailContainer}>E-mail:  
          <a href="mailto:cassano_adrian@hotmail.com?subject=Consulta&body=Hola,%20me%20gustaría%20hacerte%20una%20pregunta%20sobre%20X">
             cassano_adrian@hotmail.com
          </a>
          </div>
        </div>
        <div id={styles.ContainerLinks}>
          <a href={"https://github.com/Adrian-Cassano/AC-ARG"}>
            <div className={styles.LinkContactText}>GitHub </div>
            <div id={styles.Github} />
          </a>
          <a href={"https://www.linkedin.com/in/adrian-cassano-938766263/"}>
            <div className={styles.LinkContactText}>Linkedin</div>
            <div id={styles.Linkedin} />
          </a>
          <a href="https://wa.link/j2l168">
            <div className={styles.LinkContactText}>WhatsApp</div>
            <div id={styles.WhatsApp} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
