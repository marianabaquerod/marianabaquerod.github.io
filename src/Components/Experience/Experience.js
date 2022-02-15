import * as React from "react";
import "./Experience.css";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Box from "@mui/material/Box";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ImportContacts from "@mui/icons-material/ImportContacts";
import PersonIcon from "@mui/icons-material/Person";
function Experience() {
  return (
    <div id="experience">
      <div className="flexText">
        <h3 className="header">Projects</h3>
        <p>
          The best way to learn is through hands on experience. Take a peek into
          the projects I've been a part of over the past few years.
        </p>
      </div>
      <div className="flexExperience">
        <div className="gridTitles">
          <a href="/#/tillster" className="text">
            <Box
              sx={{
                width: 270,
                height: 270,
                borderRadius: 6,
                backgroundColor: "#91be4a",
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <div className="gridText">
                <div className="circle">
                  {" "}
                  <RestaurantIcon
                    sx={{
                      paddingTop: 1.8,
                      paddingLeft: 1.6,
                      color: "#91be4a",
                      fontSize: 30,
                    }}
                  />
                </div>

                <h4>Tillster </h4>
                <h6>2018 - 2021</h6>
              </div>
            </Box>
          </a>
          <a href="/#/taxfyle" className="text">
            <Box
              sx={{
                width: 270,
                height: 270,
                borderRadius: 6,
                backgroundColor: "#91be4a",
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <div className="gridText">
                <div className="circle">
                  <PersonIcon
                    sx={{
                      paddingTop: 1.8,
                      paddingLeft: 1.6,
                      color: "#91be4a",
                      fontSize: 30,
                    }}
                  />
                </div>
                <h4>Taxfyle</h4>
                <h6>2019-2020</h6>
              </div>
            </Box>
          </a>
        </div>
        <div className="gridTitles">
          <a href="/#/radio" className="text">
            <Box
              sx={{
                width: 270,
                height: 270,
                borderRadius: 6,
                backgroundColor: "#91be4a",
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <div className="gridText">
                <div className="circle">
                  <AudiotrackIcon
                    sx={{
                      paddingTop: 1.8,
                      paddingLeft: 1.6,
                      color: "#91be4a",
                      fontSize: 30,
                    }}
                  />
                </div>
                <h4>WVUM - FM </h4>
                <h6>2018 - 2021</h6>
              </div>
            </Box>
          </a>
          <a href="/#/magazine" className="text">
            <Box
              sx={{
                width: 270,
                height: 270,
                borderRadius: 6,
                backgroundColor: "#91be4a",
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <div className="gridText">
                <div className="circle">
                  <ImportContacts
                    sx={{
                      paddingTop: 1.8,
                      paddingLeft: 1.6,
                      color: "#91be4a",
                      fontSize: 30,
                    }}
                  />
                </div>
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
