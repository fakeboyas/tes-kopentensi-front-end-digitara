import React from "react";
import g2pay from "./../../assets/images/icons/others/g2pay.png";
import styled from "styled-components";

function G2pay() {
  const Wrapper = styled.div`
    @media only screen and (max-width: 480px) {
    }

    @media only screen and (max-width: 768px) {
    }

    @media only screen and (max-width: 1200px) {
        order : 4 !important;
        margin-bottom: 10px !important;
    }
  `;
  return (
    <Wrapper>
      {/* eslint-disable-next-line */}
      <a>
        <img src={g2pay} alt="" />
      </a>
    </Wrapper>
  );
}

export default G2pay;
