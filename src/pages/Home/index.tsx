import React from "react";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import FirstSection from "./FirstSection";
import SixthSection from "./SixthSection";

const Home = () => {
  return (
      <main>
        <div>
        {/* <main className="newsContainer">
      <div style={{ width: "74%", marginTop: 20 }}> */}
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
      </div>
    </main>
  );
};

export default Home;

