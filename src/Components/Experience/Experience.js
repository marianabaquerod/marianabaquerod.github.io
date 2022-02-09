import * as React from "react";
import "./Experience.css";
import logo from "../../Images/tillsterlogo.jpeg";
import info from "../../Images/tillster.png";
import taxfyle from "../../Images/tax.png";
import gw from "../../Images/gw.png";
import iphone from "../../Images/iphone.png";
import radio from "../../Images/wvum.png";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
function Experience() {
  const [count, setCount] = React.useState(0);
  const text =
    count === 0
      ? info
      : count === 1
      ? taxfyle
      : count === 2
      ? iphone
      : count === 3
      ? logo
      : iphone;
  return (
    <div id="experience">
      <h3 className="header">Experience</h3>
      <div>
        <div className="gridTitles">
          <a onClick={() => setCount(2)} className="text">
            <Box
              sx={{
                width: 270,
                height: 270,
                borderRadius: 6,
                backgroundColor: "#ff5757",
                boxShadow: "rgba(149, 157, 165, 0.2)",
              }}
            >
              <div className="gridText">
                <h4>Tillster </h4>
                <h6>2018 - 2021</h6>
              </div>
            </Box>
          </a>
          <a onClick={() => setCount(3)} className="text">
            <Box
              sx={{
                width: 270,
                height: 270,
                borderRadius: 6,
                backgroundColor: "#ff5757",
              }}
            >
              <div className="gridText">
                <h4>Taxfyle</h4>
                <h6>2019-2020</h6>
              </div>
            </Box>
          </a>
        </div>
        <div className="gridTitles">
          <a onClick={() => setCount(2)} className="text">
            <Box
              sx={{
                width: 270,
                height: 270,
                borderRadius: 6,
                backgroundColor: "#ff5757",
              }}
            >
              <div className="gridText">
                <h4>WVUM - FM </h4>
                <h6>2018 - 2021</h6>
              </div>
            </Box>
          </a>
          <a onClick={() => setCount(3)} className="text">
            <Box
              sx={{
                width: 270,
                height: 270,
                borderRadius: 6,
                backgroundColor: "#ff5757",
              }}
            >
              <div className="gridText">
                <h4>Graphic Design Final Magazine</h4>
                <h6>2021</h6>
              </div>
            </Box>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Experience;
