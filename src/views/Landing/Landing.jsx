import React, { useEffect } from "react";
import styles from "./Landing.module.css";
import { NavLink } from "react-router-dom";
import Title from "../../components/Title/Title";
import { useDispatch } from "react-redux";
import { getDogs } from "../../Redux/Slice/dogsSlice";
import axios from "axios";

const Landing = () => {
  const dispatch = useDispatch();

  const apiUrl = "https://api.thedogapi.com/v1/breeds";

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      dispatch(getDogs(response.data));
    });
  });

  return (
    <div id={styles.MasterContainer}>
      <Title />
      <div id={styles.ContainerButton}>
        <NavLink id={styles.Link} to="../Home">
          Begin!!
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
