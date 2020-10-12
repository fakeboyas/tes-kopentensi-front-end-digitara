import React from "react";
import totalstatus from "./../../data/totalstatus.json";
import styled from 'styled-components'



function TotalStatus() {
  const Wrapper = styled.div`
  background-color : rgba(26,28,36,.8);
  padding : 10px;
  border-top-left-radius : 8px;
  border-top-right-radius : 8px;
  border-top : 1px solid #ecc214;

  .content img{
    width : 40px;
  }
  `
  return (
    <Wrapper
      className="d-flex flex-row mt-5 justify-content-around align-items-center"
    >
      {totalstatus.map((data) => {
        return (
          <div className="content d-flex flex-row align-items-center justify-content-center">
            <img src={data.icon} alt="" />

            <div className="d-flex flex-column font-weight-bold text-light">
              <span style={{color : `${data.color}`}}>{data.name}</span>
              <span className="font-weight-bold">{data.total}</span>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default TotalStatus;
