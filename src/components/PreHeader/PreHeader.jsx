import React from "react";
import styled from "styled-components";
import SocialMedia from "./SocialMedia";
import Share from './Share'
import Language from './Language'

function PreHeader() {
  return (
    <div className="d-flex flex-row text-light align-items-center" style={{height: "50px", backgroundColor : "#1c1e26"}}>
      <Language/>
      <SocialMedia />
      <Share/>
    </div>  
  );
}

export default PreHeader;
