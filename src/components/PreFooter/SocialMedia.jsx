import React from "react";
import social from "./../../data/social.json";
import styled from "styled-components";

function SocialMedia() {
  const Wrapper = styled.div`
    @media only screen and (max-width: 480px) {
    }

    @media only screen and (max-width: 768px) {
   
    }

    @media only screen and (max-width: 1200px) {
      order: 3 !important;
      margin-bottom: 10px !important;
    }
  `;

  return (
    <Wrapper className="social-footer w-25 d-flex flex-row justify-content-center">
      {social.map((data) => {
        return (
          <a key={data.url} className="ml-2 mt-2" href={data.url}>
            <img src={data.icon} />
          </a>
        );
      })}
    </Wrapper>
  );
}

export default SocialMedia;
