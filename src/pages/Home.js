import React from "react";
import EmailIcon from "@mui/icons-material/Email"; 
import GithubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import Resume from "../assets/Shane's Resume (3).pdf";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homeContainer">
      <div className="aboutSection">
        <h2 className= "title">Shane Tomonia's Portfolio</h2>
        <div className="aboutPrompt">
          <p>Trying to become a software developer one line at a time</p>
          <div className="contactIcons">
            <a href="mailto:shanetomonia@gmail.com">
              <EmailIcon />
            </a>
            <a href="https://github.com/ShaneNick" target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
            <a href={Resume} download>
              <DescriptionIcon />
            </a>
          </div>
          <div className="bioButtonContainer">
            <Link to="/bio">
              <button className="bioBtn">Bio</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
