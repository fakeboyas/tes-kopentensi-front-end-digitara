import React from "react";
import bg_header from "../../assets/images/background/bg-header.png";
import logo from "../../assets/images/dist/logo.svg";
import Menu from "./Menu";
import SignIn from "./SignIn";
import TotalStatus from "./TotalStatus";

function Header() {
  return (
    <div className="d-flex flex-column pt-3" style={{backgroundImage : `url(${bg_header})`}}>
      <div className="d-flex flex-row align-items-center">
        <div style={{ width: "40%" }}>
          <img style={{ width: "70%" }} src={logo} alt="" />
        </div>
        <div style={{ width: "60%" }} className="d-flex flex-row align-items-center">
          <Menu />
          <SignIn />
        </div>
      </div>
      <div className="mb-3">
        <TotalStatus />
      </div>
    </div>
  );
}

export default Header;
