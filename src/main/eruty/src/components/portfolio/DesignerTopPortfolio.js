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
  const portfolioItems = [
    {
      imgSrc: "/img/portfolio_img/portfolio01.svg",
      title: "이상한 나라의 앨리스1",
      views: 345,
      likes: 94,
    },
    {
      imgSrc: "/img/portfolio_img/portfolio02.svg",
      title: "이상한 나라의 앨리스2",
      views: 346,
      likes: 95,
    },
    {
      imgSrc: "/img/portfolio_img/portfolio03.svg",
      title: "이상한 나라의 앨리스3",
      views: 347,
      likes: 96,
    },
    {
      imgSrc: "/img/portfolio_img/portfolio04.svg",
      title: "이상한 나라의 앨리스4",
      views: 348,
      likes: 97,
    },
  ];
  const PortSlideRef = useRef(null);
  return (
    <section className="TopPortfolio">
      <div className="inner">
        <div className="tit">
          <h2>인기 포트폴리오</h2>
          <BsChevronRight />
        </div>
        <div className="slide_wrap">
          <PortfolioSlide
            {...PortfolioSlideOption}
            className="PortfolioSlide"
            ref={PortSlideRef}
          >
            {portfolioItems.map((item, index) => (
              <div className={"itm"} key={index}>
                <figure>
                  <a href="">
                    <img src={item.imgSrc} alt="" />
                  </a>
                  <div className="desc">
                    <h3>{item.title}</h3>
                  </div>
                </figure>
                <div className="info">
                  <div className="view_like">
                    <div className="view">
                      <i>
                        <img src={"/img/portfolio_img/view_icon.svg"} alt="" />
                      </i>
                      <span>{item.views}</span>
                    </div>
                    <div className="like">
                      <i>
                        <img src={"/img/portfolio_img/like_icon.svg"} alt="" />
                      </i>
                      <span>{item.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
