import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
const Header = () => {
  const [loginOn, setLoginOn] = useState(false);
  const [signOn, setSignOn] = useState(false);
  const [input, setInput] = useState("");
  const [on, setOn] = useState(false);
  const [LoginOrLogout, setLoginOrLogout] = useState("로그인");

  useEffect(() => {
    const ACCESS_TOKEN = window.localStorage.getItem("ACCESS_TOKEN");
    if (ACCESS_TOKEN && ACCESS_TOKEN != "null") {
      setLoginOrLogout("로그아웃");
    } else {
      setLoginOrLogout("로그인");
    }
  }, []);
  const submitLogout = () => {
    window.localStorage.setItem("ACCESS_TOKEN", null);
    document.location.href = "/";
  };
  return (
    <>
      <header className="Header">
        <div className="inner">
          <div className="head_left">
            <h1>
              <Link to="/">
                <img src={"/img/main_img/eruty_logo2.png"} alt="로고이미지" />
              </Link>
            </h1>
            <ul className="web_menu">
              <li>
                <Link to={`#!`}>공유</Link>
              </li>
              <li>
                <Link to={`#!`}>거래</Link>
              </li>
              <li>
                <Link to={`#!`}>기업정보</Link>
              </li>
            </ul>
          </div>
          <div className="head_center">
            <div className="search">
              <form action="">
                <input
                  type="text"
                  value={input}
                  placeholder="검색어를 입력하세요"
                  onFocus={() => {
                    setInput("");
                  }}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
                <button>
                  <i>
                    <img src={"img/main_img/search.svg"} alt="" />
                  </i>
                </button>
              </form>
              <div className="search_word">
                <span>
                  <Link to={`#!`}>인기검색어</Link>
                </span>
                <span>
                  <Link to={`#!`}>로고</Link>
                </span>
                <span>
                  <Link to={`#!`}>배경</Link>
                </span>
                <span>
                  <Link to={`#!`}>나무</Link>
                </span>
                <span>
                  <Link to={`#!`}>HDRI</Link>
                </span>
              </div>
            </div>
            <span
              className={`m_open ${on ? "on" : ""}`}
              onClick={() => {
                setOn(!on);
              }}
            >
              <button>mopen</button>
            </span>
          </div>
          <div className={`head_right ${on ? "on" : ""}`}>
            <ul className="member">
              <li>
                <Link
                  onClick={() =>
                    LoginOrLogout == "로그인"
                      ? setLoginOn(true)
                      : submitLogout()
                  }
                >
                  {LoginOrLogout}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setSignOn(true);
                  }}
                >
                  회원가입
                </Link>
              </li>
            </ul>
            <ul className="icon_menu">
              <li>
                <Link to={`#!`}>
                  <i>
                    <img src={`/img/main_img/h_right01.svg`} alt="공유하기" />
                  </i>
                </Link>
              </li>
              <li>
                <Link to={`#!`}>
                  <i>
                    <img src={`/img/main_img/h_right02.svg`} alt="공유하기" />
                  </i>
                </Link>
              </li>
              <li>
                <Link to="/MyPage">
                  <i>
                    <img src={`/img/main_img/h_right03.svg`} alt="마이페이지" />
                  </i>
                </Link>
              </li>
            </ul>
            <ul className="mobile_menu">
              <li>
                <Link to={`#!`}>공유</Link>
              </li>
              <li>
                <Link to={`#!`}>거래</Link>
              </li>
              <li>
                <Link to={`#!`}>기업정보</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {loginOn && (
        <Login
          loginOn={loginOn}
          setLoginOn={setLoginOn}
          setSignOn={setSignOn}
        />
      )}
      {signOn && (
        <SignUp
          loginOn={loginOn}
          setLoginOn={setLoginOn}
          signOn={signOn}
          setSignOn={setSignOn}
        />
      )}
    </>
  );
};

export default Header;
