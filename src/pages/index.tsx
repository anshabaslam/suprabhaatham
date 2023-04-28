import * as React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import "../styles/global.scss";
import Home from "./Home";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Icon from '../images/iconlogo.svg'


const IndexPage = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <main className="Container">
        <div className="ContentSection">
          <Home />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
export const Head = () => (
  <Helmet>
    <link rel="icon" href={Icon} type="image/png" sizes="20x20" />
    <title>Suprabhaatham</title>;
  </Helmet>
);
