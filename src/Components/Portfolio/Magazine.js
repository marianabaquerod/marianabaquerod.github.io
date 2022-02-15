import React from "react";
import Contact from "../Contact/Contact";
import laptop from "../../Images/final1.jpg";
import "./Portfolio.css";
import Pdf from "../../Images/FinalMagazine.pdf";
import NavigationBar from "../NavigationBar/NavigationBarProjects";
function Magazine() {
  return (
    <div>
      <NavigationBar />
      <div className="taxfyleContainer">
        <div>
          <h2 className="titleText">
            Introduction to Graphic Design Final Project
          </h2>
          <p className="descriptionText">
            During the Fall 2020 semester, I was enrolled in the University of
            Miami course STC 102: Introduction to Graphic Design. For our final
            project, we had to design and create a magazine spread for a
            fictional magazine of our choice.{" "}
          </p>
          <p className="descriptionText">
            Throughout the semester, we learned how to use Adobe Photoshop and
            InDesign to ultimately be able to create this magazine.{" "}
          </p>
          <div className="project">
            <a
              className="downloadButton"
              href={Pdf}
              target="_blank"
              rel="noreferrer"
            >
              Check out the Magazine
            </a>
          </div>
        </div>
        <img className="logoStyle" src={laptop} />
      </div>
      <div className="additionalMaterialsMagazine">
        <div>
          <h2 className="projectTitle">Requirements:</h2>
          <ul className="infoList">
            <li>A front and back cover</li>
            <li>Table of contents</li>
            <li>4 page spread with filler text</li>
            <li>A minimum of 2 ads that we had to create</li>
            <li>16 pages minimum</li>
          </ul>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Magazine;
