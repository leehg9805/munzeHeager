import React, { useEffect, useRef, useState } from "react";
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import "../../css/upload.css";

const Upload = () => {
  const dragBox = useRef();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [submitFiles, setSubmitFiles] = useState([]);
  const fileId = useRef(1);

  const PostRegister = useMutation(async () => {
    const formData = new FormData();
    selectedFiles.forEach(selectedFile => {
      formData.append("file", selectedFile.file);
    })

    const option = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    const response = await axios.post("http://localhost:8080/submitUpload",formData, option);
    return response;
  });

  const registerPostSubmitHandle = () => {
    PostRegister.mutate();
  }

  const handleFileChange = (e) => {
    console.log("반응")
    const newSelecteFiles = [];

    for(const file of e.target.files) {
      const fileData = {
        id: fileId.current,
        file
      }
      fileId.current += 1;
      console.log("fileData",fileData)
      newSelecteFiles.push(fileData);
      console.log("newSeletefiles", newSelecteFiles)
    }

    setSelectedFiles([...selectedFiles, ...newSelecteFiles]);
    e.target.value = null;
    // const formData = new FormData();
    //   selectedFiles.forEach(selectedFile => {
    //     formData.append("file", selectedFile.file);
    //     console("formdata에는 뭐가 들었을까???", formData)
    //   })

    // setSubmitFiles([…submitFiles,formData]);
    // console.log("submitFiles", submitFiles);
  };

  const dragHandleFileChange = (files) => {
    setSelectedFiles([...files]);
  };
  useEffect(() => {
    
  }, [selectedFiles]);


  console.log("저장된 파일",selectedFiles)

  // const submitUpload = () => {
  //   fetch("/submitUpload" ,{
  //       methd: "POST",
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //       body: JSON.stringify({
  //         data:submitFiles
  //       })
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   };

  //   fetch("/submitUpload", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: "loginInput.email",
  //       password: "loginInput.password",
  //       data: "test1.jpg"
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       }) 
  //     };

  
 

  ///// 파일 드래그 한 경우 /////
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function highlight(e) {
    preventDefaults(e);
    dragBox.current.classList.add("highlight");
  }
  function unhighlight(e) {
    preventDefaults(e);
    dragBox.current.classList.remove("highlight");
  }
  function handleDrop(e) {
    preventDefaults(e);
    unhighlight(e);
    const files = e.dataTransfer.files;
    const allowedFileTypes = [".obj", ".fbx"];
    const filteredFiles = Array.from(files).filter((file) => {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      return allowedFileTypes.includes("." + fileExtension);
    });
    if (filteredFiles.length !== files.length) {
      alert("잘못된 파일 형식입니다!");
      window.location.reload();
    }
    dragHandleFileChange(filteredFiles);

  }

  return (
    <div id="root">
      <h2 className="title">File Upload</h2>
      <hr />
      <div className="contents">
        <div className="upload-box">
          <div
            ref={dragBox}
            className="drag-file"
            onDragEnter={highlight}
            onDragOver={highlight}
            onDragLeave={unhighlight}
            onDrop={handleDrop}
          >
            <img alt="이루티 로고" className="image" />
            <p className="message">
              파일을 드래그 하세요!
              <span style={{ color: "rgb(36, 170, 225)", fontSize: "13px" }}>
                (.obj .fbx)
              </span>
            </p>
          </div>

          <label className="file-label" for="chooseFile" >
            Choose File
          </label>
          <input
            className="file"
            id="chooseFile"
            type="file"
            multiple
            onChange={handleFileChange}
            accept=".obj, .fbx"
          />
          <button onClick={registerPostSubmitHandle}> 보내기</button>
        </div>
      </div>
    </div>
  );
};

export default Upload;


