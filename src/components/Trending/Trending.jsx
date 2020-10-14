import React from "react";
import trending from "./../../data/trending.json";
import bg_trending from "./../../assets/images/background/bg-trending.png";
import styled from "styled-components";

function Trending() {
  const Wrapper = styled.div`
    @media only screen and (max-width: 768px) {
      .content {
        background-size : contain, cover;
      }
    }
  `;
  const Div = styled.div`
    width: 20%;

    :hover {
      .item {
        -webkit-animation: mover 0.8s infinite alternate;
        animation: mover 0.8s infinite alternate;
      }
      @-webkit-keyframes mover {
        0% {
          transform: scaleX(-1) translateX(-30px) translateY(0);
          transition: 0.7s;
        }
        100% {
          transform: scaleX(-1) translateX(-30px) translateY(-20px);
        }
      }
      @keyframes mover {
        0% {
          transform: scaleX(-1) translateX(-30px) translateY(0);
          transition: 0.7s;
        }
        100% {
          transform: scaleX(-1) translateX(-30px) translateY(-20px);
        }
      }
      .price {
        background: #ecc214;
        color: black !important;
        .amount-price {
          color: black !important;
        }
        .text-price {
          display: none;
        }
        .open {
          display: contents !important;
        }
      }

      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    @media only screen and (max-width: 1201px) {
      background-size: cover !important;
      width: 33% !important;
      align-items : center !important;
      flex-wrap: wrap;
      margin-top: 30px;
    }

    @media only screen and (max-width: 768px) {
      width: 47% !important;
      .parent-item,
      .price {
        width: 75% !important;
        background-size: cover;
        font-size: 16px !important;
        
      }

      @media only screen and (max-width: 600px) {
        width: 80% !important;
        margin : auto !important;
        .parent-item,
        .price {
          width: 75% !important;
          margin-top : 15px !important;
          margin-bottom : 15px !important;
        }
      }
    }
  `;

  return (
    <Wrapper className="pt-3  text-light">
      <h3 className="text-light"> TRENDING CASES</h3>
      <div
        style={{
          backgroundImage: `url(${bg_trending})`,
          backgroundSize: "cover",
          backgroundPosition : "center"
        }}
        className="content d-flex pb-5 flex-wrap flex-row align-items-center justify-content-center"
      >
        {trending.map((data) => {
          return (
            <Div key ={data.name} className="text-light d-flex flex-column align-items-center">
              <div
                className="parent-item"
                style={{ backgroundImage: `url(${data.bg})` }}
              >
                <img
                  style={{ width: "100%" }}
                  className="item"
                  src={data.image}
                  alt=""
                />
              </div>
              <div>
                <span style={{ fontSize: "12px" }}>{data.name}</span>
              </div>
              <div
                className="price pl-4 font-weight-bold pr-4 pt-1 pb-1 mt-1 rounded-pill"
                style={{ border: "2px solid #ecc214" }}
              >
                <div>
                  <span className="text-price">PRICE</span>{" "}
                  <span className="open" style={{ display: "none" }}>
                    OPEN{" "}
                  </span>
                  <span
                    className="amount-price"
                    style={{ color: "#ecc214", fontWeight: "bolder" }}
                  >
                    ${data.price} USD
                  </span>
                </div>
              </div>
            </Div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Trending;
