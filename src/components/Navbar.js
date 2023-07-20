import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [isNavbarExpanded, setNavbarExpanded] = useState(false);

  const currentLocation = useLocation();

  useEffect(() => {
    setNavbarExpanded(false);
  }, [currentLocation]);

  return (
    <div className="navbar" id={isNavbarExpanded ? "open" : "close"}>
      <div className="toggleIcon">
        <button
          onClick={() => {
            setNavbarExpanded((prevState) => !prevState);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="navLinks">
        <Link to="/" className={currentLocation.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/projects" className={currentLocation.pathname === "/projects" ? "active" : ""}>
          Projects
        </Link>
        <Link to="/bio" className={currentLocation.pathname === "/bio" ? "active" : ""}>
          Bio
        </Link>
        <Link to="/contact" className={currentLocation.pathname === "/contact" ? "active" : ""}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
