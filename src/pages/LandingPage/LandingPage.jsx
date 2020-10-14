import React from "react";
import PreHeader from "../../components/PreHeader/PreHeader";
import Header from "../../components/Header/Header";
import RecentItem from "../../components/RecentItems/RecentItem";
import Trending from "../../components/Trending/Trending";
import About from "./../../components/About/About";
import PreFooter from "../../components/PreFooter/PreFooter";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";

function LandingPage() {
  const Wrapper = styled.div`
    @media only screen and (max-width: 480px) {
    }

    @media only screen and (max-width: 768px) {
    }

    @media only screen and (max-width: 1200px) {
      width : 100% !important;
    }
  `;

  return (
    <div className="d-flex justify-content-center">
      <Wrapper style={{ width: "90%" }}>
        <Header />
        <RecentItem />
        <Trending />
        <About />
        <PreFooter />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default LandingPage;
