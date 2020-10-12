import React from "react";
import styled from 'styled-components'

function MenuFooter() {
  const Wrapper = styled.div`
  @media only screen and (max-width: 576px){
    align-self : start;
  }
  
  `
  return (
    <Wrapper className="menu-footer text-light font-weight-bold d-flex flex-row justify-content-between w-50 mt-2">
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
