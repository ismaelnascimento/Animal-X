import React, { useState, useEffect } from "react";

//
import { CgClose } from "react-icons/cg";

//
import "../../styles/Pets/CadastroPet.css";

function CadastroPet() {
  const [upload1, setUpload1] = useState(null);
  const [uploadView1, setUploadView1] = useState("");
  const [upload2, setUpload2] = useState(null);
  const [uploadView2, setUploadView2] = useState("");
  const [upload3, setUpload3] = useState(null);
  const [uploadView3, setUploadView3] = useState("");

  function changeImageUploadImage1(e) {
    setUpload1(e.target.files[0]);
  }
  function changeImageUploadImage2(e) {
    setUpload2(e.target.files[0]);
  }
  function changeImageUploadImage3(e) {
    setUpload3(e.target.files[0]);
  }

  const renderFt = (upload, setUploadView) => {
    if (upload) {
      const reader = new FileReader();

      reader.onload = function () {
        const result = reader.result;

        setUploadView(result);
      };
      reader.readAsDataURL(upload);
    }
  };

  useEffect(() => {
    renderFt(upload1, setUploadView1);
    renderFt(upload2, setUploadView2);
    renderFt(upload3, setUploadView3);
  }, [upload1, upload2, upload3]);

  return (
    <div className="app-cadastro-pet">
      <div className="app-cadastro-pet__back">
        <div></div>
      </div>

      <div className="app-cadastro-pet__content">
        <p>Cadastro de seu amiguinho</p>

        <div className="app-cadastro-pet__content-items">
          <div className="app-cadastro-pet__content-items__uploads">
            <input
              onChange={(e) => changeImageUploadImage1(e)}
              type="file"
              id="upload-pet-cadastro-1"
            />
            <input
              onChange={(e) => changeImageUploadImage2(e)}
              type="file"
              id="upload-pet-cadastro-2"
            />
            <input
              onChange={(e) => changeImageUploadImage3(e)}
              type="file"
              id="upload-pet-cadastro-3"
            />

            {!upload1 ? (
              <label
                className="app-cadastro-pet__content-items__uploads-view"
                htmlFor="upload-pet-cadastro-1"
              >
                <IconUpload />
                <p>Fazer upload da 1 imagem</p>
              </label>
            ) : (
              <div
                style={{ border: "none", cursor: "auto" }}
                className="app-cadastro-pet__content-items__uploads-view"
              >
                <div
                  onClick={() => {
                    setUpload1(null);
                    setUploadView1("");
                  }}
                >
                  <CgClose />
                </div>

                <img src={uploadView1} alt="" />
              </div>
            )}
            {!upload2 && upload1 ? (
              <label
                className="app-cadastro-pet__content-items__uploads-view"
                htmlFor="upload-pet-cadastro-2"
              >
                <IconUpload />
                <p>Fazer upload da 2 imagem</p>
              </label>
            ) : upload2 ? (
              <div
                style={{ border: "none", cursor: "auto" }}
                className="app-cadastro-pet__content-items__uploads-view"
              >
                {" "}
                <div
                  onClick={() => {
                    setUpload2(null);
                    setUploadView2("");
                  }}
                >
                  <CgClose />
                </div>
                <img src={uploadView2} alt="" />
              </div>
            ) : (
              ""
            )}
            {!upload3 && upload1 && upload2 ? (
              <label
                className="app-cadastro-pet__content-items__uploads-view"
                htmlFor="upload-pet-cadastro-3"
              >
                <IconUpload />
                <p>Fazer upload da 3 imagem</p>
              </label>
            ) : upload3 ? (
              <div
                style={{ border: "none", cursor: "auto" }}
                className="app-cadastro-pet__content-items__uploads-view"
              >
                {" "}
                <div
                  onClick={() => {
                    setUpload3(null);
                    setUploadView3("");
                  }}
                >
                  <CgClose />
                </div>
                <img src={uploadView3} alt="" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroPet;

const IconUpload = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M6.447 22C3.996 22 2 19.9698 2 17.4755V12.5144C2 10.0252 3.99 8 6.437 8L17.553 8C20.005 8 22 10.0302 22 12.5256V17.4846C22 19.9748 20.01 22 17.563 22H16.623H6.447Z"
      fill="#130F26"
    />
    <path
      d="M11.4548 2.22108L8.5458 5.06687C8.2458 5.36099 8.2458 5.83432 8.5478 6.12747C8.8498 6.41964 9.3368 6.41867 9.6368 6.12552L11.2298 4.56628V6.06124V14.4515C11.2298 14.8655 11.5748 15.2015 11.9998 15.2015C12.4258 15.2015 12.7698 14.8655 12.7698 14.4515V4.56628L14.3628 6.12552C14.6628 6.41867 15.1498 6.41964 15.4518 6.12747C15.6028 5.98041 15.6788 5.78854 15.6788 5.59571C15.6788 5.40482 15.6028 5.21296 15.4538 5.06687L12.5458 2.22108C12.4008 2.07986 12.2048 2 11.9998 2C11.7958 2 11.5998 2.07986 11.4548 2.22108Z"
      fill="#130F26"
    />
  </svg>
);
