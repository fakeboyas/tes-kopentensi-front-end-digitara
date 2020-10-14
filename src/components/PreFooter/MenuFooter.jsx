import React from "react";
import styled from "styled-components";

function MenuFooter() {
  const Wrapper = styled.div`
    @media only screen and (max-width: 480px) {
      align-self: start;
      flex-direction: column !important ;
      justify-content: space-between !important;
      width: 100% !important;
      margin-bottom: 10px !important;
    }

    @media only screen and (max-width: 768px) {
    }
    @media only screen and (max-width: 1200px) {
      order: 1;
      width: 100% !important;
    }
  `;
  return (
    <Wrapper className="menu-footer text-light p-1 font-weight-bold d-flex flex-row justify-content-between w-50 mt-2">
      <p>FAQ</p>
      <p>CONTACT</p>
      <p>ITEMS</p>
      <p>TERMS AND CONDITIONS</p>
      <p>LEADERBOARD</p>
      <p>SIGN IN</p>
    </Wrapper>
  );
}

export default MenuFooter;
