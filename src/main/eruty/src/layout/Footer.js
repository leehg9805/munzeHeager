import React from "react";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="inner">
        <div className="footer_top">
          <address>
            <p>&#40;주&#41;크몽 서울시 서초구 사임당로 157,3층</p>
            <p>대표 : 박현호</p>
            <p>개인정보관리책임자 : 송준이 </p>
            <p>사업자등록번호 : 6138-81-65278</p>
          </address>
          <div className="info">
            <p>통신판매업신고 : 2018-서울서초-2134</p>
            <p>사업등록번호 : 2021-3210195-14-5-00035</p>
            <p>고객센터 : 1544-6254</p>
            <p>help@kmong.com</p>
          </div>
        </div>
        <div className="footer_bottom">
          <p className="desc">
            &#40;주&#41;크몽은 통신판매중개자이며, 통신판매의 당사자가 아닙니다.
            상품, 상품정보, 거래에 관한 의무와 책임은 판매회원에게 있습니다.
          </p>
          <span className="warring">
            &#40;주&#41;크몽 사이트의 상품/판매회원/중개 서비스/거래 정보,
            콘텐츠, UI 등에 무단복제, 전송, 배포, 스크래핑 등의 행위는 저작권법,
            콘텐츠산업 진흥법 등 관련법령에 의하여 엄격히 금지됩니다. [안내
            보기]
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
