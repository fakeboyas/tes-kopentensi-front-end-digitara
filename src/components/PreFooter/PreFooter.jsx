import React from "react";
import MenuFooter from "./MenuFooter";
import SocialMedia from "./SocialMedia";
import Language from "./Language";
import G2pay from "./G2pay";

import styled from "styled-components";

function PreFooter() {
  const Wrapper = styled.div`
    background-color: #20222b;

    @media only screen and (max-width: 480px) {
      flex-direction: column !important;
      height: auto !important;
    }
    @media only screen and (max-width: 768px) {
      justify-content : space-evenly !important;
    }
  `;

  return (
    <Wrapper className="pre-footer m-2 d-flex flex-row flex-wrap justify-content-center align-items-center">
      <SocialMedia />
      <MenuFooter />
      <Language />
      <G2pay />
    </Wrapper>
  );
}

export default PreFooter;
