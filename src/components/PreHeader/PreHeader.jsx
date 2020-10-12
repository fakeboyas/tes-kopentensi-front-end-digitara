import React from "react";
import styled from "styled-components";
import SocialMedia from "./SocialMedia";
import Share from './Share'
import Language from './Language'

function PreHeader() {

  const Wrapper = styled.div`
   @media (max-width: 576px){
   
   }
  
  ` 

  return (
    <div className="d-flex flex-row text-light align-items-center mb-4" style={{height: "50px", backgroundColor : "#1c1e26"}}>
      <Language className="language"/>
      <SocialMedia className="social-media"/>
      <Share className="Share"/>
    </div>  
  );
}

export default PreHeader;
