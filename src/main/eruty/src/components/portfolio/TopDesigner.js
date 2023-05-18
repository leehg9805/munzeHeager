import React, { useRef } from "react";
import DesignerSlide from "react-slick";
import "slick-carousel/slick/slick.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const TopDesigner = () => {
  const DesignerSlideOption = {
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
  const DesignerSlideRef = useRef(null);
  return (
    <section className="TopDesigner">
      <div className="inner">
        <div className="tit">
          <div className="main_tit">
            <h2>ERUTY 인기 디자이너</h2>
            <a href="">
              <BsChevronRight />
            </a>
          </div>

          <p>나의 취향을 가장 잘 아는 디자이너를 찾아보세요!</p>
        </div>
        <div className="designer_wrap">
          <DesignerSlide
            className="DesignerSlide"
            {...DesignerSlideOption}
            ref={DesignerSlideRef}
          >
            <div className="designer">
              <div className="info">
                <figure>
                  <a href="">
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </a>
                </figure>
                <div className="desc">
                  <div className="name">
                    <h3>디자이너</h3>
                  </div>
                  <div className="tag">
                    <span>&#35;제품 모델링</span>
                    <span>&#35;건축,공간 모델링</span>
                    <span>&#35;Maya</span>
                  </div>
                </div>
              </div>
              <ul className="product">
                <li>
                  <figure>
                    <a href="">
                      {" "}
                      <img src={"/img/portfolio_img/portfolio01.svg"} alt="" />
                    </a>
                  </figure>
                </li>
                <li>
                  <figure>
                    <a href="">
                      {" "}
                      <img src={"/img/portfolio_img/portfolio01.svg"} alt="" />
                    </a>
                  </figure>
                </li>
                <li>
                  <figure>
                    <a href="">
                      {" "}
                      <img src={"/img/portfolio_img/portfolio01.svg"} alt="" />
                    </a>
                  </figure>
                </li>
              </ul>
            </div>
            <div className="designer">
              <div className="info">
                <figure>
                  <a href="">
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </a>
                </figure>
                <div className="desc">
                  <div className="name">
                    <h3>디자이너</h3>
                  </div>
                  <div className="tag">
                    <span>&#35;제품 모델링</span>
                    <span>&#35;건축,공간 모델링</span>
                    <span>&#35;Maya</span>
                  </div>
                </div>
              </div>
              <ul className="product">
                <li>
                  <figure>
                    <a href="">
                      <img src={"/img/portfolio_img/portfolio02.svg"} alt="" />
                    </a>
                  </figure>
                </li>
                <li>
                  <figure>
                    <a href="">
                      <img src={"/img/portfolio_img/portfolio02.svg"} alt="" />
                    </a>
                  </figure>
                </li>
                <li>
                  <figure>
                    <a href="">
                      <img src={"/img/portfolio_img/portfolio02.svg"} alt="" />
                    </a>
                  </figure>
                </li>
              </ul>
            </div>
            <div className="designer">
              <div className="info">
                <figure>
                  <a href="">
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </a>
                </figure>
                <div className="desc">
                  <div className="name">
                    <h3>디자이너</h3>
                  </div>
                  <div className="tag">
                    <span>&#35;제품 모델링</span>
                    <span>&#35;건축,공간 모델링</span>
                    <span>&#35;Maya</span>
                  </div>
                </div>
              </div>
              <ul className="product">
                <li>
                  <figure>
                    <a href="">
                      <img src={"/img/portfolio_img/portfolio03.svg"} alt="" />
                    </a>
                  </figure>
                </li>
                <li>
                  <figure>
                    <a href="">
                      <img src={"/img/portfolio_img/portfolio03.svg"} alt="" />
                    </a>
                  </figure>
                </li>
                <li>
                  <figure>
                    <a href="">
                      <img src={"/img/portfolio_img/portfolio03.svg"} alt="" />
                    </a>
                  </figure>
                </li>
              </ul>
            </div>
            <div className="designer">
              <div className="info">
                <figure>
                  <a href="">
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </a>
                </figure>
                <div className="desc">
                  <div className="name">
                    <h3>디자이너</h3>
                  </div>
                  <div className="tag">
                    <span>&#35;제품 모델링</span>
                    <span>&#35;건축,공간 모델링</span>
                    <span>&#35;Maya</span>
                  </div>
                </div>
              </div>
              <ul className="product">
                <li>
                  <figure>
                    <a href="">
                      <img src={"/img/portfolio_img/portfolio04.svg"} alt="" />
                    </a>
                  </figure>
                </li>
                <li>
                  <figure>
                    <a href="">
                      <img src={"/img/portfolio_img/portfolio04.svg"} alt="" />
                    </a>
                  </figure>
                </li>
                <li>
                  <figure>
                    <a href="">
                      <img src={"/img/portfolio_img/portfolio04.svg"} alt="" />
                    </a>
                  </figure>
                </li>
              </ul>
            </div>
            <div className="designer">
              <div className="info">
                <figure>
                  <a href="">
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </a>
                </figure>
                <div className="desc">
                  <div className="name">
                    <h3>디자이너</h3>
                  </div>
                  <div className="tag">
                    <span>&#35;제품 모델링</span>
                    <span>&#35;건축,공간 모델링</span>
                    <span>&#35;Maya</span>
                  </div>
                </div>
              </div>
              <ul className="product">
                <li>
                  <figure>
                    <a href="">
                      <img src={"/img/portfolio_img/portfolio05.svg"} alt="" />
                    </a>
                  </figure>
                </li>
                <li>
                  <figure>
                    <a href="">
                      <img src={"/img/portfolio_img/portfolio05.svg"} alt="" />
                    </a>
                  </figure>
                </li>
                <li>
                  <figure>
                    <a href="">
                      <img src={"/img/portfolio_img/portfolio05.svg"} alt="" />
                    </a>
                  </figure>
                </li>
              </ul>
            </div>
            <div className="designer">
              <div className="info">
                <figure>
                  <a href="">
                    <img src={"/img/portfolio_img/profile.svg"} alt="" />
                  </a>
                </figure>
                <div className="desc">
                  <div className="name">
                    <h3>디자이너</h3>
                  </div>
                  <div className="tag">
                    <span>&#35;제품 모델링</span>
                    <span>&#35;건축,공간 모델링</span>
                    <span>&#35;Maya</span>
                  </div>
                </div>
              </div>
              <ul className="product">
                <li>
                  <figure>
                    <a href="">
                      <img src={"/img/portfolio_img/portfolio02.svg"} alt="" />
                    </a>
                  </figure>
                </li>
                <li>
                  <figure>
                    <a href="">
                      <img src={"/img/portfolio_img/portfolio02.svg"} alt="" />
                    </a>
                  </figure>
                </li>
                <li>
                  <figure>
                    <a href="">
                      <img src={"/img/portfolio_img/portfolio02.svg"} alt="" />
                    </a>
                  </figure>
                </li>
              </ul>
            </div>
          </DesignerSlide>
          <div className="arrows">
            <BsChevronLeft
              className="slick_left"
              onClick={() => {
                DesignerSlideRef.current.slickPrev();
              }}
            />
            <BsChevronRight
              className="slick_right"
              onClick={() => {
                DesignerSlideRef.current.slickNext();
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDesigner;
