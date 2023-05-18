import React from "react";
import { Link } from "react-router-dom";

const MainCate = () => {
  const cate = [
    { id: 1, icon: "아이콘", name: "동물" },
    { id: 2, icon: "아이콘", name: "건물" },
    { id: 3, icon: "아이콘", name: "탈것" },
    { id: 4, icon: "아이콘", name: "캐릭터" },
    { id: 5, icon: "아이콘", name: "가구" },
    { id: 6, icon: "아이콘", name: "의류" },
    { id: 7, icon: "아이콘", name: "음식" },
    { id: 8, icon: "아이콘", name: "무기" },
    { id: 9, icon: "아이콘", name: "과학" },
    { id: 10, icon: "아이콘", name: "운동기구" },
    { id: 11, icon: "아이콘", name: "예술" },
    { id: 12, icon: "아이콘", name: "자연" },
    { id: 13, icon: "아이콘", name: "기하학" },
    { id: 14, icon: "아이콘", name: "스포츠" },
  ];
  return (
    <section className="MainCate">
      <div className="inner">
        <div className="cate_content">
          <div className="tit">
            <h2>원하는 서비스를 카테고리에서 찾아보세요</h2>
          </div>
          <div className="tools">
            <ul className="tool_list">
              <li>
                <Link to={`#!`}>FBX</Link>
              </li>
              <li>
                <Link to={`#!`}>OBJ</Link>
              </li>
              <li>
                <Link to={`#!`}>MAYA</Link>
              </li>
              <li>
                <Link to={`#!`}>BLENDER</Link>
              </li>
              <li>
                <Link to={`#!`}>STL</Link>
              </li>
            </ul>
          </div>
          <div className="option">
            <ul className="option_list">
              <li>
                <Link to={`#!`}>modeling</Link>
              </li>
              <li>
                <Link to={`#!`}>rendering</Link>
              </li>
              <li>
                <Link to={`#!`}>rigging</Link>
              </li>
              <li>
                <Link to={`#!`}>animation</Link>
              </li>
            </ul>
          </div>
          <div className="category">
            <ul className="category_list">
              {cate &&
                cate.map((it, idx) => {
                  return (
                    <li key={it.id}>
                      <Link to={`#!`}>
                        <img
                          src={`/img/main_img/main_cate${
                            idx < 9 ? "0" + (idx + 1) : idx + 1
                          }.svg`}
                          alt={it.name}
                        />
                      </Link>
                      <span>{it.name}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCate;
