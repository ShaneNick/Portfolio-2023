import React from "react";
import "../styles/Bio.css";

// Added image import
import profileImage from "../assets/pfp.jpg";

function Bio() {
  return (
    <div id="bioSection" className="bioSection">

      {/* Added profile image */}
      <img src={profileImage} alt="John Doe" className="profileImage" />

      <h1>Bio</h1>

      {/* Added about me section */}
      <p className="aboutMe">
        As someone who is actively pursuing a career in software development, I am always eager to learn and grow in my field. While I am still developing my skills, I am passionate about the power of technology and its potential to solve complex problems and create engaging user experiences. I am currently learning HTML, CSS, and JavaScript through a course at Columbia University, and I am determined to continue honing my skills in these areas. While I am still gaining experience in the field, I believe that clear communication and collaboration are key to the success of any software development project. I am always open to feedback and eager to work with other developers to bring new ideas to life. I understand that I still have much to learn, but I am committed to growth and improvement, and I am always eager to take on new challenges. I would be honored to have the opportunity to bring my passion and drive to your software development team. I am confident that I have much to offer, and I am eager to continue learning and growing as a software developer.
      </p>

      {/* Skills section */}
      <h2>Skills</h2>
      <ul className="skillsList">
        <li>Languages: JavaScript, SQL</li>
        <li>Front-End: React, HTML/CSS, Bootstrap</li>
        <li>Back-End: Node.js, Express</li>
        <li>Databases: MongoDB, MySQL</li>
      </ul>

      {/* Education section */}
      <h2>Education</h2>
      <p>
        <strong>Columbia Engineering-
          The Fu Foundation School of Engineering and Applied Science
        </strong> -  January 2023 - June 2023. Intensive full stack web development program focusing on full stack web development
      </p>
      <p>
        <strong>St. Johns University, Queens NY </strong> - September 2019- June 2020
        Computer Science Major

      </p>
      <p>
        <strong>Baruch College, NY NY</strong> - January 2021 - December 2021
        Finance Major

      </p>

    </div>
  );
}

export default Bio;
