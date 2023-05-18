import React from "react";
import TopPortfolio from "./TopPortfolio";
import TopDesigner from "./TopDesigner";
import CateView from "./CateView";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import PortFolioDetail from "./PortFolioDetail";
const PortFolio = () => {
  return (
    <section className="PortFolio">
      <Header />
      <TopPortfolio />
      <TopDesigner />
      <CateView />
      {/* <PortFolioDetail /> */}
      <Footer />
    </section>
  );
};

export default PortFolio;
