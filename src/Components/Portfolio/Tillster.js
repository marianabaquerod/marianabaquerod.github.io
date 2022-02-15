import React from "react";
import NavigationBar from "../NavigationBar/NavigationBarProjects";
import Contact from "../Contact/Contact";
import laptop from "../../Images/gw.png";
import react from "../../Images/react-native.png";
import next from "../../Images/next.png";
import ionic from "../../Images/ionic.png";
import typescript from "../../Images/typescript.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Portfolio.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
function Tillster() {
  return (
    <div>
      <NavigationBar />
      <div className="projectsContainer">
        <div>
          <h2 className="titleText">Tillster</h2>
          <p className="descriptionText">
            Tillster is the global leader in powering digital ordering,
            delivery, couponing and loyalty solutions, across web, app, kiosk
            and call center platforms. The company empowers restaurant brands
            looking to increase revenue, achieve operational efficiencies, and
            better engage guests. Enabling nearly 50 million digital orders per
            year, it offers the added dimension of integrated marketing and data
            mining, including a proprietary AI and machine-learning tool.{" "}
          </p>
          <div className="linkCircles">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/tillster/"
              className="linkCircle"
            >
              <LinkedInIcon sx={{ fontSize: 30, color: "white" }} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.tillster.com/"
              className="linkCircle"
            >
              <OpenInBrowserIcon sx={{ fontSize: 30, color: "white" }} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/tillsterinc/"
              className="linkCircle"
            >
              <FacebookIcon sx={{ fontSize: 30, color: "white" }} />
            </a>
          </div>
          <div className="project">
            <h3 className="projectTitle">Client: Greeenwich Pizza </h3>
            <p>
              <span className="spanProject">Who?</span> A Philippines based
              pizza and pasta chain owned by the Jollibee Foods Corporation.
            </p>
            <p>
              <span className="spanProject">What? </span> Redesign for Greenwich
              Pizza Website into a Progressive Web App (PWA)
            </p>
            <p>
              <span className="spanProject">Where? </span>{" "}
              <a
                target="_blank"
                className="whereLink"
                rel="noreferrer"
                href="https://www.greenwichdelivery.com/"
              >
                https://www.greenwichdelivery.com/
              </a>
            </p>
          </div>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.greenwichdelivery.com/"
        >
          <img className="logoStyle" src={laptop} />
        </a>
      </div>
      <div className="additionalMaterials">
        <div>
          <h2 className="projectTitle">Additional Information:</h2>
          <ul className="infoList">
            <li>Transformed the Angular JS website into a PWA</li>
            <li>Built using React Native with Typescript</li>
            <li>Framework: Next.js</li>
            <li>State management: Redux Toolkit</li>
            <li>UI Library: Ionic and React Native Paper</li>
          </ul>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Tillster;
