import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ChannelService from "./ChannelService";

const Layout = () => {
  ChannelService.boot({
    pluginKey: "0d1bce79-a9f0-4cf6-811f-726350999939",
    profile: {
      name: "김진혁",
      mobileNumber: "+821012341234",
      isAdult: false,
      age: 18,
      score: 13.4,
      joinedAt: 1615514616123,
      todo: ["study", "work"],
    },
  });
  return (
    <div className="Wrap">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
