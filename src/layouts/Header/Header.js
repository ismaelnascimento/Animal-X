import React, { useRef, useState, useEffect } from "react";

//
import "../../styles/Header/header.css";

//
import Pata from "../../assets/images/Complements/IlustratorPata.svg";
import AdoteImage from "../../assets/images/Banner/AdoteAnimal.svg";
import IlustratorHeader from "../../assets/images/Banner/IlustratorHeader.svg";
import Gato from "../../assets/images/gato.svg";
import Cachorro from "../../assets/images/cachorro.svg";

//
import FilterHeader from "../../components/Filter/FilterHeader";

//
import { useHistory, useLocation } from "react-router-dom";
import { useStateValue } from "../../providers/StateProvider";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

function Header() {
  const history = useHistory();
  const location = useLocation();
  const [{ user }, dispatch] = useStateValue();

  const [modalUser, setModalUser] = useState(false);

  const modalRef = useRef();
  useOnClickOutside(modalRef, () => setModalUser(false));

  return (
    <div className="animalX--header">
      <div className="animalX--header__pata">
        <img src={Pata} alt="Pata" />
      </div>

      <div className="animalX--header__left">
        <img src={AdoteImage} alt={"Adote um animal"} />

        <div className="animalX--header__left-pets">
          <img
            className="animalX--header__left-pets-gato"
            src={Gato}
            alt={"Gato"}
          />
          <img
            className="animalX--header__left-pets-cachorro"
            src={Cachorro}
            alt={"Cachorro"}
          />
        </div>

        <FilterHeader />
      </div>

      <div className="animalX--header__right">
        <div className="animalX--header__right-btns">
          {!user ? (
            <button
              onClick={() => history.push("/entrar")}
              className="animalX--header__right-btns-entrar"
            >
              Entrar
            </button>
          ) : (
            <button
              title={
                location.pathname === "/cadastro-pet"
                  ? "Sair do cadastro de seu amiguinho"
                  : "Cadastro de seu amiguinho"
              }
              onClick={() =>
                location.pathname === "/cadastro-pet"
                  ? history.goBack()
                  : history.push("/cadastro-pet")
              }
              className="animalX--header__right-add"
              style={{
                transform:
                  location.pathname === "/cadastro-pet" ? "rotate(45deg)" : "",
              }}
            >
              <IconAdd />
            </button>
          )}
          {!user ? (
            <button
              onClick={() => history.push("/cadastro")}
              className="animalX--header__right-btns-cadastro"
            >
              Cadastro
            </button>
          ) : (
            <div
              onClick={() => setModalUser(true)}
              className="animalX--header__right-user"
            >
              <img src={user?.img_view} alt="" />
              <IconArrow />
            </div>
          )}
        </div>

        <img src={IlustratorHeader} alt={"Ilustração"} />
      </div>

      <div
        style={{
          opacity: modalUser ? "5" : "0",
          visibility: modalUser ? "visible" : "hidden",
        }}
        className="animalX--modal"
      >
        <div
          style={{
            transform: modalUser ? "scale(1)" : "scale(0.5)",
            opacity: modalUser ? "5" : "0",
            visibility: modalUser ? "visible" : "hidden",
          }}
          ref={modalRef}
          className="animalX--modal-user"
        >
          <div className="animalX--modal-user__infos">
            <img src={user?.img_view} alt="" />
            <p>{user?.nome}</p>
            <h5>{user?.email}</h5>
          </div>
          <div
            onClick={() => {
              history.push("/meus-pets");
              setModalUser(false);
            }}
            className="animalX--modal-user__opt"
          >
            <IconPainel />
            <p>Meus amiguinhos</p>
          </div>
          <div
            onClick={() => {
              if (window.confirm("Tem certeza que quer sair?")) {
                dispatch({
                  type: "SET_USER",
                  user: null,
                });
                setModalUser(false);
              }
            }}
            className="animalX--modal-user__opt"
          >
            <IconSair />
            <p>Sair</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

const IconAdd = ({ ...rest }) => (
  <svg
    {...rest}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 12H16M12 8L12 16"
      stroke="#363853"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);

const IconSair = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M2 6.447C2 3.996 4.03024 2 6.52453 2H11.4856C13.9748 2 16 3.99 16 6.437V17.553C16 20.005 13.9698 22 11.4744 22H6.51537C4.02515 22 2 20.01 2 17.563V16.623V6.447Z"
      fill="#130F26"
    />
    <path
      d="M21.779 11.4548L18.9332 8.5458C18.6391 8.2458 18.1657 8.2458 17.8726 8.5478C17.5804 8.8498 17.5814 9.3368 17.8745 9.6368L19.4338 11.2298H17.9388H9.5485C9.13459 11.2298 8.79858 11.5748 8.79858 11.9998C8.79858 12.4258 9.13459 12.7698 9.5485 12.7698H19.4338L17.8745 14.3628C17.5814 14.6628 17.5804 15.1498 17.8726 15.4518C18.0196 15.6028 18.2115 15.6788 18.4043 15.6788C18.5952 15.6788 18.7871 15.6028 18.9332 15.4538L21.779 12.5458C21.9202 12.4008 22 12.2048 22 11.9998C22 11.7958 21.9202 11.5998 21.779 11.4548Z"
      fill="#130F26"
    />
  </svg>
);

const IconPainel = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M16.0754 2H19.4614C20.8636 2 21.9999 3.14585 21.9999 4.55996V7.97452C21.9999 9.38864 20.8636 10.5345 19.4614 10.5345H16.0754C14.6731 10.5345 13.5369 9.38864 13.5369 7.97452V4.55996C13.5369 3.14585 14.6731 2 16.0754 2Z"
      fill="#130F26"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
      fill="#130F26"
    />
  </svg>
);

const IconArrow = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.8672 7.21433L15.0865 14.0624C15.1805 14.2158 15.1715 14.4122 15.0605 14.5558C14.5594 15.2064 14.0514 15.7877 13.6244 16.1755C13.6244 16.1755 13.2824 16.5096 13.0654 16.6542C12.7693 16.8877 12.3823 17 12.0063 17C11.5843 17 11.1853 16.8769 10.8662 16.6317C10.8092 16.576 10.5582 16.364 10.3532 16.1638C9.07715 14.9954 6.96905 11.9455 6.33002 10.3414C6.22701 10.1079 6.012 9.48466 6 9.16131C6 8.84967 6.068 8.54879 6.21701 8.25962C6.42202 7.90403 6.74004 7.62561 7.11706 7.46931C7.37907 7.36869 8.16511 7.21336 8.18811 7.21336C8.74914 7.11274 9.53718 7.03751 10.4572 7.00039C10.6222 6.99355 10.7822 7.07659 10.8672 7.21433Z"
      fill="#130F26"
    />
    <path
      opacity="0.4"
      d="M13.1397 7.67231C12.9527 7.37044 13.1917 6.99043 13.5507 7.00508C14.3928 7.04123 15.1348 7.10375 15.6869 7.17995C15.6989 7.19167 16.6779 7.347 17.0089 7.52577C17.6239 7.8374 18 8.44895 18 9.1064V9.16111C17.989 9.58509 17.6129 10.4868 17.5899 10.4868C17.4009 10.941 17.0809 11.534 16.6959 12.1719C16.5219 12.4591 16.0949 12.466 15.9179 12.1788L13.1397 7.67231Z"
      fill="#130F26"
    />
  </svg>
);
