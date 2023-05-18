import React, { useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize";
import "../../css/toggle.css";
// import GltfLoader from "./GltfLoader";

Quill.register("modules/ImageResize", ImageResize);

const UploadMain = () => {
  /*
  ////////////////이미지업로드//////////////////

  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
      //window.URL.revokeObjectURL(currentImageUrl);//메모리 누수방지
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };
*/

  const [inputHashTag, setInputHashTag] = useState("");
  const [hashTags, setHashTags] = useState([]);
  const kindOptions = ["사람", "자동차", "운동", "음식", "동물"];
  const extOptions = ["OBJ", "GLTF", "FBX"];

  const [uploadInput, setUploadInput] = useState({
    title: "",
    kindOptions: "",
    extOptions: "",
    date: "",
    price: "",
    canModification: false,
    canCommercialUse: false,
    isOrigin: false,
  });
  const uploadInputChange = (e) => {
    setUploadInput({ ...uploadInput, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(uploadInput);
  }, [uploadInput]);
  const toggleInputChange = (e) => {
    setUploadInput({
      ...uploadInput,
      [e.target.name]: !uploadInput[e.target.name],
    });
  };
  ////////////////상세설명//////////////////
  const [value, setValue] = useState("");
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, "link"],
        [
          {
            color: [
              "#000000",
              "#e60000",
              "#ff9900",
              "#ffff00",
              "#008a00",
              "#0066cc",
              "#9933ff",
              "#ffffff",
              "#facccc",
              "#ffebcc",
              "#ffffcc",
              "#cce8cc",
              "#cce0f5",
              "#ebd6ff",
              "#bbbbbb",
              "#f06666",
              "#ffc266",
              "#ffff66",
              "#66b966",
              "#66a3e0",
              "#c285ff",
              "#888888",
              "#a10000",
              "#b26b00",
              "#b2b200",
              "#006100",
              "#0047b2",
              "#6b24b2",
              "#444444",
              "#5c0000",
              "#663d00",
              "#666600",
              "#003700",
              "#002966",
              "#3d1466",
              "custom-color",
            ],
          },
          { background: [] },
        ],
        ["image", "video"],
        ["clean"],
      ],
    },
    ImageResize: {
      parchment: Quill.import("parchment"),
    },
  };

  ////////////////해시태그//////////////////

  const isEmptyValue = (value) => {
    if (!value.length) {
      return true;
    }
    return false;
  };
  const addHashTag = (e) => {
    const allowedCommand = ["Comma", "Enter", "Space", "NumpadEnter"];
    if (!allowedCommand.includes(e.code)) return;

    if (isEmptyValue(e.target.value.trim())) {
      return setInputHashTag("");
    }

    let newHashTag = e.target.value.trim();
    const regExp = /[\{\}\[\]\/?.;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    if (regExp.test(newHashTag)) {
      newHashTag = newHashTag.replace(regExp, "");
    }
    if (newHashTag.includes(",")) {
      newHashTag = newHashTag.split(",").join("");
    }

    if (isEmptyValue(newHashTag)) return;

    setHashTags((prevHashTags) => {
      return [...new Set([...prevHashTags, newHashTag])];
    });

    setInputHashTag("");
  };

  const keyDownHandler = (e) => {
    if (e.code !== "Enter" && e.code !== "NumpadEnter") return;
    e.preventDefault();

    const regExp = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ|0-9| \t|]+$/g;
    if (!regExp.test(e.target.value)) {
      setInputHashTag("");
    }
  };

  const changeHashTagInput = (e) => {
    setInputHashTag(e.target.value);
  };

  return (
    <div
      style={{
        margin: "0 auto",
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between",
        width: "90%",
      }}
    >
      {/* <div>
        <div>
          <label htmlFor="input-file" onChange={handleAddImages}>
            <input type="file" id="input-file" multiple />+<span>사진추가</span>
          </label>
          {showImages.map((image, id) => (
            <div key={id} style={{ display: "flex" }}>
              <img
                src={image}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "200px",
                  maxHeight: "200px",
                }}
                alt={`${image}-${id}`}
              />
              <span onClick={() => handleDeleteImage(id)}>사진삭제</span>
            </div>
          ))}
        </div>
      </div> */}
      <div style={{ width: "45%" }}>
        <input
          style={{
            border: "none",
            outline: "none",
            height: "30px",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
          name="title"
          onChange={uploadInputChange}
          placeholder="제목을 입력하세요."
        />
        <hr
          style={{
            width: "15%",
            height: "3px",
            border: 0,
            background: "black",
            marginBottom: "20px",
          }}
        />
        <div className="hashTags" style={{ display: "flex", flexWrap: "wrap" }}>
          {hashTags.length > 0 &&
            hashTags.map((hashTag) => {
              const deleteHashTag = () => {
                const updatedHashTags = hashTags.filter(
                  (tag) => tag !== hashTag
                );
                setHashTags(updatedHashTags);
              };

              return (
                <button
                  key={hashTag}
                  className="tag"
                  style={{
                    margin: "3px",
                    background: "#a4a4a4",
                    border: "none",
                    padding: "3px 10px",
                    borderRadius: "3px",
                  }}
                  onClick={deleteHashTag}
                >
                  {hashTag}
                </button>
              );
            })}

          <input
            style={{ border: "none", outline: "none" }}
            value={inputHashTag}
            onChange={changeHashTagInput}
            onKeyUp={addHashTag}
            onKeyDown={keyDownHandler}
            placeholder="해시태그를 등록해보세요."
            className="hashTagInput"
          />
        </div>

        <div style={{ marginTop: "5px" }}>
          <select name="kindOptions" onChange={uploadInputChange}>
            <option value="">선택하세요</option>
            {kindOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select name="extOptions" onChange={uploadInputChange}>
            <option value="">선택하세요</option>
            {extOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div style={{ backgroundColor: "tomato", height: "500px" }}></div>
      </div>

      <div
        style={{
          display: "flex",
          width: "45%",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                width: "300px",
                justifyContent: "space-between",
              }}
            >
              창작 연월일:
              <input type="date" name="date" onChange={uploadInputChange} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              가격:
              <input
                type="number"
                name="price"
                placeholder="0원"
                onChange={uploadInputChange}
                style={{ textAlign: "right" }}
              />
            </div>
          </div>
          <div
            style={{
              width: "200px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              출처 표시:
              <input
                type="checkbox"
                value={uploadInput.isOrigin}
                name="isOrigin"
                onChange={toggleInputChange}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              상업적 이용 금지:
              <input
                type="checkbox"
                value={uploadInput.canCommercialUse}
                name="canCommercialUse"
                onChange={toggleInputChange}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              변경 금지:
              <input
                type="checkbox"
                value={uploadInput.canModification}
                name="canModification"
                onChange={toggleInputChange}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ReactQuill
            theme="snow"
            value={value}
            modules={modules}
            onChange={setValue}
            style={{ height: "600px" }}
          />
          <button
            style={{
              marginTop: "20px",
              cursor: "pointer",
              padding: "10px 20px",
              border: "none",
              backgroundColor: "#333",
              fontSize: "20px",
              fontWeight: "900",
              color: "#fff",
            }}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadMain;
