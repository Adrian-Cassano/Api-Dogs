import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addDogs } from "../../Redux/Slice/dogsSlice";
import Title from "../../components/Title/Title"

import styles from "./CreateCard.module.css";

const Modal = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const breed = e.target[1].value;
    const bredFor = e.target[2].value;
    const origin = e.target[3].value;
    const temperament = e.target[4].value;
    const age = e.target[5].value;
    const weight = e.target[6].value;
    const sizeInMeters = e.target[7].value;

    if (name === "") {
      alert("Ingrese un nombre");
    } else if (breed === "") {
      alert("Ingrese una raza");
    } else if (name.length > 18) {
      alert("El maximo es de 18 carácteres en el nombre");
    } else {
      dispatch(
        addDogs({
          name,
          breed,
          bredFor,
          origin,
          temperament,
          age,
          weight,
          sizeInMeters,
        })
      );
      navigate("/Home");
    }
  };

  return (
    <div id={styles.MasterContainer}>
      <Title/>
      <div id={styles.ModalContainer}>
        <div id={styles.Modal}>
          <div id={styles.TitleContainer}>
            <div id={styles.Title}>Create your new dog card </div>
            <button onClick={props.toggleModal} id={styles.CloseButton}>
              X
            </button>
          </div>
          <div id={styles.InputContainer}>
            <form onSubmit={handleSubmit}>
              <div>NAME</div>
              <input maxLength="30" className={styles.Input} />
              <div> BREED</div>
              <input maxLength="60" className={styles.Input} />
              <div> BRED FOR</div>
              <input maxLength="60" className={styles.Input} />
              <div> ORIGIN</div>
              <input maxLength="60" className={styles.Input} />
              <div> TEMPERAMENT</div>
              <input maxLength="60" className={styles.Input} />
              <div> AGE</div>
              <input maxLength="60" className={styles.Input} />
              <div> WEIGHT</div>
              <input maxLength="60" className={styles.Input} />
              <div> SIZE IN METERS</div>
              <input maxLength="60" className={styles.Input} />
              <button>aceptar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
