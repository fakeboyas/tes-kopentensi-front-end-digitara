import React from "react";
import menu from "./../../data/menu.json";

function Menu() {
  return (
    <div className="d-flex flex-row justify-content-between mr-2 w-75">
      {menu.map((data) => {
        return (
          <button className="btn btn-dark d-flex flex-column align-items-center">
            <img
            className="align-content-center"
              style={{ width: "50px" }}
              src={data.icon}
            />

            <span className="text-light font-weight-bold">{data.menu}</span>
          </button>
        );
      })}
    </div>
  );
}

export default Menu;
