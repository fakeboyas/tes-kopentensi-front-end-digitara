import React from "react";
import bg_header from "../../assets/images/background/bg-header.png";
import logo from "../../assets/images/dist/logo.svg";
import Menu from "./Menu";
import SignIn from "./SignIn";
import TotalStatus from "./TotalStatus";
import PreHeader from "./../PreHeader/PreHeader";
import styled from "styled-components";

function Header() {
  const Wrapper = styled.div`
  @media only screen and (max-width: 576px){
    .header{
      flex-direction : row !important;
      .logo{
        width : 80% !important;
        img{
          width : 100% !important;
        }
      }
    }
  }
  `;

  return (
    <Wrapper>
      <div
        className="header d-flex flex-column"
        style={{
          backgroundImage: `url(${bg_header})`,
          backgroundSize: "cover",
        }}
      >
        <PreHeader />
        <div className="d-flex flex-row align-items-center">
          <div className="logo" style={{ width: "30%" }}>
            <img style={{ width: "70%" }} src={logo} alt="" />
          </div>
          <div
            style={{ width: "70%" }}
            className="d-flex flex-row align-items-center"
          >
            <Menu />
            <SignIn />
          </div>
        </div>
        <div>
          <TotalStatus />
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
