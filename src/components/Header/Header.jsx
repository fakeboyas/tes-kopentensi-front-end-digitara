import React, { useState } from "react";
import bg_header from "../../assets/images/background/bg-header.png";
import logo from "../../assets/images/dist/logo.svg";
import Menu from "./Menu";
import SignIn from "./SignIn";
import TotalStatus from "./TotalStatus";
import PreHeader from "./../PreHeader/PreHeader";
import styled from "styled-components";

function Header() {
  const [toggle, setToggle] = useState({ open: "flex", close: "none" });

  const handleToggleOpen = (e) => {
    e.preventDefault();
    setToggle({ open: "none", close: "flex" });
  };

  const handleToggleClose = (e) => {
    e.preventDefault();
    setToggle({ open: "flex", close: "none" });
  };

  const Wrapper = styled.div`
    @media only screen and (max-width: 700px) {
      .header {
        background-size: cover !important;
        background-position : center !important;
        .container-1 {
          margin: auto !important;
          width: 100% !important;
          .logo {
            display: flex !important;
            flex-direction: row !important;
            width: 100% !important;
            .toggle {
              padding: 0px !important;
              align-items: center !important;
              display: flex !important;
              flex-direction: row !important;
              justify-content: flex-end !important;
            }

            .icon {
              width: 50% !important;
              margin-top: 5px !important;
              img {
                width: 80% !important;
              }
            }
          }

          .menu {
            flex-direction: column !important;
          }
        }
        .status {
          display: none !important;
        }
      }
    }

    @media only screen and (max-width: 768px) {
     
    }

    @media only screen and (max-width: 1024px) {
      .header {
        .container-1 {
          display: flex !important;
          align-items: center !important;
          .menu {
            width : 90% !important;
            justify-content: center !important;
            align-items: center !important;
            margin: auto !important;
          }
          .logo {
            margin: auto !important;
            width: 100% !important;
            img {
              width: 40% !important;
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <div
        className="header d-flex flex-column flex-wrap"
        style={{
          backgroundImage: `url(${bg_header})`,
          backgroundSize: "cover",
        }}
      >
        <PreHeader />
        <div className="container-1 d-flex flex-row  flex-wrap align-items-center">
          <div className="logo" style={{ width: "30%" }}>
            <div className="icon">
              <img style={{ width: "70%" }} src={logo} alt="" />
            </div>
            <div className="toggle" style={{ display: "none", width: "40%" }}>
              <div
                onClick={handleToggleOpen}
                className="btn"
                style={{ display: `${toggle.open}` }}
              >
                <i
                  style={{ color: "white" }}
                  className="fa fa-bars fa-lg"
                  aria-hidden="true"
                ></i>
              </div>
              <div
                onClick={handleToggleClose}
                className="btn"
                style={{ display: `${toggle.close}` }}
              >
                <i
                  style={{ color: "white" }}
                  className="fa fa-times fa-lg"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>

          <div
            style={{ width: "70%" }}
            className="menu d-flex flex-row align-items-center"
          >
            <Menu close={toggle.close} />
            <SignIn />
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <TotalStatus />
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
