import React from "react";

export default function Navbar() {


  return (
    <div className="Navbar">
      <h1>
        <a href="/app" className="NavbarLogoAnchor">
          <img src="./images/icon-white2.png" alt="pomofocus icon" className="NavbarLogo" />
          <div className="NavbarAppTitle">Pomofocus</div>
        </a>
      </h1>

      <span className="NavbarButtonSpan">
        <button className="NavbarReportButton">
          <img src="./images/graph-white.png" alt="graph icon" className="NavbarReportIcon" />
          Report
        </button>

        <button className="NavbarSettingsButton">
          <img src="./images/config-white.png" alt="Settings icon" className="NavbarSettingsIcon" />
          Settings
        </button>
      </span>
    </div>
  )

}