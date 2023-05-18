import React, { useState, useEffect, useRef } from "react";
const SignUp = ({ signOn, setSignOn }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [signUpInput, setSignUpInput] = useState({
    email: "",
    password1: "",
    password2: "",
    nickname: "",
    company: "",
    interests: "",
    birthday: "",
    marketing: "",
  });
  const handleInputChange = (e) => {
    setSignUpInput({ ...signUpInput, [e.target.name]: e.target.value });
  };
  const submitSignUp = () => {
    fetch("/submitSignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signUpInput.email,
        password1: signUpInput.password1,
        password2: signUpInput.password2,
        birthday: signUpInput.birthday,
        nickname: signUpInput.nickname,
        marketing: signUpInput.marketing,
        interests: signUpInput.interests,
        company: signUpInput.company,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result[0] == "success") {
          document.location.href = "/";
        } else {
          var _errorMessage = "";
          for (var i = 1; i < result.length; i++) {
            _errorMessage += result[i] + "\n";
          }
          setErrorMessage(_errorMessage);
        }
      });
  };
  return (
    <div className={`SignUp ${signOn ? "on" : ""}`}>
      <div className="inner">
        <div className="tit">
          <h2>
            <a href="/">
              <img src={"/img/main_img/eruty_logo1.png"} alt="로고이미지" />
            </a>
          </h2>
        </div>
        <div className="signup_container">
          <ul className="email">
            <li className="sub_tit">
              이메일<span style={{ color: "red" }}>*</span>
            </li>
            <li>
              <input
                type="text"
                name="email"
                value={signUpInput.email}
                onChange={handleInputChange}
              ></input>
            </li>
          </ul>
          <ul className="pass">
            <li className="sub_tit">
              비밀번호<span style={{ color: "red" }}>*</span>
            </li>
            <li>
              <input
                type="password"
                name="password1"
                value={signUpInput.password1}
                onChange={handleInputChange}
              ></input>
            </li>
            <li className="sub_tit">
              비밀번호 확인<span style={{ color: "red" }}>*</span>
            </li>
            <li>
              <input
                type="password"
                name="password2"
                value={signUpInput.password2}
                onChange={handleInputChange}
              ></input>
            </li>
          </ul>
          <ul className="birthday">
            <li className="sub_tit">
              생일<span style={{ color: "red" }}>*</span>
            </li>
            <li>
              <input
                type="date"
                name="birthday"
                value={signUpInput.birthday}
                onChange={handleInputChange}
              ></input>
            </li>
          </ul>
          <ul className="nickname">
            <li className="sub_tit">
              닉네임<span style={{ color: "red" }}>*</span>
            </li>
            <li>
              <input
                type="text"
                name="nickname"
                value={signUpInput.nickname}
                onChange={handleInputChange}
              ></input>
            </li>
          </ul>
          <ul className="marketing">
            <li className="sub_tit">
              수신동의<span style={{ color: "red" }}>*</span>
            </li>
            <li>
              <div className="mark_yes">
                <input
                  type="radio"
                  name="marketing"
                  value="true"
                  checked={signUpInput.marketing === "true"}
                  onChange={handleInputChange}
                />
                <span>Yes</span>
              </div>
              <div className="mark_no">
                <input
                  type="radio"
                  name="marketing"
                  value="false"
                  checked={signUpInput.marketing === "false"}
                  onChange={handleInputChange}
                />
                <span>No</span>
              </div>
            </li>
          </ul>
          <ul className="interests">
            <li className="sub_tit">관심사</li>
            <li>
              <input
                type="text"
                name="interests"
                value={signUpInput.interests}
                onChange={handleInputChange}
              ></input>
            </li>
          </ul>
          <ul className="company">
            <li className="sub_tit">회사명</li>
            <li>
              <input
                type="text"
                name="company"
                value={signUpInput.company}
                onChange={handleInputChange}
              ></input>
            </li>
          </ul>
          <span
            style={{
              color: "red",
              whiteSpace: "pre-line",
              marginBottom: "3px",
            }}
          >
            {errorMessage}
          </span>
          <button className="signup_btn" onClick={() => submitSignUp()}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
