import * as React from "react";
import "./Contact.css";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Contact() {
  return (
    <div className="contact">
      <div className="contactSection">
        <p className="aboutText">
          Interested in working together?{" "}
          <span className="chat">Let's chat.</span>{" "}
        </p>
        <Button
          size="medium"
          variant="outlined"
          sx={{ color: "white", borderColor: "white", fontSize: 18 }}
        >
          Get in touch.
        </Button>
      </div>
      <div className="logoSection">
        <IconButton>
          <EmailIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <LinkedInIcon sx={{ color: "white" }} />
        </IconButton>
        <div className="logoFooter">
          <h2 className="textLogo">mbd.</h2>
        </div>
      </div>
      <p className="handcraft">
        Handcrafted by me. Built using React and Material UI.{" "}
      </p>
    </div>
  );
}
export default Contact;
