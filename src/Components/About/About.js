import * as React from "react";
import "./About.css";
import logo from "../../Images/tillsterlogo.jpeg";
import info from "../../Images/tillster.png";
import taxfyle from "../../Images/tax.png";
import gw from "../../Images/gw.png";
import iphone from "../../Images/iphone.png";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
function About() {
  return (
    <div id="about">
      <h3 className="header">A little about me..</h3>
      <div className="aboutDescription">
        {/* <p className="aboutMeText">
          Ever since I was a little girl in Caracas, Venezuela, I've always been
          obsessed with technology. After learning how to code in high school, I
          set out to pursue a career in software development.{" "}
        </p> */}
      </div>
      <div className="circles">
        <div className="circleOne"></div> <div className="circleTwo"></div>
        <div className="circleThree"></div>
      </div>
    </div>
  );
}
export default About;
