import React from "react";
import bg_about from "./../../assets/images/background/bg-about.jpg";
import steam from "./../../assets/images/icons/socialmedia/steamblack.png";
import key from "./../../assets/images/icons/others/key.png";
import styled from "styled-components";

function About() {
  const Wrapper = styled.div`
    @media only screen and (max-width: 480px) {
      .title {
        font-size: 24px !important;
      }

      .text-follow {
        font-size: 14px !important;
      }
      .text-g2pay {
        display: none !important;
      }

      .signin{
        width : 70% !important;
        span{
          font-size : 14px !important;
        }
      }
    }

    @media only screen and (max-width: 768px) {
    }

    @media only screen and (max-width: 1024px) {
      .text-follow {
        width: 90% !important;
      }
      .text-g2pay {
        width: 90% !important;
      }
    }
  `;

  return (
    <Wrapper
      style={{ backgroundImage: `url(${bg_about})` }}
      className="d-flex flex-column align-items-center"
    >
      <h1
        className="title mt-5 font-weight-bolder"
        style={{
          color: "#ecc214",
        }}
      >
        Buy cases with awesome CS:GO skins!
      </h1>
      <p
        className="text-follow text-light font-weight-bold mt-3"
        style={{ fontSize: "24px", width: "60%" }}
      >
        Follow us in our social networks, and keep up to date with the latest
        news and special offers.
      </p>
      <p className="text-g2pay text-light mt-3" style={{ width: "65%" }}>
        Do you need new, cool skins? Choose and Buy a case that you like! We
        have expensive skins and some exclusive cases that you will not find in
        the game. Weekly updates, giveaways, technical support and a lot of
        payment options with G2A Pay.
      </p>
      <div
        className="signin mt-3 btn d-flex flex-row justify-content-around align-items-center"
        style={{ width: "300px", height: "60px", backgroundColor: "#ecc214" }}
      >
        <img
          style={{
            color: "black",
            width: "40px",
            filter: "opacity(0.5) drop-shadow(black)",
          }}
          src={steam}
          alt=""
        />{" "}
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
          Sign in through STEAM
        </span>
      </div>
      <div className="mt-5 mb-5">
        <img style={{ width: "40px" }} src={key} alt="" />
        <h1 className="text-light font-weight-bold mt-3"> 65 266 810</h1>
        <h5 className="text-light font-weight-normal mt-2">OPENED CASES</h5>
      </div>
    </Wrapper>
  );
}

export default About;
