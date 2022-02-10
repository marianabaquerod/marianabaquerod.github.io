import * as React from "react";
import "./About.css";
import aboutMe from "../../Images/aboutMe.JPG";
function About() {
  return (
    <div id="about">
      <div className="aboutContainer">
        <div>
          <img className="profileImage" src={aboutMe} />
        </div>
        <div className="aboutDescription">
          <h3 className="header">a little about me..</h3>
          <p className="aboutMeText">
            Ever since I was a little girl in Caracas, Venezuela, I've always
            been obsessed with technology. After learning how to code in high
            school, I set out to pursue a career in software development.{" "}
          </p>
          {/* <p className="aboutMeText">
            Throughout high school, I enrolled in several coding classes as I
            continued to explore the world of programming. The combination of
            these classes along with two summer programs for women in stem led
            me to major in Computer Science at the University of Miami.{" "}
          </p> */}
          <p className="aboutMeText">
            {" "}
            Throughout my four years at the University of Miami, I took
            advantage of several resources that the school offered. I was a part
            of the University of Miami radio station all four years. Also, I was
            a Software Engineer Intern at a Miami-based start-up, Taxfyle, while
            also being a full time student.{" "}
          </p>
          <p className="aboutMeText">
            Ultimately, upon my graduation from the University of Miami, I began
            working as a front-end software engineer at Tillster.
          </p>
          <div className="flexCircles">
            <div className="circleOne"></div>
            <div className="circleTwo" />
            <div className="circleOne" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
