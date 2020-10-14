import React from "react";
import menu from "./../../data/menu.json";
import styled from "styled-components";

function Menu(props) {
  const toggle = props.close;
  console.log(toggle)
  const Wrapper = styled.div`
    @media only screen and (max-width: 600px) {
      flex-direction: column !important;
      align-items: center !important;
      order: 2 !important;
      display: ${toggle} !important;
      Button {
        width: 100% !important;
        margin: 0px !important;
        margin-bottom: 10px !important;
      }
    }

    @media only screen and (max-width: 768px) {
     
    }

    @media only screen and (max-width: 1200px) {
      Button {
        font-size: 10px !important;
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
          <Button key={data.menu} className="menu btn d-flex flex-wrap flex-column align-items-center justify-content-between">
            <img
              className="align-content-center m-2"
              style={{ width: "40px" }}
              src={data.icon}
            />

            <span style={{fontSize : "10px"}} className="text-light font-weight-bold">{data.menu}</span>
          </Button>
        );
      })}
    </Wrapper>
  );
}

export default Menu;
