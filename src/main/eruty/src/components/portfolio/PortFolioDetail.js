import React from "react";

const PortFolioDetail = () => {
  return (
    <section className="PortFolioDetail">
      <div className="inner">
        <div className="info">
          <div className="detail_main">
            <div className="main_info">
              <div className="profile_img">
                <figure>
                  <img src="/img/portfolio_img/profile.svg" alt="" />
                </figure>
              </div>
              <div className="tit">
                <h2>작업명 : 이상한 나라의 앨리스 디자이너</h2>
                <div className="sub_tit">
                  <span className="date">게시 2023.03.23</span>
                  <div className="view_like">
                    <div className="view">
                      <i>
                        <img src={"/img/portfolio_img/view_icon.svg"} alt="" />
                      </i>
                      <span>345</span>
                    </div>
                    <div className="like">
                      <i>
                        <img src={"/img/portfolio_img/like_icon.svg"} alt="" />
                      </i>
                      <span>94</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="link">
                <button>
                  <img src={"/img/portfolio_img/like_icon.svg"} alt="" />
                </button>
                <button>
                  <img src={"/img/portfolio_img/share_icon.svg"} alt="" />
                </button>
              </div>
            </div>
            <div className="sub_info"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortFolioDetail;
