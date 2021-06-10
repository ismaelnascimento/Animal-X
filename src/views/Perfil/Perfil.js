import React, { useState, useEffect } from "react";
import { useStateValue } from "../../providers/StateProvider";

//
import "../../styles/Perfil/Perfil.css";

//
import { CgClose } from "react-icons/cg";

function Perfil() {
  const [{ user }, dispatch] = useStateValue();
  const [upload, setUpload] = useState(null);
  const [uploadView, setUploadView] = useState("");

  const [nameUser, setNameUser] = useState(user?.nome);
  const [cidadeUser, setCidadeUser] = useState(user?.cidade);
  const [estadoUser, setEstadoUser] = useState(user?.estado);
  const [emailUser, setEmailUser] = useState(user?.email);
  const [whatsappUser, setWhatsappUser] = useState(user?.whatsapp);

  function changeImageUploadImage(e) {
    setUpload(e.target.files[0]);
  }

  if (upload) {
    const reader = new FileReader();

    reader.onload = function () {
      const result = reader.result;

      setUploadView(result);
    };
    reader.readAsDataURL(upload);
  }

  const saveChangeEdit = (e) => {
    e.preventDefault();

    // HANDLE EDIT PROFILE

    var data = {
      img_view: upload ? uploadView : user?.img_view,
      cidade: cidadeUser,
      tipo_usuario: user?.tipo_usuario,
      img_file: upload ? upload : user?.img_file,
      email: emailUser,
      estado: estadoUser,
      nome: nameUser,
      senha: user?.senha,
      whatsapp: whatsappUser,
    };

    dispatch({
      type: "SET_USER",
      user: data,
    });

    setUpload(null);
    setUploadView("");
  };

  return (
    <div className="app-cadastro-pet">
      <div className="app-cadastro-pet__back">
        <div></div>
      </div>

      <div className="app-cadastro-pet__content">
        <div className="app-pefil">
          <input
            onChange={(e) => changeImageUploadImage(e)}
            type="file"
            id="upload-profile-new"
            style={{ display: "none" }}
          />

          {!upload ? (
            <div className="app-pefil_image">
              <img src={user?.img_view} alt="" />
              <label htmlFor="upload-profile-new">
                <IconEdit />
              </label>
            </div>
          ) : (
            <div className="app-pefil_image">
              <CgClose
                onClick={() => {
                  setUpload(null);
                  setUploadView("");
                }}
              />
              <img src={uploadView} alt="" />
              <label onClick={(e) => saveChangeEdit(e)}>
                <IconCheck />
              </label>
            </div>
          )}

          <div className="app-cadastro-pet__content-items__inputs">
            <div className="app-cadastro-pet__content-items__inputs-input">
              <p>Nome</p>
              <input
                onChange={(e) => setNameUser(e.target.value)}
                value={nameUser}
                type="text"
                placeholder="Seu nome"
              />
            </div>

            <div className="app-cadastro-pet__content-items__inputs-input">
              <p>Email</p>
              <input
                onChange={(e) => setEmailUser(e.target.value)}
                value={emailUser}
                type="text"
                placeholder="Seu email"
              />
            </div>

            <div className="app-cadastro-pet__content-items__inputs-input">
              <p>Whatsapp</p>
              <input
                onChange={(e) => setWhatsappUser(e.target.value)}
                value={whatsappUser}
                type="number"
                placeholder="Seu whatsapp"
              />
            </div>

            <div className="app-cadastro-pet__content-items__inputs-input">
              <p>Estado</p>
              <input
                onChange={(e) => setEstadoUser(e.target.value)}
                value={estadoUser}
                type="text"
                placeholder="Seu estado"
              />
            </div>

            <div className="app-cadastro-pet__content-items__inputs-input">
              <p>Cidade</p>
              <input
                onChange={(e) => setCidadeUser(e.target.value)}
                value={cidadeUser}
                type="text"
                placeholder="Seu cidade"
              />
            </div>
          </div>

          {nameUser !== user?.nome ||
          emailUser !== user?.email ||
          estadoUser !== user?.estado ||
          cidadeUser !== user?.cidade ||
          whatsappUser !== user?.whatsapp ? (
            <button onClick={(e) => saveChangeEdit(e)}>Salvar</button>
          ) : (
            <button style={{ opacity: "0.5", cursor: "auto" }}>Salvar</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Perfil;

const IconCheck = ({ ...rest }) => (
  <svg
    {...rest}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M16.3402 1.9998H7.67024C4.28024 1.9998 2.00024 4.3798 2.00024 7.9198V16.0898C2.00024 19.6198 4.28024 21.9998 7.67024 21.9998H16.3402C19.7302 21.9998 22.0002 19.6198 22.0002 16.0898V7.9198C22.0002 4.3798 19.7302 1.9998 16.3402 1.9998Z"
      fill="#130F26"
    />
    <path
      d="M10.8133 15.2479C10.5893 15.2479 10.3653 15.1629 10.1943 14.9919L7.82132 12.6189C7.47932 12.2769 7.47932 11.7229 7.82132 11.3819C8.16332 11.0399 8.71632 11.0389 9.05832 11.3809L10.8133 13.1359L14.9413 9.0079C15.2833 8.6659 15.8363 8.6659 16.1783 9.0079C16.5203 9.3499 16.5203 9.9039 16.1783 10.2459L11.4323 14.9919C11.2613 15.1629 11.0373 15.2479 10.8133 15.2479Z"
      fill="#130F26"
    />
  </svg>
);

const IconEdit = ({ ...rest }) => (
  <svg
    {...rest}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M19.9925 18.9533H14.2982C13.7426 18.9533 13.2908 19.4123 13.2908 19.9766C13.2908 20.5421 13.7426 21 14.2982 21H19.9925C20.548 21 20.9999 20.5421 20.9999 19.9766C20.9999 19.4123 20.548 18.9533 19.9925 18.9533Z"
      fill="#130F26"
    />
    <path
      d="M10.309 6.90388L15.7049 11.264C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8345 7.72908 20.8452L4.23696 20.8882C4.05071 20.8904 3.88775 20.7614 3.84542 20.5765L3.05175 17.1258C2.91419 16.4916 3.05175 15.8358 3.45388 15.3306L9.88256 6.95548C9.98627 6.82111 10.1778 6.79746 10.309 6.90388Z"
      fill="#130F26"
    />
    <path
      opacity="0.4"
      d="M18.1205 8.66544L17.0803 9.96401C16.9755 10.0962 16.7872 10.1177 16.657 10.0124C15.3924 8.98901 12.1543 6.36285 11.2559 5.63509C11.1247 5.52759 11.1067 5.33625 11.2125 5.20295L12.2157 3.95706C13.1257 2.78534 14.7131 2.67784 15.9935 3.69906L17.4644 4.87078C18.0676 5.34377 18.4698 5.96726 18.6073 6.62299C18.7661 7.3443 18.5967 8.0527 18.1205 8.66544Z"
      fill="#130F26"
    />
  </svg>
);
