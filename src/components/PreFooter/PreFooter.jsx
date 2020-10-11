import React from "react";
import MenuFooter from "./MenuFooter";
import SocialMedia from "./SocialMedia";
import Language from "./Language";
import g2pay from "./../../assets/images/icons/others/g2pay.png";

function PreFooter() {
  return (
    <div
      style={{ backgroundColor: "#20222b", height: "70px" }}
      className="pre-footer d-flex flex-row justify-content-center align-items-center"
    >
      <SocialMedia />
      <MenuFooter />

      <div className="w-25 d-flex flex-row ml-3 mt-2 justify-content-around">
        <Language />
        <a href="">
          <img src={g2pay} alt="" />
        </a>
      </div>
    </div>
  );
}

export default PreFooter;
