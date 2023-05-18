import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import DesignerTopPortfolio from "./DesignerTopPortfolio";

const DesignerPortFolio = () => {
  //   useEffect =
  //     (() => {
  //       console.log("");
  //     },
  //     []);
  function handleScroll(event) {
    const element = event.target;
    const scrollHeight = element.scrollHeight;
    console.log("스크롤 가능한 높이:", scrollHeight);
  }
  return (
    <div onScroll={handleScroll}>
      <Header />
      <img
        src={"/img/designer_img/designer_background.jpeg"}
        alt="배경"
        style={{
          width: "100%",
          height: "40%",
          objectFit: "cover",
          position: "fixed",
          top: 0,
          zIndex: -1,
        }}
      />
      <div
        style={{
          top: "41%",
          position: "fixed",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "3%",
            float: "right",
            marginRight: "2%",
            maxWidth: "30px",
          }}
        >
          <img src="/img/main_img/h_right01.svg" />
        </div>
        <div
          style={{
            width: "3%",
            float: "right",
            marginRight: "2%",
            maxWidth: "30px",
          }}
        >
          <img src="/img/main_img/h_right01.svg" />
        </div>
        <div
          style={{
            width: "3%",
            float: "right",
            marginRight: "2%",
            maxWidth: "30px",
          }}
        >
          <img src="/img/main_img/h_right01.svg" />
        </div>
        <div
          style={{
            width: "3%",
            float: "right",
            marginRight: "2%",
            maxWidth: "30px",
          }}
        >
          <img src="/img/main_img/h_right01.svg" />
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%) ",
        }}
      >
        <img
          src={"/img/designer_img/designer_profile.jpeg"}
          style={{
            width: "20vh",
            height: "20vh",
            borderRadius: "10%",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          position: "fixed",
          top: "48%",
        }}
      >
        아이유
      </div>
      <div
        style={{
          width: "100%",
          position: "fixed",
          top: "51%",
          textAlign: "center",
        }}
      >
        안녕하세요 아이유입니다
      </div>
      <div
        style={{
          width: "30%",
          maxWidth: "300px",
          position: "fixed",
          top: "58%",
          display: "flex",
          left: "50%",
          transform: "translateX(-50%) ",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ width: "15%", maxWidth: "50px", flexDirection: "column" }}
        >
          <img src="/img/main_img/h_right01.svg" />
          <p style={{ marginTop: "5px", textAlign: "center" }}>157</p>
        </div>
        <div
          style={{ width: "15%", maxWidth: "50px", flexDirection: "column" }}
        >
          <img src="/img/main_img/h_right01.svg" />
          <p style={{ marginTop: "5px", textAlign: "center" }}>157</p>
        </div>
        <div
          style={{ width: "15%", maxWidth: "50px", flexDirection: "column" }}
        >
          <img src="/img/main_img/h_right01.svg" />
          <p style={{ marginTop: "5px", textAlign: "center" }}>157</p>
        </div>
      </div>
      {/* <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "60vh",
          zindex: "9999",
        }}
      ></div>
      <div
        style={{
          widht: "100%",
          height: "500px",
          backgroundColor: "red",
        }}
      ></div> */}

      <div
        style={{
          position: "fixed",
          width: "100%",
          top: "58%",
        }}
      >
        <DesignerTopPortfolio />
        {/* <div
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: "9999",
            backgroundColor: "white",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default DesignerPortFolio;
