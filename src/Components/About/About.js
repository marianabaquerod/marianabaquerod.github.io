import * as React from "react";
import "./About.css";
import aboutMe from "../../Images/aboutMe.JPG";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";
import pdf from "../../Images/Mariana Baquero Degwitz - Resume.pdf";
function About() {
  return (
    <>
      <div id="about">
        <div className="aboutContainer">
          <div>
            <img className="profileImage" src={aboutMe} />
          </div>
          <div className="aboutDescription">
            <h3 className="header">a little about me...</h3>
            <p className="aboutMeText">
              Ever since I was a little girl in Caracas, Venezuela, I've always
              been obsessed with technology. After learning how to code in high
              school, I set out to pursue a career in software development.{" "}
            </p>

            <p className="aboutMeText">
              {" "}
              Throughout my four years at the University of Miami, I was a part
              of several projects that defined my college experience. First, I
              joined the student-led University of Miami radio station web staff
              as a web and mobile application developer. Also, I was a Software
              Engineer Intern at Miami-based start-up, Taxfyle, while also being
              a full time student.{" "}
            </p>
            <p className="aboutMeText">
              Ultimately, upon my graduation from the University of Miami, I
              began working as a Front-end Software Engineer at Tillster.
            </p>
            <p className="aboutLinksText">
              Check out my LinkedIn and Resume below for more information.
            </p>
            <div className="circles">
              <div className="circleOne">
                <IconButton
                  onClick={() =>
                    (window.location =
                      "https://www.linkedin.com/in/mariana-baquero-degwitz-b0b929178/")
                  }
                >
                  <LinkedInIcon
                    sx={{ color: "white", fontSize: 35, alignSelf: "center" }}
                  />
                </IconButton>
              </div>
              <div className="circleTwo">
                <a target="_blank" rel="noreferrer" href={pdf}>
                  <DownloadIcon
                    sx={{ color: "white", fontSize: 35, alignSelf: "center" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
