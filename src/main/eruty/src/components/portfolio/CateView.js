import React from "react";

const CateView = () => {
  return (
    <section className="CateView">
      <div className="inner">
        <div className="tit">
          <h2>카테고리별 한눈에 보기</h2>
          <p>3D 파이프라인 분류</p>
        </div>
        <div className="catelist_container">
          <ul className="portfolio_catelist">
            <li className="on">
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/category01.svg"} alt="모델링" />
                </a>
              </figure>
              <h3>모델링</h3>
            </li>
            <li>
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/category02.svg"} alt="모델링" />
                </a>
              </figure>
              <h3>렌더링</h3>
            </li>
            <li>
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/category03.svg"} alt="모델링" />
                </a>
              </figure>
              <h3>리깅</h3>
            </li>
            <li>
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/category04.svg"} alt="모델링" />
                </a>
              </figure>
              <h3>애니메이션</h3>
            </li>
            <li>
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/category05.svg"} alt="모델링" />
                </a>
              </figure>
              <h3>라이팅</h3>
            </li>
            <li>
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/category06.svg"} alt="모델링" />
                </a>
              </figure>
              <h3>VFX</h3>
            </li>
          </ul>
        </div>
        <div className="cateitm_container">
          <ul className="tab_menu">
            <li className="on">
              <button>인기순</button>
            </li>
            <li>
              <button>최신순</button>
            </li>
            <li>
              <button>구매순</button>
            </li>
          </ul>
          <ul className="portfolio_itm">
            <li className="itm">
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/portfolio01.svg"} alt="" />
                </a>

                <div className="desc">
                  <h3>이상한 나라의 앨리스</h3>
                </div>
              </figure>
              <div className="info">
                <div className="name">
                  <i>
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </i>
                  <span>디자이너</span>
                </div>
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
            </li>
            <li className="itm">
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/portfolio02.svg"} alt="" />
                </a>
                <div className="desc">
                  <h3>이상한 나라의 앨리스</h3>
                </div>
              </figure>
              <div className="info">
                <div className="name">
                  <i>
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </i>
                  <span>디자이너</span>
                </div>
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
            </li>
            <li className="itm">
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/portfolio03.svg"} alt="" />
                </a>

                <div className="desc">
                  <h3>이상한 나라의 앨리스</h3>
                </div>
              </figure>
              <div className="info">
                <div className="name">
                  <i>
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </i>
                  <span>디자이너</span>
                </div>
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
            </li>
            <li className="itm">
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/portfolio04.svg"} alt="" />
                </a>

                <div className="desc">
                  <h3>이상한 나라의 앨리스</h3>
                </div>
              </figure>
              <div className="info">
                <div className="name">
                  <i>
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </i>
                  <span>디자이너</span>
                </div>
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
            </li>
            <li className="itm">
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/portfolio05.svg"} alt="" />
                </a>

                <div className="desc">
                  <h3>이상한 나라의 앨리스</h3>
                </div>
              </figure>
              <div className="info">
                <div className="name">
                  <i>
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </i>
                  <span>디자이너</span>
                </div>
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
            </li>
            <li className="itm">
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/portfolio01.svg"} alt="" />
                </a>

                <div className="desc">
                  <h3>이상한 나라의 앨리스</h3>
                </div>
              </figure>
              <div className="info">
                <div className="name">
                  <i>
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </i>
                  <span>디자이너</span>
                </div>
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
            </li>
            <li className="itm">
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/portfolio02.svg"} alt="" />
                </a>
                <div className="desc">
                  <h3>이상한 나라의 앨리스</h3>
                </div>
              </figure>
              <div className="info">
                <div className="name">
                  <i>
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </i>
                  <span>디자이너</span>
                </div>
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
            </li>
            <li className="itm">
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/portfolio03.svg"} alt="" />
                </a>

                <div className="desc">
                  <h3>이상한 나라의 앨리스</h3>
                </div>
              </figure>
              <div className="info">
                <div className="name">
                  <i>
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </i>
                  <span>디자이너</span>
                </div>
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
            </li>
            <li className="itm">
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/portfolio04.svg"} alt="" />
                </a>

                <div className="desc">
                  <h3>이상한 나라의 앨리스</h3>
                </div>
              </figure>
              <div className="info">
                <div className="name">
                  <i>
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </i>
                  <span>디자이너</span>
                </div>
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
            </li>
            <li className="itm">
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/portfolio05.svg"} alt="" />
                </a>

                <div className="desc">
                  <h3>이상한 나라의 앨리스</h3>
                </div>
              </figure>
              <div className="info">
                <div className="name">
                  <i>
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </i>
                  <span>디자이너</span>
                </div>
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
            </li>
            <li className="itm">
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/portfolio01.svg"} alt="" />
                </a>

                <div className="desc">
                  <h3>이상한 나라의 앨리스</h3>
                </div>
              </figure>
              <div className="info">
                <div className="name">
                  <i>
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </i>
                  <span>디자이너</span>
                </div>
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
            </li>
            <li className="itm">
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/portfolio02.svg"} alt="" />
                </a>
                <div className="desc">
                  <h3>이상한 나라의 앨리스</h3>
                </div>
              </figure>
              <div className="info">
                <div className="name">
                  <i>
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </i>
                  <span>디자이너</span>
                </div>
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
            </li>
            <li className="itm">
              <i>
                <img src={"/img/portfolio_img/up.svg"} alt="" />
              </i>
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/portfolio03.svg"} alt="" />
                </a>

                <div className="desc">
                  <h3>이상한 나라의</h3>
                </div>
              </figure>
              <div className="info">
                <div className="name">
                  <i>
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </i>
                  <span>디자이너</span>
                </div>
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
            </li>
            <li className="itm">
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/portfolio04.svg"} alt="" />
                </a>

                <div className="desc">
                  <h3>이상한 나라의 앨리스</h3>
                </div>
              </figure>
              <div className="info">
                <div className="name">
                  <i>
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </i>
                  <span>디자이너</span>
                </div>
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
            </li>
            <li className="itm">
              <figure>
                <a href="">
                  <img src={"/img/portfolio_img/portfolio05.svg"} alt="" />
                </a>

                <div className="desc">
                  <h3>이상한 나라의 앨리스</h3>
                </div>
              </figure>
              <div className="info">
                <div className="name">
                  <i>
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </i>
                  <span>디자이너</span>
                </div>
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
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CateView;
