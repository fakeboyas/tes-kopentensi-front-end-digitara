import React from "react";
import facebook from "./../../assets/images/icons/socialmedia/facebook.png";
import twitter from "./../../assets/images/icons/socialmedia/twitter.png";
import styled from "styled-components";

function Share() {
  const Wrapper = styled.div`
    @media only screen and (max-width: 480px) {
      display: none !important;
    }

    @media only screen and (max-width: 768px) {
      
    }

    @media only screen and (max-width: 1024px) {
      width : 50% !important;
    }
  `;
  return (
    <Wrapper className="share d-flex flex-row w-25 justify-content-end align-items-end">
      <div>
        <button className="share btn btn-primary btn-sm">
          <img src={facebook} alt="" style={{ width: "15px" }} /> Share
        </button>
        <button className="share btn btn-sm btn-info ml-2 mr-4">
          <img src={twitter} alt="" style={{ width: "15px" }} /> Share
        </button>
      </div>
    </Wrapper>
  );
}

export default Share;
