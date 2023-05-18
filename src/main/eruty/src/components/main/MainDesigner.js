import React from "react";
import { Link } from "react-router-dom";
const MainDesigner = () => {
  return (
    <section className="MainDesigner">
      <div className="inner">
        <div className="designer_content">
          <div className="tit">
            <h2>거래가 가장 많은 디자이너</h2>
            <span>ERUTY가 분석한 인기 디자이너 TOP100</span>
          </div>
          <div className="con_inner">
            <ul>
              <li>
                <div className="number">1</div>
                <figure>
                  <img
                    src={"img/main_img/main_designer01.svg"}
                    alt="프로필사진"
                  />
                </figure>
                <div className="desc">
                  <strong>디자이너</strong>
                  <div className="info">
                    <div className="like">
                      <button>♡</button>
                      <p>999</p>
                    </div>
                    <div className="follow">
                      <i>icon</i>
                      <p>549</p>
                    </div>
                  </div>
                  <div className="port_folio">
                    <span>
                      <a href="#!">포트폴리오</a>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="number">2</div>
                <figure>
                  <img
                    src={"img/main_img/main_designer01.svg"}
                    alt="프로필사진"
                  />
                </figure>
                <div className="desc">
                  <strong>디자이너</strong>
                  <div className="info">
                    <div className="like">
                      <button>♡</button>
                      <p>999</p>
                    </div>
                    <div className="follow">
                      <i>icon</i>
                      <p>549</p>
                    </div>
                  </div>
                  <div className="port_folio">
                    <span>
                      <a href="#!">포트폴리오</a>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="number">3</div>
                <figure>
                  <img
                    src={"img/main_img/main_designer01.svg"}
                    alt="프로필사진"
                  />
                </figure>
                <div className="desc">
                  <strong>디자이너</strong>
                  <div className="info">
                    <div className="like">
                      <button>♡</button>
                      <p>999</p>
                    </div>
                    <div className="follow">
                      <i>icon</i>
                      <p>549</p>
                    </div>
                  </div>
                  <div className="port_folio">
                    <span>
                      <a href="#!">포트폴리오</a>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <figure>
                  <img
                    src={"img/main_img/main_designer01.svg"}
                    alt="프로필사진"
                  />
                </figure>
                <div className="desc">
                  <strong>디자이너</strong>
                  <div className="info">
                    <div className="like">
                      <button>♡</button>
                      <p>999</p>
                    </div>
                    <div className="follow">
                      <i>icon</i>
                      <p>549</p>
                    </div>
                  </div>
                  <div className="port_folio">
                    <span>
                      <a href="#!">포트폴리오</a>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="more">
              <Link to={`#!`}></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainDesigner;
