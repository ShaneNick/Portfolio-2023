import React from "react";
import Bio from "./Bio";
import Footer from "./Footer";
import "../styles/Page.css";

function Page() {
  return (
    <div className="pageContainer">
      <Bio />
      <Footer />
    </div>
  );
}

export default Page;
