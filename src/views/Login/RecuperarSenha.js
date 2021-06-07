import React, { useState } from "react";

//
import "../../styles/Login/Login.css";

//
import Logo from "../../assets/images/Banner/LoginLeft.svg";
import Pata from "../../assets/images/Complements/IlustratorPata.svg";
import { useHistory } from "react-router-dom";

function Entrar() {
  const history = useHistory();

  const [email, setEmail] = useState("");

  const recuperarSenha = (e) => {
    e.preventDefault();

    // handle RecuperarSenha
  };

  const handleEmail = (e) => {
    if (email !== "") {
      if (e.key === "Enter") {
        recuperarSenha(e);
      }
    }
  };

  return (
    <div className="animalX--login">
      <IconBack onClick={() => history.push("/entrar")} />

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
            className="animalX--login-desactive-btn"
          >
            Cadastro
          </button>
        </section>
      </div>

      <div className="animalX--login-right">
        <PataAzulTop className="animalX--login-right__pata-top" />
        <PataAzulBottom className="animalX--login-right__pata-bottom" />

        <p>Recuperar senha</p>

        <div className="animalX--login__input-form">
          <p>E-mail</p>
          <div>
            <IconEmail />
            <input
              style={{ marginRight: "12px" }}
              autoComplete="new-password"
              placeholder="Escreva seu email de recuperação"
              type="text"
              value={email}
              onKeyUp={(e) => handleEmail(e)}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <button onClick={(e) => recuperarSenha(e)}>Concluir</button>
      </div>
    </div>
  );
}

export default Entrar;

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
