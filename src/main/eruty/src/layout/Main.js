import React from "react";
import MainInfo from "../components/main/MainInfo";
import MainCate from "../components/main/MainCate";
import MainDesigner from "../components/main/MainDesigner";
import MainUpload from "../components/main/MainUpload";
import MainService from "../components/main/MainService";
const Main = () => {
  return (
    <main className={""}>
      <MainInfo />
      <MainCate />
      <MainDesigner />
      <MainUpload />
      <MainService />
    </main>
  );
};

export default Main;
