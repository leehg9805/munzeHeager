import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
const MyPage = () => {
  return (
    <>
      <Header />
      <section className="MyPage">
        <div className="top_bg">
          <div className="top_inner">
            <figure>
              <img src={"/img/mypage_img/eruty_logo2.png"} alt="로고" />
            </figure>
            <div className="top_tit">
              <h2>ERUTY</h2>
              <p>
                안녕하세요! 3D 그래픽 디자인 오픈 소스 거래 플랫폼을 개발 중인
                주식회사 이루티 입니다!!
              </p>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="my_models">
            <div className="tit">
              <h3>My 3d Models &#40;0&#41;</h3>
            </div>
            <div className="models"></div>
          </div>
          <div className="my_about">
            <div className="tit">
              <h3>about</h3>
              <a href="#!">비밀번호 변경</a>
            </div>
            <div className="my_profile">
              <div className="my_info">
                <figure>
                  <img src={"/img/mypage_img/profile.png"} alt="프로필사진" />
                </figure>
                <span className="my_name">나의닉네임</span>
                <span className="my_email">나의이메일@naver.com</span>
              </div>
              <div className="my_career">
                <h3>경력</h3>
                <p>2020.05 ~ 2023.02 나의경력활동</p>
                <p>2020.05 ~ 2023.02 나의경력활동</p>
              </div>
              <div className="my_award">
                <h3>수상경력</h3>
                <p>2020.05 ~ 2023.02 나의경력활동</p>
                <p>2020.05 ~ 2023.02 나의경력활동</p>
              </div>
            </div>
            <div className="my_statistic">
              <div className="statistic">
                <h3>통계</h3>
                <p>0 View</p>
                <p>0 Like</p>
              </div>

              <div className="my_skill">
                <strong>Skill</strong>
                <figure>
                  <img src={`/img/mypage_img/skill.png`} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MyPage;
