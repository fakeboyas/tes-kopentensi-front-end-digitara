import React from "react";
import trending from "./../../data/trending.json";
import bg_trending from "./../../assets/images/background/bg-trending.png";
import styled from "styled-components";

function Trending() {
  const Div = styled.div`
    :hover {
      .item{

      }
      .price {
        background: #ecc214;
        color: black !important;
        .amount-price {
          color: black !important;
        }
        .text-price{
          display : none;
        }
        .open{
          display : contents !important;
        }
      }

      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  `;

  return (
    <div className="pt-3  text-light">
      <h3 className="text-light"> TRENDING CASES</h3>
      <div
        style={{
          backgroundImage: `url(${bg_trending})`,
          height: "300px",
          backgroundSize: "cover",
        }}
        className="d-flex pb-5 flex-row justify-content-between align-items-center"
      >
        {trending.map((data) => {
          return (
            <Div
              className="text-light d-flex flex-column align-items-center"
              style={{ width: "20%", height: " 200px" }}
            >
              <div style={{ backgroundImage: `url(${data.bg})` }}>
                <img className="item" src={data.image} alt="" />
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
                  <span className="open" style={{display : "none"}}>OPEN </span>
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
    </div>
  );
}

export default Trending;
