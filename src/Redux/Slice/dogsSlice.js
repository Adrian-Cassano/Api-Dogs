import { createSlice } from "@reduxjs/toolkit";
import DogPhoto from "../../Img/Perro2.jpg";

const initialState = {
  dogs: [],
  ultimoID: 266,
};

export const dogsSlice = createSlice({
  name: "dogsApi",
  initialState,
  reducers: {
    getDogs: (state, action) => {
      state.dogs = action.payload;
    },
    addDogs: (state, action) => {
      const {
        name,
        breed,
        bredFor,
        origin,
        temperament,
        age,
        weight,
        sizeInMeters,
      } = action.payload;

      state.dogs.unshift({
        name: name,
        breed_group: breed,
        bred_for: bredFor,
        origin: origin,
        temperament: temperament,
        life_span: age,
        weight: { metric: weight },
        height: { metric: sizeInMeters },
        image: {
          url: DogPhoto,
        },
        id: state.ultimoID,
      });
      state.ultimoID++;
    },
  },
});

export const { getDogs, addDogs } = dogsSlice.actions;

export default dogsSlice.reducer;
