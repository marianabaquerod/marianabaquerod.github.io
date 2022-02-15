import React from "react";
import Contact from "../Contact/Contact";
import laptop from "../../Images/iphone.png";
import "./Portfolio.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NavigationBar from "../NavigationBar/NavigationBarProjects";
function Radio() {
  return (
    <div>
      <NavigationBar />
      <div className="taxfyleContainer">
        <div>
          <h2 className="titleText">
            University of Miami Radio Station (WVUM)
          </h2>
          <p className="descriptionText">
            Founded in 1968, WVUM is the award winning, completely student-run
            radio station of the University of Miami. “The Voice” broadcasts
            over-the-air throughout South Florida and streams worldwide.
          </p>
          <div className="linkCircles">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/wvum-90-5-fm"
              className="linkCircle"
            >
              <LinkedInIcon sx={{ fontSize: 30, color: "white" }} />
            </a>
            <a
              target="_blank"
              href="https://www.wvum.org/"
              className="linkCircle"
            >
              <OpenInBrowserIcon sx={{ fontSize: 30, color: "white" }} />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/wvum905/"
              className="linkCircle"
            >
              <FacebookIcon sx={{ fontSize: 30, color: "white" }} />
            </a>
          </div>
          <div className="project">
            <p>
              <span className="spanProject">Who?</span> Web Staff at WVUM 90.5
              FM
            </p>
            <p>
              <span className="spanProject">What? </span> Website and mobile
              apps for the radio station
            </p>
            <p>
              <span className="spanProject">Where? </span> https://www.wvum.org/
            </p>
          </div>
        </div>
        <img className="logoStyle" src={laptop} />
      </div>
      <div className="additionalMaterialsTaxfyle">
        <div>
          <h2 className="projectTitle">Additional Information:</h2>
          <ul className="infoList">
            <li>Assisted with the website and mobile application redesign</li>
            <li>Managed and fixed any bugs</li>
            <li>
              Attended weekly meetings to promote WVUM's presence on campus
            </li>
          </ul>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Radio;
