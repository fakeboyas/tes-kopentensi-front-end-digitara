import React from "react";
import Flag from "react-flagkit";
import styled from "styled-components";

function Language() {
  const Wrapper = styled.div`
    @media only screen and (max-width: 480px) {
      margin-top: 20px !important;
      padding: 5px !important;
      align-items: center !important;
      .text {
        display: none;
      }
    }

    @media only screen and (max-width: 768px) {
    }

    @media only screen and (max-width: 1024px) {
      width: 50% !important;
    }
  `;

  return (
    <Wrapper className="w-25 d-flex flex-row p-3 flex-wrap align-items-center">
      <span className="text">Choose Language :</span>
      <div className="dropdown mt-1">
        <button
          className="btn btn-sm text-light dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span> EN </span>
          <Flag country="US" />
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {/* eslint-disable-next-line */}
          <a className="dropdown-item" href="#">
            <span> BR </span>
            <Flag country="BR" />
          </a>
          {/* eslint-disable-next-line */}
          <a className="dropdown-item" href="#">
            <span> CN </span>
            <Flag country="CN" />
          </a>
          {/* eslint-disable-next-line */}
          <a className="dropdown-item" href="#">
            <span> DE </span>
            <Flag country="DE" />
          </a>
          {/* eslint-disable-next-line */}
          <a className="dropdown-item" href="#">
            <span> JP </span>
            <Flag country="JP" />
          </a>
          {/* eslint-disable-next-line */}
          <a className="dropdown-item" href="#">
            <span> KR </span>
            <Flag country="KR" />
          </a>
          {/* eslint-disable-next-line */}
          <a className="dropdown-item" href="#">
            <span> RU </span>
            <Flag country="RU" />
          </a>
          {/* eslint-disable-next-line */}
          <a className="dropdown-item" href="#">
            <span> TR </span>
            <Flag country="TR" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Language;
