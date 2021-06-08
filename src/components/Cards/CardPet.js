import React, { useEffect, useRef, useState } from "react";

//
import { SiFacebook, SiTwitter, SiWhatsapp } from "react-icons/si";
import { useHistory, useLocation } from "react-router-dom";

//
import WhatsApp from "../../assets/icons/WhatsApp";

//
import "../../styles/Modal/Modal.css";

const Feminino = () => (
  <svg
    width="10"
    height="18"
    viewBox="0 0 10 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.42858 9.31201C8.49376 8.72743 10 6.90876 10 4.75473C10 2.1286 7.76159 0 4.99998 0C2.23837 0 0 2.1286 0 4.75473C0 6.9088 1.50624 8.72747 3.57142 9.31205V12.5661H0.714259V15.283H3.57142V18H6.42858V15.283H9.28574V12.566H6.42858V9.31201ZM4.99998 6.79246C3.81651 6.79246 2.85712 5.88014 2.85712 4.75473C2.85712 3.62932 3.81651 2.71699 4.99998 2.71699C6.18345 2.71699 7.14284 3.62932 7.14284 4.75473C7.14284 5.88014 6.18349 6.79246 4.99998 6.79246Z"
      fill="#FE929F"
      fill-opacity="0.8"
    />
  </svg>
);

const Masculino = () => (
  <svg
    width="9"
    height="17"
    viewBox="0 0 9 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.7857 8.20655V4.48991L6.09589 4.79941C6.81145 5.51338 8.03572 5.00747 8.03572 3.99765C8.03572 3.8469 8.006 3.6998 7.94935 3.56349C7.82915 3.27428 7.95959 3.45186 4.50004 0L1.297 3.19589C1.08406 3.40834 0.964321 3.69661 0.964321 3.99765C0.964321 5.00657 2.1876 5.51435 2.90415 4.79941L3.21434 4.48991V8.20655C1.35561 8.75857 0 10.476 0 12.51C0 14.9899 2.01456 17 4.5 17C6.98544 17 9 14.9899 9 12.51C8.99996 10.476 7.64435 8.75857 5.7857 8.20655ZM4.5 14.4343C3.43488 14.4343 2.57143 13.5728 2.57143 12.51C2.57143 11.4473 3.43488 10.5858 4.5 10.5858C5.56512 10.5858 6.42857 11.4473 6.42857 12.51C6.42857 13.5728 5.56512 14.4343 4.5 14.4343Z"
      fill="#99D4FF"
    />
  </svg>
);

const Location = ({ ...res }) => (
  <svg
    {...res}
    width="22"
    height="26"
    viewBox="0 0 22 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 10.6908C0 4.77862 4.94055 0 10.9166 0C16.9096 0 21.8501 4.77862 21.8501 10.6908C21.8501 13.6701 20.7666 16.436 18.9833 18.7803C17.0159 21.3662 14.591 23.6193 11.8615 25.3878C11.2368 25.7966 10.673 25.8274 9.98738 25.3878C7.24234 23.6193 4.81743 21.3662 2.86687 18.7803C1.0822 16.436 0 13.6701 0 10.6908ZM7.31877 11.0236C7.31877 13.0042 8.93495 14.5619 10.9166 14.5619C12.8996 14.5619 14.5313 13.0042 14.5313 11.0236C14.5313 9.05842 12.8996 7.42485 10.9166 7.42485C8.93495 7.42485 7.31877 9.05842 7.31877 11.0236Z"
      fill="#424960"
    />
  </svg>
);

const Share = ({ ...res }) => (
  <svg
    {...res}
    width="30"
    height="31"
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.4834 19.2297C22.7317 19.2297 21.1867 20.0643 20.1772 21.3422L10.8143 16.554C10.9369 16.0969 11.025 15.6245 11.025 15.1274C11.025 14.5862 10.9204 14.0767 10.7743 13.5809L20.0959 8.81482C21.0998 10.1506 22.6849 11.0237 24.4847 11.0237C27.5336 11.0237 30 8.55735 30 5.51118C30.0001 2.46777 27.5336 0 24.4848 0C21.4428 0 18.9737 2.46777 18.9737 5.51112C18.9737 6.00965 19.0618 6.48335 19.1858 6.94192L9.8242 11.7301C8.81341 10.4508 7.26553 9.61353 5.51112 9.61353C2.46496 9.61353 0 12.0826 0 15.1274C0 18.1722 2.46502 20.6399 5.51112 20.6399C7.31373 20.6399 8.89743 19.7641 9.90541 18.4269L19.2228 23.193C19.0768 23.6874 18.9709 24.2011 18.9709 24.7437C18.9709 27.7884 21.44 30.2562 24.482 30.2562C27.5309 30.2562 29.9973 27.7884 29.9973 24.7437C29.9987 21.6962 27.5323 19.2297 24.4834 19.2297Z"
      fill="#424960"
    />
  </svg>
);

const BackLeft = ({ ...res }) => (
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
      d="M4.25 12.2744L19.25 12.2744"
      stroke="#130F26"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
      stroke="#130F26"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

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

function CardPet(props) {
  const modalRef = useRef();
  const history = useHistory();

  const [modalShare, setModalShare] = useState(false);
  useOnClickOutside(modalRef, () => setModalShare(false));

  var map = `https://www.google.com/maps/place/${props.cidade} ${props.estado}`;

  var urlWEB = `https://animal--x.web.app/pet/${props.id}`;

  var facebook = `https://www.facebook.com/sharer/sharer.php?u=${urlWEB}`;
  var whatsapp = `https://api.whatsapp.com/send?text=Ola vim do *Animal X* (${urlWEB}), eu encontrei um _${props.especie}_ chamado *${props.apelido}*`;
  var twitter = `https://twitter.com/intent/tweet?url=${urlWEB}&text=Ola vim do Animal X, eu encontrei um ${props.especie} chamado ${props.apelido}`;

  const updateSituacao = (situacaoUpdate) => {
    // HANDLE UPDATE SITUAÇÃO // situacaoUpdate
  };

  const BottomSituacao = () => (
    <div className="animalX--card__situacao">
      <button
        style={{
          color: props.situacao === "Adotado" ? "#fff" : "",
          background:
            props.situacao === "Adotado"
              ? "linear-gradient(90deg, rgba(239, 154, 19, 0.23) 32.71%, rgba(255, 255, 255, 0.71) 100%), #EF9A13"
              : "",
        }}
        onClick={() => updateSituacao("Adotado")}
      >
        Adotado
      </button>
      <button
        style={{
          color: props.situacao === "Disponivel" ? "#fff" : "",
          background:
            props.situacao === "Disponivel"
              ? "linear-gradient(90deg, rgba(239, 154, 19, 0.23) 32.71%, rgba(255, 255, 255, 0.71) 100%), #EF9A13"
              : "",
        }}
        onClick={() => updateSituacao("Disponivel")}
      >
        Disponivel
      </button>
    </div>
  );

  return (
    <div>
      <di
        style={{
          opacity: modalShare ? "5" : "0",
          visibility: modalShare ? "visible" : "hidden",
        }}
        className="animalX--modal"
      >
        <div
          style={{
            transform: modalShare ? "scale(1)" : "scale(0.5)",
            opacity: modalShare ? "5" : "0",
            visibility: modalShare ? "visible" : "hidden",
          }}
          ref={modalRef}
          className="animalX--modal-share"
        >
          <div className="animalX--modal-share__header">
            <BackLeft onClick={() => setModalShare(false)} />

            <p>Compartilhar para...</p>
          </div>

          <div className="animalX--modal-share__content">
            <div onClick={() => window.open(facebook)}>
              <SiFacebook />

              <p>Compartilhar no Facebook</p>
            </div>
            <div onClick={() => window.open(twitter)}>
              <SiTwitter />

              <p>Compartilhar no Twitter</p>
            </div>
            <div onClick={() => window.open(whatsapp)}>
              <SiWhatsapp />

              <p>Compartilhar no Whatsapp</p>
            </div>
          </div>
        </div>
      </di>

      <div className="animalX--card__pet">
        <div
          onClick={() => history.push(`/pet/${props.id}`)}
          className="animalX--card__pet-image"
        >
          <img src={props.image} alt="" />
        </div>

        <div className="animalX--card__pet-content">
          <div className="animalX--card__pet-content-name">
            {props.sexo === "Feminino" ? <Feminino /> : <Masculino />}

            <p>{props.apelido}</p>
          </div>

          <p className="animalX--card__pet-content-location">
            {props.cidade} {props.estado}
          </p>

          <div className="animalX--card__pet-content-infos">
            <div className="animalX--card__pet-content-infos__tamanho">
              {["P", "M", "G"].map((item, i) => (
                <div
                  key={i}
                  style={{
                    border: item === props.tamanho ? "2px solid #F7B803" : "",
                    color: item === props.tamanho ? "#F7B803" : "",
                  }}
                >
                  {item}
                </div>
              ))}

              <Location
                onClick={() => window.open(map)}
                style={{ marginLeft: "10px" }}
              />
              <Share
                onClick={() => setModalShare(true)}
                style={{ marginLeft: "15px" }}
              />
            </div>

            {!props?.meus ? (
              <div className="animalX--card__pet-content-infos__description">
                <p>{props.descricao}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {!props?.meus ? (
          <a
            href={`https://api.whatsapp.com/send?phone=${props.whatsapp}&text=Ola vim do *Animal X* (${urlWEB}), eu encontrei um _${props.especie}_ chamado *${props.apelido}* e eu queria adotar ele, Poderia me ajudar?`}
            className="animalX--card__pet-whatsapp"
            target="_blanck"
          >
            <WhatsApp />
          </a>
        ) : (
          <BottomSituacao />
        )}

        {!props?.meus ? (
          <div className="animalX--card__ilustrator">
            <svg
              width="62"
              height="51"
              viewBox="0 0 62 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5453 23.1129C18.0412 22.6798 16.5371 22.4601 15.074 22.4601C12.8147 22.4601 10.9294 22.9764 9.46763 23.6087C10.8769 18.4494 14.2624 9.54725 21.0065 8.54473C21.631 8.45185 22.1428 8.00024 22.3132 7.39233L23.7872 2.12033C23.9115 1.67448 23.8378 1.19725 23.5835 0.810337C23.3292 0.423425 22.9205 0.16527 22.4625 0.102493C21.9648 0.0345914 21.4574 0 20.9546 0C12.8595 0 4.84263 8.44928 1.45971 20.5473C-0.526098 27.645 -1.10839 38.3158 3.7831 45.0323C6.52031 48.7906 10.5137 50.7976 15.6525 50.9981C15.6736 50.9987 15.6941 50.9994 15.7152 50.9994C22.0557 50.9994 27.6781 46.7292 29.3885 40.6161C30.4102 36.9616 29.9483 33.129 28.0868 29.8217C26.2451 26.5515 23.212 24.1679 19.5453 23.1129Z"
                fill="#C2EBFF"
                fill-opacity="0.3"
              />
              <path
                d="M59.2353 29.8223C57.3936 26.5515 54.3605 24.1679 50.6938 23.1129C49.1897 22.6798 47.6856 22.4601 46.2231 22.4601C43.9638 22.4601 42.0779 22.9764 40.6161 23.6087C42.0254 18.4494 45.4109 9.54725 52.1556 8.54473C52.7801 8.45185 53.2913 8.00024 53.4624 7.39233L54.9363 2.12033C55.0606 1.67448 54.9869 1.19725 54.7326 0.810337C54.479 0.423425 54.0703 0.16527 53.6116 0.102493C53.1145 0.0345914 52.6072 0 52.1037 0C44.0086 0 35.9917 8.44928 32.6082 20.5473C30.623 27.645 30.0407 38.3158 34.9329 45.0336C37.6694 48.7913 41.6635 50.7989 46.8016 50.9987C46.8227 50.9994 46.8432 51 46.865 51C53.2048 51 58.8279 46.7299 60.5382 40.6168C61.5587 36.9623 61.0962 33.129 59.2353 29.8223Z"
                fill="#C2EBFF"
                fill-opacity="0.3"
              />
            </svg>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CardPet;
