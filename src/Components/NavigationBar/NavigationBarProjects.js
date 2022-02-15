import "./NavigationBar.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonGroup } from "@mui/material";
import logo from "../../Images/mbd.png";
function NavigationBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        width: "100%",
        height: 75,
        alignItems: "center",
      }}
      className="Header"
    >
      <Toolbar
        className="content"
        sx={{
          width: "80%",
          margin: "auto",
          maxHeight: 75,
        }}
      >
        <IconButton href="/">
          <img className="logo" src={logo} alt="Logo" />
        </IconButton>
        <div className="buttons">
          <div className="link">
            <Button
              href="/#about"
              sx={{
                fontSize: 19,
                textTransform: "none",
                color: "black",
                fontFamily: "Poppins",
                fontWeight: 300,
              }}
            >
              About
            </Button>
          </div>
          <div className="link">
            <Button
              href="/#experience"
              sx={{
                fontSize: 19,
                textTransform: "none",
                color: "black",
                fontFamily: "Poppins",
                fontWeight: 300,
              }}
            >
              Projects
            </Button>
          </div>
          <div className="link">
            <Button
              sx={{
                fontSize: 19,
                textTransform: "none",
                color: "black",
                fontFamily: "Poppins",
                fontWeight: 300,
              }}
            >
              Contact
            </Button>
          </div>
        </div>
      </Toolbar>
    </Box>
  );
}

export default NavigationBar;
