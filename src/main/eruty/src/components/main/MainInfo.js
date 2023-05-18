import React from "react";
import { Link } from "react-router-dom";
import GltfLoader from "../rendering/GltfLoader";

const MainInfo = () => {
  return (
    <section className="MainInfo">
      <div className="inner">
        <div className="content">
          <GltfLoader />
          <div className="desc">
            <p>안전하고 빠른 3D 디자인 거래 플랫폼, 이루티</p>
            <h2>
              다양한 3D 디자인 소스거래
              <br />
              ERUTY에서 지금 시작하세요!
            </h2>
            <span>
              <Link to="/PortFolio">포트폴리오 바로가기</Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainInfo;
