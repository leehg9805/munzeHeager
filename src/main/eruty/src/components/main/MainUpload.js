import React from "react";
import { Link } from "react-router-dom";

const MainUpload = () => {
  return (
    <section className="MainUpload">
      <div className="inner">
        <div className="upload_content">
          <div className="tit">
            <h2>내 작업물로 수익창출까지!</h2>
            <strong>내 작업물로 수익창출까지!</strong>
          </div>
          <div className="upload_btn">
            <span>
              <Link to={"/Upload"}>내 작품 업로드하기</Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainUpload;
