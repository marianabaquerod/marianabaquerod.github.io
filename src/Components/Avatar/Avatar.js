import { Box } from "@mui/material";
import * as React from "react";
import avatar from "../../Images/girl-coder.png";
import "./Avatar.css";

function Avatar() {
  return (
    <div className="Image">
      <h2 className="Text">Hey there, I'm Mariana.</h2>
      <div className="avatarContainer">
        <img className="avatar" src={avatar} alt="Avatar" />
        <Box
          sx={{
            width: "100%",
            height: 420,
            marginTop: -23,
            backgroundColor: "#ff5757",
            position: "absolute",
            zIndex: -1,
          }}
        />
        <div className="description">
          <h3 className="headerText">Nice to meet you.</h3>
          <p className="about">
            I am a <span className="boldText">Front-end developer</span> with a
            passion for creating simple, useful, and creative code.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
