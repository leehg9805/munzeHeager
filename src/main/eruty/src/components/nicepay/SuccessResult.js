import React, { useEffect } from "react";

const SuccessResult = () => {
  useEffect(() => {
    alert("결제에 성공했습니다. main페이지로 이동합니다.");
    document.location.href = "/";
  }, []);
};

export default SuccessResult;
