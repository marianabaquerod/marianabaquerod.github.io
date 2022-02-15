import React from "react";
import NavigationBar from "../NavigationBar/NavigationBarProjects";
import Contact from "../Contact/Contact";
import laptop from "../../Images/tax.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Portfolio.css";
function Taxfyle() {
  return (
    <div>
      <NavigationBar />
      <div className="taxfyleContainer">
        <div>
          <h2 className="titleText">Taxfyle</h2>
          <p className="descriptionText">
            Taxfyle coins itself the “Uber for accounting”. Taxfyle’s software
            allows individuals and companies to post their accounting jobs to a
            central website. The company’s version of “drivers” are CPAs who
            register on the website and take on work as they are available to
            fulfill your tax needs. I began working at Taxfyle as a Software
            Engineer Intern in May of 2019 and continued working there until May
            of 2020.
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
              <span className="spanProject">Who?</span> Miami-based startup
              aiming to improve the way users file their taxes.{" "}
            </p>
            <p>
              <span className="spanProject">What? </span> Redesign for Taxfyle
              Website under new UI/UX team
            </p>
            <p>
              <span className="spanProject">Where? </span>{" "}
              <a
                target="_blank"
                className="whereLink"
                href="https://www.taxfyle.com/"
              >
                https://www.taxfyle.com/
              </a>
            </p>
          </div>
        </div>
        <a target="_blank" href="https://www.taxfyle.com/">
          <img className="logoStyle" src={laptop} />
        </a>
      </div>
      <div className="additionalMaterialsTaxfyle">
        <div>
          <h2 className="projectTitle">Additional Information:</h2>
          <ul className="infoList">
            <li>Built and coordinated the launch of the website</li>
            <li>Worked closely with the UI/UX team to develop the project</li>
            <li>Managed and fixed all bugs until the website's launch</li>
            <li>
              Created automated testing procedures using Jest and Puppeteer
            </li>
            <li>Built using React JS with Gatsby</li>
          </ul>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Taxfyle;
