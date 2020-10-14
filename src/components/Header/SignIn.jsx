import React from "react";
import steam from "../../assets/images/icons/socialmedia/steam.png";
import styled from "styled-components";

function SignIn() {
  const Wrapper = styled.div`
    @media only screen and (max-width: 700px) {
      order: 1 !important ;
      width: 70% !important;
      padding: 0px !important;
      margin-top : 15px !important;
      Button {
        width: 100% !important;
      }
    }

    @media only screen and (max-width: 768px) {
      Button {
        font-size: 10px !important;
      }
    }

    @media only screen and (max-width: 1200px) {
    }
  `;

  const Button = styled.button`
    background: #7ba635;
    padding: 10px 15px 10px 15px;
    font-size: 14px !important;
    border-radius: 8px;
    :hover {
      img {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }
    }
  `;
  return (
    <Wrapper className="d-flex">
      <Button className="btn d-flex flex-column align-items-center justify-content-center">
        <img src={steam} alt="logo" style={{ width: "40px" }} />
        <span className="text-light font-weight-bold mt-1">
          Sign in through STEAM
        </span>
      </Button>
    </Wrapper>
  );
}

export default SignIn;
