import React from "react";
import PreHeader from "../../components/PreHeader/PreHeader";
import Header from "../../components/Header/Header";
import RecentItem from "../../components/RecentItems/RecentItem";
import Trending from "../../components/Trending/Trending";
import About from "./../../components/About/About";
import PreFooter from "../../components/PreFooter/PreFooter";
import Footer from "../../components/Footer/Footer";

function LandingPage() {
  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: "90%" }}>
        <Header />
        <RecentItem />
        <Trending />
        <About />
        <PreFooter />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
