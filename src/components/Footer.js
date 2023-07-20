import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
      </div>
      <p>©Shane's Portfolio</p>
    </footer>
  );
}

export default Footer;
