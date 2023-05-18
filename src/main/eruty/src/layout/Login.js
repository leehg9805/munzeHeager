import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ loginOn, setLoginOn, setSignOn }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };
  const submitLogin = () => {
    fetch("/submitLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginInput.email,
        password: loginInput.password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result[0] == "success") {
          window.localStorage.setItem("ACCESS_TOKEN", result[1]);
          document.location.href = "/";
        } else {
          setErrorMessage("이메일 및 비밀번호를 확인해 주세요.");
        }
      });
  };
  return (
    <div className={`Login ${loginOn ? "on" : ""}`}>
      <div className="inner">
        <div className="tit">
          <h2>
            <a
              href="/"
              onClick={() => {
                setLoginOn(false);
              }}
            >
              <img src={"/img/main_img/eruty_logo1.png"} alt="로고이미지" />
            </a>
          </h2>
        </div>
        <div className="login_container">
          <div className="id">
            <ul className="id_area">
              <li className="email_input">
                <input
                  type="email"
                  name="email"
                  value={loginInput.email}
                  onChange={handleInputChange}
                  placeholder="이메일"
                />
              </li>
            </ul>
          </div>
          <div className="pass">
            <ul className="pass_area">
              <li className="password_input">
                <input
                  type="password"
                  name="password"
                  value={loginInput.password}
                  onChange={handleInputChange}
                  placeholder="비밀번호"
                ></input>
              </li>
            </ul>
          </div>
          <span style={{ color: "red", marginBottom: "3px" }}>
            {errorMessage}
          </span>
          <button onClick={() => submitLogin()} className="login_btn">
            로그인
          </button>
        </div>
        <div className="login_service">
          <ul className="login_help">
            <li>
              <Link
                to="/"
                onClick={() => {
                  setLoginOn(false);
                  setSignOn(true);
                }}
              >
                회원가입
              </Link>
            </li>
            <li>
              <a href="">아이디 찾기</a>
            </li>
            <li>
              <a href="">비밀번호 찾기</a>
            </li>
          </ul>
        </div>
        <div
          className="login_close"
          onClick={() => {
            setLoginOn(false);
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
