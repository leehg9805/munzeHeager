import React, { useRef } from "react";
import PortfolioSlide from "react-slick";
import "slick-carousel/slick/slick.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const TopPortfolio = () => {
  const PortfolioSlideOption = {
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const PortSlideRef = useRef(null);
  return (
    <section className="TopPortfolio">
      <div className="inner">
        <div className="tit">
          <h2>인기 포트폴리오</h2>
          <a href="">
            <BsChevronRight />
          </a>
        </div>
        <div className="slide_wrap">
          <PortfolioSlide
            {...PortfolioSlideOption}
            className="PortfolioSlide"
            ref={PortSlideRef}
          >
            <div className="itm itm01">
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
            </div>
            <div className="itm itm02">
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
            </div>
            <div className="itm itm03">
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
            </div>
            <div className="itm itm04">
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
              <i>
                <img src={"img/portfolio_img/up.svg"} alt="" />
              </i>
            </div>
            <div className="itm itm05">
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
            </div>
            <div className="itm itm06">
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
            </div>
            <div className="itm itm07">
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
            </div>
            <div className="itm itm08">
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
            </div>
            <div className="itm itm09">
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
            </div>
            <div className="itm itm10">
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
            </div>
          </PortfolioSlide>
          <div className="arrows">
            <BsChevronLeft
              className="slick_left"
              onClick={() => {
                PortSlideRef.current.slickPrev();
              }}
            />
            <BsChevronRight
              className="slick_right"
              onClick={() => {
                PortSlideRef.current.slickNext();
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPortfolio;
