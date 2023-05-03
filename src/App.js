import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Ficha from "./views/Ficha/Ficha";
import CreateCard from "./views/CreateCard/CreateCard"

function App() {
  return (
      <Router>
        <Routes>
          <Route path={"/"} exact element={<Landing />} />
          <Route path={"/home"} exact element={<Home />} />
          <Route path={"/ficha"} exact element={<Ficha />} />
          <Route path={"/createCard"} exact element={<CreateCard/>} />
        </Routes>
      </Router>
    
  );
}

export default App;
