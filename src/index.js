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
  <Router basename={process.env.PUBLIC_URL}>
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
