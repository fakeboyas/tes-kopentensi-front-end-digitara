import React from "react";
import totalstatus from "./../../data/totalstatus.json";

function TotalStatus() {
  return (
    <div
      className="d-flex flex-row mt-3 justify-content-around align-items-center"
      style={{ background: "radial-gradient(rgba(136,71,255,.2),transparent 50%)" }}
    >
      {totalstatus.map((data) => {
        return (
          <div className="d-flex flex-row align-items-center justify-content-center">
            <img style={{ width: "40px", margin: "10px" }} src={data.icon} alt="" />

            <div className="d-flex flex-column font-weight-bold text-light">
              <span style={{color : `${data.color}`}}>{data.name}</span>
              <span className="font-weight-bold">{data.total}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TotalStatus;
