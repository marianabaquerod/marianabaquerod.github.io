import Home from "./components/Home/Home";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Magazine from "./components/Portfolio/Magazine";
import Taxfyle from "./components/Portfolio/Taxfyle";
import Tillster from "./components/Portfolio/Tillster";
import Radio from "./components/Portfolio/Radio";
ReactDOM.render(
  <Router>
    {" "}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/magazine" element={<Magazine />} />
      <Route path="/taxfyle" element={<Taxfyle />} />
      <Route path="/tillster" element={<Tillster />} />
      <Route path="/radio" element={<Radio />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
