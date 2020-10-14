import React from "react";
import styled from "styled-components";
import SocialMedia from "./SocialMedia";
import Share from "./Share";
import Language from "./Language";

function PreHeader() {
  const Wrapper = styled.div`
    @media only screen and (max-width: 480px) {
      width : 25% !important;
      background-color : transparent !important;
      display : none !important;
    }

    @media only screen and (max-width: 768px) {
      
    }

    @media only screen and (max-width: 1024px) {
    }
  `;

  return (
    <Wrapper
      className="d-flex flex-row text-light align-items-center mb-4"
      style={{ height: "50px", backgroundColor: "#1c1e26" }}
    >
      <Language />
      <SocialMedia />
      <Share />
    </Wrapper>
  );
}

export default PreHeader;
