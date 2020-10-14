import React from "react";
import payment from "./../../assets/images/others/payments.png";
import ReactStars from "react-stars";
import g2pay2 from "./../../assets/images/others/g2pay2.png";
import styled from "styled-components";

function Footer() {
  const Wrapper = styled.div`
    margin-bottom: 30px;
    background-color: #1c1e26;
    @media only screen and (max-width: 480px) {
      flex-direction: column !important;
      .container-1 {
        width: 100% !important;
        padding: 0px !important;
      }
      .container-2 {
        width: 100% !important;
        img {
          width: 100% !important;
        }
      }
      
    }

    @media only screen and (max-width: 768px) {
      
      .container-1{
        width : 100% !important;
      }
      .container-2{
        display: none !important;
      }

      .container-3 {
        display: none !important;
      }

     
    }

    @media only screen and (max-width: 1200px) {
    }
  `;

  return (
    <Wrapper className="d-flex flex-row flex-wrap align-items-center">
      <div className="container-1 w-25 mt-4 d-flex flex-column pl-5">
        <p className="text-light font-weight-bold">© 2016—2020 FARMSKINS.COM</p>
        <p className="text-light" style={{ fontSize: "12px" }}>
          WiseAvant OÜ as an administrator of the Website adopts these Terms of
          Use that specifies User’s rights and obligations and constitute a
          legally binding agreement for both parties. These Terms of Use affect
          User’s rights and impose certain obligations while using the Website,
          so the User must read them carefully.
        </p>
      </div>
      <div className="container-2 w-50">
        <img className="w-75" src={payment} alt="" />
      </div>
      <div className="container-3 w-25 ">
        <div className="payment d-flex flex-column">
          <div
            style={{
              width: "220px",
              margin: "auto",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "220px",
                height: "50px",
                backgroundColor: "white",
                margin: "auto",
                paddingTop: "10px",
                fontSize: "14px",
                border: "0.5px solid",
                borderColor: "black",
              }}
            >
              <p>Customer love this store!</p>
            </div>
            <div
              className="d-flex flex-row justify-content-center"
              style={{
                width: "220px",
                height: "50px",
                backgroundColor: "white",
                margin: "auto",
                padding: "15px 10px 5px 15px",
                border: "0.5px solid",
                borderColor: "black",
              }}
            >
              <div className="d-flex">
                <ReactStars count={5} size={12} color1={"#ffd700"} />
                <p style={{ fontSize: "12px", marginLeft: "5px" }}>
                  99.2% / 75858 reviews
                </p>
              </div>
            </div>
            <div
              style={{ height: "20px", backgroundImage: `url(${g2pay2})` }}
            ></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
