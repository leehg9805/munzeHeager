import React, { useState, useEffect } from "react";

const NicePay = () => {
  // const [message, setMessage] = useState([]);
  // console.log(message)
  const CLIENT_ID = "S2_39a45417aaec4c3c8b2e6b191f54a77c";
  // const SECRET_KEY = "9eb85607103646da9f9c02b128f2e5ee";
  let UUID = crypto.randomUUID();

  // console.log(UUID);
  // console.log(btoa(CLIENT_ID));

  //api
  useEffect(() => {
    if (document.querySelector( "script[src='https://pay.nicepay.co.kr/v1/js/']")) return;
    const scriptUrls = ["https://pay.nicepay.co.kr/v1/js/"];
    const promises = scriptUrls.map((url) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
    });
  }, []);

  const nicePay = (card) => {
    window.AUTHNICE.requestPay({
      clientId: CLIENT_ID,
      method: card,
      orderId: UUID,
      amount: 100,
      goodsName: "나이스페이-상품",
      returnUrl: "http://localhost:8080/serverAuth",
      fnError: function (result) {
        alert("개발자확인용 : " + result.errorMsg + "");
      },
    });
  };
  const niceCancel = () => {
    fetch("/cancelAuth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tid: "UT0004704m01012304300136191104",
        amount: "100",
      }),
    }) 
    .then((response) => response.json())
    .then((result) => {
        console.log(result)
        // document.location.href = "/serverAuth";
    });
  };
  return (
    <div className="App">
      <div>
        <button onClick={() => nicePay("card")}>카드결제</button>
        <button onClick={() => nicePay("kakaopay")}>카카오결제</button>
        <button onClick={() => nicePay("naverpayCard")}>네이버결제</button>
        <button onClick={() => nicePay("samsungpayCard")}>삼성결제</button>
      </div>
      <div>
        <button onClick={() => niceCancel()}>취소요청</button>
      </div>
    </div>
  );
}

export default NicePay;
