import React, { useEffect } from "react";

const FailResult = () => {
  useEffect(() => {
    alert("결제에 실패했습니다. main페이지로 이동합니다.");
    document.location.href = "/";
  }, []);
};

export default FailResult;
