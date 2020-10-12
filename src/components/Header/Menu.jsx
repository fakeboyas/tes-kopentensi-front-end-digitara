import React from "react";
import menu from "./../../data/menu.json";
import styled from "styled-components";

function Menu() {
  const Wrapper = styled.div`
    @media only screen and (max-width: 768px) {
      flex-direction: column !important;
      display : none !important;
      .menu{
        width : 100% !important;
      }
    
    }

  `;

  const Button = styled.button`
    border-radius: 8px;
    border-bottom: 1px solid #ecc214;
    background: #1c1e26;
    font-size: 14px !important;
    margin-right: 5px;

    :hover {
      img {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
      }
    }
  `;
  return (
    <Wrapper className="d-flex flex-row justify-content-end mr-2 w-75">
      {menu.map((data) => {
        return (
          <Button className="menu btn d-flex flex-column align-items-center">
            <img
              className="align-content-center m-2"
              style={{ width: "40px" }}
              src={data.icon}
            />

            <span className="text-light font-weight-bold">{data.menu}</span>
          </Button>
        );
      })}
    </Wrapper>
  );
}

export default Menu;
