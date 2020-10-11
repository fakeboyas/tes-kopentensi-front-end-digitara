import React from "react";
import trending from "./../../data/trending.json";
import bg_trending from "./../../assets/images/background/bg-trending.png";

function Trending() {
  return (
    <div className="pt-3 text-light">
      <h3 className="text-light"> TRENDING CASES</h3>
      <div
        style={{
          backgroundImage: `url(${bg_trending})`,
          height: "300px",
          backgroundSize: "cover",
        }}
        className="d-flex flex-row justify-content-between align-items-center"
      >
        {trending.map((data) => {
          return (
            <div
              className="d-flex flex-column align-items-center"
              style={{ width: "20%", height: " 200px" }}
            >
              <div style={{ backgroundImage: `url(${data.bg})` }}>
                <img src={data.image} alt="" />
              </div>
              <div>
                <span style={{ fontSize: "12px" }}>{data.name}</span>
              </div>
              <div
                className="pl-4 pr-4 pt-1 pb-1 mt-1 rounded-pill"
                style={{border: "2px solid #ecc214" }}
              >
                <span>PRICE</span>{" "}
                <span style={{ color: "#ecc214", fontWeight: "bolder" }}>
                  ${data.price} USD
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trending;
