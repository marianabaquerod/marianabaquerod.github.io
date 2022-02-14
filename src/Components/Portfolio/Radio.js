import React from "react";
import Contact from "../Contact/Contact";
import laptop from "../../Images/tax.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NavigationBar from "../NavigationBar/NavigationBar";
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
            Taxfyle is considered the “Uber for accounting,” Taxfyle’s software
            allows individuals and companies to post their accounting jobs to a
            central website. The company’s version of “drivers” are CPAs who
            register on the website and take on work as they are available,
            completing anything from a simple 1040 to a complex corporate case.
          </p>
          <div className="linkCircles">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/tickmark-inc."
              className="linkCircle"
            >
              <LinkedInIcon sx={{ fontSize: 30, color: "white" }} />
            </a>
            <a
              target="_blank"
              href="https://www.taxfyle.com/"
              className="linkCircle"
            >
              <OpenInBrowserIcon sx={{ fontSize: 30, color: "white" }} />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/taxfyle/"
              className="linkCircle"
            >
              <FacebookIcon sx={{ fontSize: 30, color: "white" }} />
            </a>
          </div>
          <div className="project">
            <p>
              <span className="spanProject">Who?</span> A Philippines based
              pizza and pasta chain owned by the Jollibee Foods Corporation.
            </p>
            <p>
              <span className="spanProject">What? </span> Redesign for Taxfyle
              Website under new UI/UX team
            </p>
            <p>
              <span className="spanProject">Where? </span>{" "}
              https://www.taxfyle.com/
            </p>
          </div>
        </div>
        <img className="logoStyle" src={laptop} />
      </div>
      <div className="additionalMaterialsTaxfyle">
        <div>
          <h2 className="projectTitle">Additional Information:</h2>
          <ul className="infoList">
            <li>Built and coordinated the launch of the website</li>
            <li>Managed and fixed all bugs until my departure</li>
            <li>Built using React JS with Gatsby</li>
          </ul>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Radio;
