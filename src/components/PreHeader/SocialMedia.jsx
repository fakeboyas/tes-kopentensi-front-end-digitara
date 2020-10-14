import React from "react";
import social from "./../../data/social.json";
import styled from "styled-components";

function SocialMedia() {
  const Wrapper = styled.div`
    @media only screen and (max-width: 480px) {
      display : none !important;
    }

    @media only screen and (max-width: 768px) {
    
    }

    @media only screen and (max-width: 1024px) {
      display : none !important;
    }
  `;
  return (
    <Wrapper className="w-50 social-media d-flex flex-row align-items-center justify-content-center">
        <div className="align-items-end">
          <span>Join us : </span>
        </div>
        <div className="d-flex flex-row w-50">
          {" "}
          {social.map((data) => {
            return (
              <a className="ml-4" href={data.url}>
                <img src={data.icon} />
              </a>
            );
          })}
        </div>
    </Wrapper>
  );
}

export default SocialMedia;
