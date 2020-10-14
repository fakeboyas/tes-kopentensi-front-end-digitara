import React from "react";
import recent from "./../../data/recent.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import bg_recent1 from "../../assets/images/background/bg-recent1.png";
import bg_recent2 from "../../assets/images/background/bg-recent2.png";
import bg_recent3 from "../../assets/images/background/bg-recent3.png";

function RecentItem() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Wrapper = styled.div`
    @media only screen and (max-width: 500px) {
      padding : 0px !important;
      img{
        width : 80% !important;
        height : 80% !important;
      }
    }

    @media only screen and (max-width: 768px) {
    }

    @media only screen and (max-width: 1024px) {
    }
  `;

  const background = [bg_recent1, bg_recent2, bg_recent3];
  return (
    <Wrapper className="d-flex mb-3 flex-column pt-3 pl-3 align-items-center">
      <div>
        <h6 className="text-light font-weight-bold">RECENT ITEMS</h6>
      </div>
      <div style={{ width: "100%" }}>
        <Slider {...settings}>
          {recent.map((data) => {
            return (
              <div>
                <div
                  style={{
                    backgroundImage: `url(${
                      background[Math.floor(Math.random() * background.length)]
                    })`,
                  }}
                  className="d-flex align-items-center justify-content-center"
                >
                  <img
                    classname="item"
                    style={{ margin: "auto"}}
                    src={data.image}
                  
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </Wrapper>
  );
}

export default RecentItem;
