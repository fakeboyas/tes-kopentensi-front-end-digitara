import React from "react";
import MenuFooter from "./MenuFooter";
import SocialMedia from "./SocialMedia";
import Language from "./Language";
import g2pay from "./../../assets/images/icons/others/g2pay.png";
import styled from 'styled-components'

function PreFooter() {

  const Wrapper = styled.div`
  background-color : #20222b;
  height : 70px;
  @media only screen and (max-width: 576px) {
      flex-direction : column !important;
      height : auto !important;
    }
  `;
  
  return (
    <Wrapper
      
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
    </Wrapper>
  );
}

export default PreFooter;
