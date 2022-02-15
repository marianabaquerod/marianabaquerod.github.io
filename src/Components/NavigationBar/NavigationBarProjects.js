import "./NavigationBar.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../Images/mbd.png";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { CloseOutlined } from "@material-ui/icons";
function NavigationBar() {
  const [isDrawerOpened, setIsDrawerOpened] = React.useState(false);
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
              href="/#contact"
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
        <div className="drawer">
          <IconButton onClick={() => setIsDrawerOpened(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={isDrawerOpened}
            onClose={() => setIsDrawerOpened(false)}
          >
            <div>
              <IconButton onClick={() => setIsDrawerOpened(false)}>
                <CloseOutlined />
              </IconButton>
            </div>
            <div className="drawerLinks">
              <a className="drawerLink" href="/#about">
                About
              </a>
              <Divider />
              <a className="drawerLink" href="/#experience">
                Projects
              </a>
              <Divider />
              <a className="drawerLink" href="/#contact">
                Contact
              </a>
            </div>
          </Drawer>
        </div>
      </Toolbar>
    </Box>
  );
}

export default NavigationBar;
