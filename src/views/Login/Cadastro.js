import React, { useState } from "react";

//
import "../../styles/Login/Login.css";

//
import Logo from "../../assets/images/Banner/LoginLeft.svg";
import Pata from "../../assets/images/Complements/IlustratorPata.svg";
import { useHistory } from "react-router-dom";

//
import { CgClose } from "react-icons/cg";

//
import { useStateValue } from "../../providers/StateProvider";

//
import UserNull from "../../assets/images/user/usernull.png";
import api from '../../service/service';

function Cadastro() {
  const history = useHistory();
  const [{}, dispatch] = useStateValue();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [name, setName] = useState("");
  const [upload, setUpload] = useState(null);
  const [uploadView, setUploadView] = useState("");
  const [viewSenha, setViewSenha] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");

  const cadastro = async (e)   => {
    e.preventDefault();
    var user
    const headers = {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*', 
    };

    await fetch(
      "https://geolocation-db.com/json/e4f42070-ad2d-11eb-adf1-cf51da9b3410"
    )
      .then((response) => response.json())
      .then((data) => {
          user = {
          img_file: upload ? upload : null,
          img_view: upload ? uploadView : UserNull,
          cidade: data?.city,
          email: email,
          estado: data?.state, 
          nome: name,
          senha: senha,
          whatsapp: whatsapp,
        };
         
      });
    const resp = await api.post('usuario/salvar',user,headers); 
    const dataLogin = {
        email: email,
        password: senha
    } 
    let respLogin =  await api.post('auth',dataLogin)   
        localStorage.setItem('TOKEN', respLogin.data.token);
        localStorage.setItem("ID_USUARIO_LOGADO",respLogin.data.usuario.id); 
        uploadImage();
         user = { 
          img_view: "https://photoanimalx.s3.us-east-2.amazonaws.com/"+respLogin.data.usuario.img_login, 
          tipo_usuario:respLogin.data.usuario.tipo_usuario
        }  
          // handleCadastro
          dispatch({
            type: "SET_USER",
            user: user,
          });
  
          history.push("/");
         
  }; 
  async function uploadImage(){ 
    if (upload) { 
      let dataUpload = new FormData();  
      dataUpload.append('file',upload,upload.name);  
      var config = { headers: { Authorization: "bearer " + localStorage.getItem('TOKEN') } };   
      await api.post(`usuario/uploadFotoPerfil/${localStorage.getItem('ID_USUARIO_LOGADO')}`,dataUpload,config); 
    }
  }

  const handleName = (e) => {
    if (name !== "") {
      if (e.key === "Enter") {
        document.getElementById("cadastro-whatsapp").focus();
      }
    }
  };

  const handleEmail = (e) => {
    if (whatsapp !== "" && email !== "" && name !== "") {
      if (e.key === "Enter") {
        document.getElementById("cadastro-senha").focus();
      }
    }
  };

  const handleWhatsapp = (e) => {
    if (whatsapp !== "" && name !== "") {
      if (e.key === "Enter") {
        document.getElementById("cadastro-email").focus();
      }
    }
  };

  const handleSenha = (e) => {
    if (email !== "" && whatsapp !== "" && senha !== "" && name !== "") {
      if (e.key === "Enter") {
        cadastro(e);
      }
    }
  };

  function changeImageUploadImage(e) {
    if (e.target.files[0]) {
      var extPermitidas = [
        "jpg",
        "png",
        "jpeg",
        "svg",
        "tiff",
        "raw",
        "webp",
        "bmp",
        "gif",
      ];
      var extArquivo = e.target.files[0].name.split(".").pop();
      if (
        typeof extPermitidas.find(function (ext) {
          return extArquivo == ext;
        }) == "undefined"
      ) {
        alert('O formato do arquivo "' + extArquivo + '" não e permitido!');
      } else {
        setUpload(e.target.files[0]);
      }
    }
  }

  if (upload) {
    const reader = new FileReader();

    reader.onload = function () {
      const result = reader.result;

      setUploadView(result);
    };
    reader.readAsDataURL(upload);
  }

  return (
    <div className="animalX--login">
      <IconBack onClick={() => history.push("/")} />

      <div className="animalX--login-left">
        <img className="animalX--login-left__pata" src={Pata} alt="" />
        <img className="animalX--login-left__logo" src={Logo} alt="" />

        <section className="animalX--login-btns">
          <button
            onClick={() => history.push("/entrar")}
            className="animalX--login-desactive-btn"
          >
            Entrar
          </button>
          <button
            onClick={() => history.push("/cadastro")}
            className="animalX--login-active-btn"
          >
            Cadastro
          </button>
        </section>
      </div>

      <div style={{ paddingTop: 20 }} className="animalX--login-right">
        <PataAzulTop className="animalX--login-right__pata-top" />
        <PataAzulBottom className="animalX--login-right__pata-bottom" />

        <p style={{ marginTop: 0, marginBottom: "5px" }}>Cadastrar-se Agora</p>

        <input
          onChange={(e) => changeImageUploadImage(e)}
          style={{ display: "none" }}
          type="file"
          id="cadastro-upload"
        />

        {!upload ? (
          <label htmlFor="cadastro-upload" className="animalX--login__upload">
            <IconImage />
          </label>
        ) : (
          <div className="animalX--login__upload">
            <CgClose
              style={{
                width: 28,
                height: 28,
                position: "absolute",
                bottom: "-12px",
                cursor: "pointer",
                padding: "5px",
                borderRadius: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(194, 235, 255, 1)",
              }}
              color="#555"
              onClick={() => {
                setUpload(null);
                setUploadView("");
              }}
            />

            <img src={uploadView} alt="" />
          </div>
        )}

        <div className="animalX--login__input-form">
          <p>Nome</p>
          <div>
            <IconName />
            <input
              style={{ marginRight: "12px" }}
              id="cadastro-name"
              autoComplete="new-password"
              placeholder="Seu nome de usuário"
              type="text"
              value={name}
              onKeyUp={(e) => handleName(e)}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="animalX--login__input-form">
          <p>Whatsapp</p>
          <div>
            <IconWhatsapp />
            <input
              style={{ marginRight: "12px" }}
              id="cadastro-whatsapp"
              placeholder="Seu whatsapp"
              type="text"
              value={whatsapp}
              onKeyUp={(e) => handleWhatsapp(e)}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
          </div>
        </div>

        <div className="animalX--login__input-form">
          <p>E-mail</p>
          <div>
            <IconEmail />
            <input
              style={{ marginRight: "12px" }}
              id="cadastro-email"
              autoComplete="new-password"
              placeholder="Crie um e-mail"
              type="text"
              value={email}
              onKeyUp={(e) => handleEmail(e)}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="animalX--login__input-form">
          <p>Senha</p>
          <div>
            <IconSenha />
            <input
              id="cadastro-senha"
              autoComplete="new-password"
              placeholder="Crie uma senha"
              type={viewSenha ? "text" : "password"}
              value={senha}
              onKeyUp={(e) => handleSenha(e)}
              onChange={(e) => setSenha(e.target.value)}
            />
            {viewSenha ? (
              <IconOlhoClose
                style={{ zIndex: 999, cursor: "pointer" }}
                onClick={() => setViewSenha(false)}
              />
            ) : (
              <IconOlhoOpen
                style={{ zIndex: 999, cursor: "pointer" }}
                onClick={() => setViewSenha(true)}
              />
            )}
          </div>
        </div>

        <button style={{ marginTop: 7 }} onClick={(e) => cadastro(e)}>
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Cadastro;

const IconWhatsapp = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z"
      fill="#130F26"
    />
  </svg>
);

const IconImage = () => (
  <svg
    width="68"
    height="64"
    viewBox="0 0 68 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="12.252" width="68" height="51.4595" rx="11" fill="#99D4FF" />
    <path
      d="M45.1714 35.8378C45.1714 42.7249 39.7181 48.2342 33.0813 48.2342C26.4445 48.2342 20.9912 42.7249 20.9912 35.8378C20.9912 28.9507 26.4445 23.4414 33.0813 23.4414C39.7181 23.4414 45.1714 28.9507 45.1714 35.8378Z"
      stroke="white"
      stroke-width="4"
    />
    <circle cx="52.9908" cy="24.1978" r="3.98198" fill="white" />
    <path
      d="M52.6846 12.2523C52.6846 9.00275 50.6838 5.88634 47.1223 3.5886C43.5608 1.29086 38.7304 2.4533e-07 33.6936 0C28.6569 -2.4533e-07 23.8265 1.29086 20.265 3.5886C16.7035 5.88634 14.7026 9.00275 14.7026 12.2523L33.6936 12.2523H52.6846Z"
      fill="#99D4FF"
    />
  </svg>
);

const IconName = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9968 15.1746C7.68376 15.1746 3.99976 15.8546 3.99976 18.5746C3.99976 21.2956 7.66076 21.9996 11.9968 21.9996C16.3098 21.9996 19.9938 21.3206 19.9938 18.5996C19.9938 15.8786 16.3338 15.1746 11.9968 15.1746Z"
      fill="#130F26"
    ></path>
    <path
      opacity="0.4"
      d="M11.9967 12.5837C14.9347 12.5837 17.2887 10.2287 17.2887 7.2917C17.2887 4.3547 14.9347 1.9997 11.9967 1.9997C9.05971 1.9997 6.70471 4.3547 6.70471 7.2917C6.70471 10.2287 9.05971 12.5837 11.9967 12.5837Z"
      fill="#130F26"
    ></path>
  </svg>
);

const PataAzulTop = ({ ...res }) => (
  <svg
    {...res}
    width="234"
    height="148"
    viewBox="0 0 234 148"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M33.0557 43.2376C9.94087 13.08 16.9478 -12.8803 38.9133 -29.716C60.8787 -46.5518 93.7766 -51.1774 116.891 -21.0198C140.006 9.13782 148.436 39.8302 126.471 56.6659C104.505 73.5017 56.1705 73.3952 33.0557 43.2376Z"
      fill="#C2EBFF"
      fill-opacity="0.4"
    />
    <path
      d="M84.2121 105.832C74.6423 93.3464 74.3118 82.8408 82.7393 80.7984C92.0627 73.6523 103.541 71.1963 113.111 83.6819C122.681 96.1675 124.346 106.882 115.022 114.028C104.015 115.075 93.782 118.318 84.2121 105.832Z"
      fill="#C2EBFF"
      fill-opacity="0.4"
    />
    <path
      d="M130.961 99.2648C121.391 86.7791 117.881 71.5327 126.309 69.4904C138.326 60.2794 153.724 61.9973 163.293 74.4829C172.863 86.9686 172.141 102.273 162.818 109.419C151.81 110.466 140.531 111.75 130.961 99.2648Z"
      fill="#C2EBFF"
      fill-opacity="0.4"
    />
    <path
      d="M156.083 57.3712C146.514 44.8856 143.004 29.6392 151.431 27.5968C163.449 18.3859 178.846 20.1037 188.416 32.5894C197.986 45.075 197.264 60.3796 187.94 67.5257C175.813 71.8519 165.653 69.8569 156.083 57.3712Z"
      fill="#C2EBFF"
      fill-opacity="0.4"
    />
    <path
      d="M146.667 0.639704C138.347 -10.2153 135.285 -23.462 142.598 -25.2273C153.02 -33.2155 166.388 -31.7075 174.708 -20.8525C183.028 -9.99754 182.417 3.29533 174.331 9.49286C163.808 13.2381 154.987 11.4947 146.667 0.639704Z"
      fill="#C2EBFF"
      fill-opacity="0.4"
    />
  </svg>
);

const PataAzulBottom = ({ ...res }) => (
  <svg
    {...res}
    width="164"
    height="138"
    viewBox="0 0 164 138"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M153.855 158.289C191.018 151.996 203.436 128.236 198.816 100.949C194.195 73.6623 173.384 47.8499 136.221 54.1421C99.0588 60.4342 72.2183 77.1298 76.8384 104.417C81.4585 131.704 116.692 164.581 153.855 158.289Z"
      fill="#C2EBFF"
      fill-opacity="0.4"
    />
    <path
      d="M74.4081 169.18C89.7939 166.575 97.1225 159.119 92.3697 151.879C90.4087 140.297 83.7155 130.675 68.3296 133.28C52.9438 135.885 44.5038 142.585 46.4648 154.167C53.7662 162.437 59.0223 171.785 74.4081 169.18Z"
      fill="#C2EBFF"
      fill-opacity="0.4"
    />
    <path
      d="M44.8309 132.504C60.2167 129.899 73.0568 121.143 68.304 113.904C65.7763 98.975 53.416 89.733 38.0302 92.338C22.6444 94.9431 12.8438 106.627 14.8048 118.209C22.1062 126.479 29.4451 135.109 44.8309 132.504Z"
      fill="#C2EBFF"
      fill-opacity="0.4"
    />
    <path
      d="M54.8206 84.742C70.2065 82.137 83.0465 73.3815 78.2937 66.1421C75.7661 51.2133 63.4058 41.9713 48.02 44.5763C32.6342 47.1814 22.8335 58.8648 24.7946 70.447C30.6981 81.8792 39.4348 87.3471 54.8206 84.742Z"
      fill="#C2EBFF"
      fill-opacity="0.4"
    />
    <path
      d="M99.9472 49.6785C113.324 47.4137 124.489 39.8154 120.36 33.5383C118.168 20.5911 107.426 12.5797 94.0492 14.8445C80.6729 17.1094 72.1487 27.2461 73.8494 37.2908C78.9776 47.2041 86.5708 51.9434 99.9472 49.6785Z"
      fill="#C2EBFF"
      fill-opacity="0.4"
    />
  </svg>
);

const IconOlhoClose = ({ ...res }) => (
  <svg
    {...res}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.9902 3.88189H12C13.3951 3.88189 14.7512 4.21662 16 4.84572L12.7415 8.13497C12.5073 8.09559 12.2537 8.06605 12 8.06605C9.8439 8.06605 8.09756 9.82832 8.09756 12.0041C8.09756 12.2601 8.12683 12.516 8.16585 12.7523L4.5561 16.395C3.58049 15.253 2.73171 13.8737 2.05854 12.2896C1.98049 12.1124 1.98049 11.8958 2.05854 11.7087C4.14634 6.80588 7.86341 3.88189 11.9902 3.88189ZM18.4293 6.54991C19.8439 7.84946 21.0439 9.60188 21.9415 11.7087C22.0195 11.8958 22.0195 12.1124 21.9415 12.2896C19.8537 17.1924 16.1366 20.1263 12 20.1263H11.9902C10.1073 20.1263 8.30244 19.506 6.71219 18.3739L9.80488 15.253C10.4293 15.6753 11.1902 15.9323 12 15.9323C14.1463 15.9323 15.8927 14.17 15.8927 12.0041C15.8927 11.1869 15.639 10.419 15.2195 9.78894L18.4293 6.54991Z"
      fill="#130F26"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.4293 6.54952L20.205 4.75771C20.4976 4.4722 20.4976 3.99964 20.205 3.71413C19.922 3.42862 19.4635 3.42862 19.1708 3.71413L18.2537 4.63957C18.244 4.65926 18.2245 4.67895 18.205 4.69864C18.1952 4.71833 18.1757 4.73802 18.1562 4.75771L17.2879 5.63491L14.1952 8.7558L3.72691 19.3186L3.69764 19.358C3.50252 19.6435 3.54154 20.0383 3.78545 20.2844C3.92203 20.4311 4.11715 20.5 4.30252 20.5C4.48789 20.5 4.67325 20.4311 4.81959 20.2844L15.2196 9.78855L18.4293 6.54952ZM12.0002 14.4555C13.3368 14.4555 14.4294 13.3529 14.4294 12.0041C14.4294 11.5906 14.3319 11.1968 14.1563 10.8621L10.8685 14.1798C11.2002 14.3571 11.5904 14.4555 12.0002 14.4555Z"
      fill="#130F26"
    ></path>
  </svg>
);

const IconOlhoOpen = ({ ...res }) => (
  <svg
    {...res}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.7366 6.04606C19.4439 7.36388 20.8976 9.29455 21.9415 11.7091C22.0195 11.8924 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8924 2.05854 11.7091C4.14634 6.87903 7.86341 4 11.9902 4H12C14.0683 4 16.0293 4.71758 17.7366 6.04606ZM8.09756 12C8.09756 14.1333 9.8439 15.8691 12 15.8691C14.1463 15.8691 15.8927 14.1333 15.8927 12C15.8927 9.85697 14.1463 8.12121 12 8.12121C9.8439 8.12121 8.09756 9.85697 8.09756 12Z"
      fill="#130F26"
    ></path>
    <path
      d="M14.431 11.9969C14.431 13.3254 13.3384 14.4114 12.0018 14.4114C10.6554 14.4114 9.56274 13.3254 9.56274 11.9969C9.56274 11.832 9.58226 11.6779 9.61152 11.5227H9.66031C10.7432 11.5227 11.6213 10.6694 11.6603 9.60175C11.7676 9.58332 11.8847 9.57265 12.0018 9.57265C13.3384 9.57265 14.431 10.6587 14.431 11.9969Z"
      fill="#130F26"
    ></path>
  </svg>
);

const IconEmail = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M22 15.9402C22 18.7302 19.76 20.9902 16.97 21.0002H16.96H7.05C4.27 21.0002 2 18.7502 2 15.9602V15.9502C2 15.9502 2.006 11.5242 2.014 9.29821C2.015 8.88021 2.495 8.64621 2.822 8.90621C5.198 10.7912 9.447 14.2282 9.5 14.2732C10.21 14.8422 11.11 15.1632 12.03 15.1632C12.95 15.1632 13.85 14.8422 14.56 14.2622C14.613 14.2272 18.767 10.8932 21.179 8.97721C21.507 8.71621 21.989 8.95021 21.99 9.36721C22 11.5762 22 15.9402 22 15.9402Z"
      fill="#130F26"
    ></path>
    <path
      d="M21.4761 5.6736C20.6101 4.0416 18.9061 2.9996 17.0301 2.9996H7.05013C5.17413 2.9996 3.47013 4.0416 2.60413 5.6736C2.41013 6.0386 2.50213 6.4936 2.82513 6.7516L10.2501 12.6906C10.7701 13.1106 11.4001 13.3196 12.0301 13.3196C12.0341 13.3196 12.0371 13.3196 12.0401 13.3196C12.0431 13.3196 12.0471 13.3196 12.0501 13.3196C12.6801 13.3196 13.3101 13.1106 13.8301 12.6906L21.2551 6.7516C21.5781 6.4936 21.6701 6.0386 21.4761 5.6736Z"
      fill="#130F26"
    ></path>
  </svg>
);

const IconSenha = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.7688 8.71384H16.2312C18.5886 8.71384 20.5 10.583 20.5 12.8885V17.8253C20.5 20.1308 18.5886 22 16.2312 22H7.7688C5.41136 22 3.5 20.1308 3.5 17.8253V12.8885C3.5 10.583 5.41136 8.71384 7.7688 8.71384ZM11.9949 17.3295C12.4928 17.3295 12.8891 16.9419 12.8891 16.455V14.2489C12.8891 13.7719 12.4928 13.3844 11.9949 13.3844C11.5072 13.3844 11.1109 13.7719 11.1109 14.2489V16.455C11.1109 16.9419 11.5072 17.3295 11.9949 17.3295Z"
      fill="#130F26"
    ></path>
    <path
      opacity="0.4"
      d="M17.5228 7.39595V8.86667C17.1672 8.7673 16.7912 8.71761 16.4051 8.71761H15.7446V7.39595C15.7446 5.37868 14.068 3.73903 12.0052 3.73903C9.94245 3.73903 8.26582 5.36874 8.25566 7.37608V8.71761H7.60533C7.20904 8.71761 6.83307 8.7673 6.47742 8.87661V7.39595C6.48758 4.41476 8.9568 2 11.9849 2C15.0536 2 17.5228 4.41476 17.5228 7.39595Z"
      fill="#130F26"
    ></path>
  </svg>
);

const IconBack = ({ ...res }) => (
  <svg
    {...res}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M15.7975 10.8097L19.4967 10.4825C20.3269 10.4825 21 11.1622 21 12.0004C21 12.8387 20.3269 13.5183 19.4967 13.5183L15.7975 13.1912C15.1463 13.1912 14.6183 12.6581 14.6183 12.0004C14.6183 11.3417 15.1463 10.8097 15.7975 10.8097Z"
      fill="#130F26"
    ></path>
    <path
      d="M3.37522 10.8698C3.43303 10.8115 3.64903 10.5647 3.85194 10.3598C5.03556 9.07656 8.12607 6.97815 9.74278 6.33596C9.98823 6.23352 10.6089 6.01542 10.9417 6C11.2591 6 11.5624 6.0738 11.8515 6.2192C12.2126 6.42299 12.5006 6.74463 12.6598 7.12355C12.7613 7.38572 12.9206 8.17331 12.9206 8.18763C13.0787 9.04792 13.1649 10.4469 13.1649 11.9934C13.1649 13.465 13.0787 14.8067 12.9489 15.6813C12.9347 15.6967 12.7755 16.6738 12.602 17.0086C12.2846 17.6211 11.6638 18 10.9995 18H10.9417C10.5086 17.9857 9.59878 17.6057 9.59878 17.5924C8.06825 16.9502 5.05083 14.9532 3.83776 13.6258C3.83776 13.6258 3.49522 13.2844 3.34685 13.0718C3.11558 12.7656 2.99995 12.3866 2.99995 12.0077C2.99995 11.5847 3.12977 11.1915 3.37522 10.8698Z"
      fill="#130F26"
    ></path>
  </svg>
);