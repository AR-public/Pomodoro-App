import React from "react";

export default function Navbar() {


  return (
    <div className="Navbar">
      <h1>
        <a href="/app" className="NavbarLogoAnchor">
          <img src="./icon-white2.png" alt="pomofocus icon" className="NavbarLogo" />
          <div className="NavbarAppTitle">Pomofocus</div>
        </a>
      </h1>
    </div>
  )

}