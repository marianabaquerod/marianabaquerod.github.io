import Home from "./Components/Home/Home";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Magazine from "./Components/Portfolio/Magazine";
import Taxfyle from "./Components/Portfolio/Taxfyle";
import Tillster from "./Components/Portfolio/Tillster";
import Radio from "./Components/Portfolio/Radio";
ReactDOM.render(
  <Router>
    {" "}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/magazine" element={<Magazine />} />
      <Route exact path="/taxfyle" element={<Taxfyle />} />
      <Route exact path="/tillster" element={<Tillster />} />
      <Route exact path="/radio" element={<Radio />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
