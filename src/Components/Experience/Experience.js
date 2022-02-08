import * as React from "react";
import "./Experience.css";
import logo from "../../Images/tillsterlogo.jpeg";
import info from "../../Images/tillster.png";
import taxfyle from "../../Images/tax.png";
import gw from "../../Images/gw.png";
import iphone from "../../Images/iphone.png";

import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
function Experience() {
  const [count, setCount] = React.useState(0);
  const text =
    count === 0
      ? "Tillster"
      : count === 1
      ? "Taxfyle"
      : count === 2
      ? "Radio"
      : count === 3
      ? "Magazine"
      : "Hello";
  return (
    <div id="experience">
      <h3 className="header">Experience</h3>
      <div className="hero">
        <h4>{text}</h4>
      </div>
      <div className="gridTitles">
        <a onClick={() => setCount(0)} className="text">
          <Divider sx={{ borderBottomWidth: 2 }} />
          <h4>Tillster</h4>
          <h6>2021 - Present</h6>
        </a>
        <a onClick={() => setCount(1)} className="text">
          <Divider sx={{ borderBottomWidth: 2 }} />
          <h4>Taxfyle</h4>
          <h6>2019 - 2020</h6>
        </a>
        <a onClick={() => setCount(2)} className="text">
          <Divider sx={{ borderBottomWidth: 2 }} />
          <h4>UMVUM</h4>
          <h6>2018 - 2021</h6>
        </a>
        <a onClick={() => setCount(3)} className="text">
          <Divider sx={{ borderBottomWidth: 2 }} />
          <h4>Graphic Design Final Magazine</h4>
          <h6>2021</h6>
        </a>
      </div>
    </div>
  );
}
export default Experience;
