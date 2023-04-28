import * as React from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";
import Banner from "./Banner";
import Topnews from "./Topnews";
import Ad from "./Ad";
import NewUpdates from "./NewUpdates";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <main className="Container">
        <div className="ContentSection">
            <Banner/>
            <Topnews/>
            <Ad/>
            <NewUpdates/>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default IndexPage;
export const Head = () => <title>Suprabhaatham</title>;

