import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

//
import api from "../../service/service";

//
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

//
import "../../styles/Details/DetailsPet.css";

//
import WhatsApp from "../../assets/icons/WhatsApp";
//
import { SiFacebook, SiTwitter, SiWhatsapp } from "react-icons/si";

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

function DetailsPet() {
  const { petId } = useParams();
  const [pet, setPet] = useState({});
  const [notPet, setNotPet] = useState(false);
  const [filter, setFilter] = useState([]);
  const history = useHistory();

  const modalRef = useRef();

  const [modalShare, setModalShare] = useState(false);
  useOnClickOutside(modalRef, () => setModalShare(false));

  const fetchPosts = async () => {
    const resp = await api.get("animal/animaisAdocao");
    var filter = resp?.data?.content?.filter((pet) => {
      return pet.id === parseFloat(petId);
    });

    setFilter(filter);

    if (filter?.length > 0) {
      setNotPet(false);
      filter?.map((pet) => {
        setPet(pet);
      });
    } else {
      setNotPet(true);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [pet, petId]);

  useEffect(() => {
    document.title = `Pet ${
      filter.length > 0
        ? pet?.apelido
        : notPet
        ? "Não encontrado"
        : "Carregando..."
    } | Animal X`;
  }, [pet, petId, filter]);

  var map = `https://www.google.com/maps/place/${pet?.cidade} ${pet?.estado}`;

  var urlWEB = `https://animal--x.web.app/pet/${pet?.id}`;

  var facebook = `https://www.facebook.com/sharer/sharer.php?u=${urlWEB}`;
  var whatsapp = `https://api.whatsapp.com/send?text=Ola vim do *Animal X* (${urlWEB}), eu encontrei um _${pet?.especie}_ chamado *${pet?.apelido}*`;
  var twitter = `https://twitter.com/intent/tweet?url=${urlWEB}&text=Ola vim do Animal X, eu encontrei um ${pet?.especie} chamado ${pet?.apelido}`;

  return filter.length > 0 ? (
    <div className="app-details-pet">
      <div
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
      </div>

      <div className="app-details-pet__right">
        <section
          onClick={() => {
            history.push("/");
            document.title = "Animal X";
          }}
        >
          <IconLeft />
          <p>Voltar</p>
        </section>

        <AwesomeSlider>
          {pet?.fotos?.map((ft) => (
            <div>
              <img
                alt={ft.nome}
                src={`https://photoanimalx.s3.us-east-2.amazonaws.com/${ft.nome}`}
              />
            </div>
          ))}
        </AwesomeSlider>
      </div>

      <div className="app-details-pet__left">
        <p>{pet?.apelido}</p>

        <div className="app-details-pet__left-infos">
          <div>
            <h5>{pet?.sexo}</h5>
            <p>Sexo</p>
          </div>
          <div>
            <h5>{pet?.idade}</h5>
            <p>Idade</p>
          </div>
          <div>
            <h5>{pet?.peso}kg</h5>
            <p>Peso</p>
          </div>
        </div>

        <div className="app-details-pet__left-itens">
          <div>
            <IconCategoria />
            <p>{pet?.raca}</p>
          </div>
          <div>
            <IconLocal />
            <p>
              {pet?.usuario?.cidade} {pet?.usuario?.estado}
            </p>
          </div>
          <div>
            <IconTelefone />
            <p>{pet?.usuario?.whatsapp}</p>
          </div>
          <div>
            <IconUser />
            <p>
              Altura:{" "}
              <strong>
                {pet?.altura
                  ? pet?.altura
                  : pet?.alura
                  ? pet?.alura
                  : "Informação não encontrada"}{" "}
                cm
              </strong>
            </p>
          </div>
        </div>

        <div
          style={{
            marginLeft: "-6px",
          }}
          className="animalX--card__pet-content-infos__tamanho"
        >
          {["P", "M", "G"].map((item, i) => (
            <div
              key={i}
              style={{
                border: item === pet?.tamanho ? "2px solid #F7B803" : "",
                color: item === pet?.tamanho ? "#F7B803" : "",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="app-details-pet__left-user">
          <img
            src={
               pet?.usuario?.img_login
                ? `https://photoanimalx.s3.us-east-2.amazonaws.com/${pet?.usuario?.img_login}` 
                : "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1594805258216454~c5_720x720.jpeg?x-expires=1623351600&x-signature=vLqvlvO%2B73%2F3ou%2BMZLqeCTsanD0%3D"
            }
            alt=""
          />
          <div>
            <p>{pet?.usuario?.nome}</p>
            <h5>{pet?.usuario?.email}</h5>
          </div>
        </div>

        <div className="app-details-pet__left-descricao">
          <p>{pet?.descricao}</p>
        </div>

        <div className="app-details-pet__left-bottom">
          <a
            href={`https://api.whatsapp.com/send?phone=${pet?.usuario?.whatsapp}&text=Ola vim do *Animal X* (${urlWEB}), eu encontrei um _${pet?.especie}_ chamado *${pet?.apelido}* e eu queria adotar ele, Poderia me ajudar?`}
            target="_blanck"
          >
            <WhatsApp />
          </a>

          <Location
            onClick={() => window.open(map)}
            style={{ marginLeft: "15px", marginRight: "10px" }}
          />
          <Share
            onClick={() => setModalShare(true)}
            style={{ marginLeft: "18px" }}
          />
        </div>
      </div>
    </div>
  ) : notPet ? (
    <p
      style={{
        fontSize: "25px",
        margin: "210px auto",
        fontWeight: "600",
        textAlign: "center",
        color: "#33353d",
      }}
    >
      <h5
        style={{
          fontSize: "80px",
          fontWeight: "600",
          textAlign: "center",
          color: "#f7b803",
        }}
      >
        404
      </h5>
      Pet não encontrado
    </p>
  ) : (
    <div style={{ margin: "210px auto" }} className="lds-ellipsis"></div>
  );
}

export default DetailsPet;

const IconLocal = () => (
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
      d="M8.53162 2.93677C10.7165 1.66727 13.402 1.68946 15.5664 2.99489C17.7095 4.32691 19.012 6.70418 18.9998 9.26144C18.95 11.8019 17.5533 14.19 15.8075 16.0361C14.7998 17.1064 13.6726 18.0528 12.4488 18.856C12.3228 18.9289 12.1848 18.9777 12.0415 19C11.9036 18.9941 11.7693 18.9534 11.6508 18.8814C9.78243 17.6746 8.14334 16.134 6.81233 14.334C5.69859 12.8314 5.06584 11.016 5 9.13442C4.99856 6.57225 6.34677 4.20627 8.53162 2.93677ZM9.79416 10.1948C10.1617 11.1008 11.0292 11.6918 11.9916 11.6918C12.6221 11.6964 13.2282 11.4438 13.6748 10.9905C14.1214 10.5371 14.3715 9.92064 14.3692 9.27838C14.3726 8.29804 13.7955 7.41231 12.9073 7.03477C12.0191 6.65723 10.995 6.86235 10.3133 7.55435C9.63159 8.24635 9.42664 9.28872 9.79416 10.1948Z"
      fill="#130F26"
    />
    <ellipse opacity="0.4" cx="12" cy="21" rx="5" ry="1" fill="#130F26" />
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

const IconUser = () => (
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
    />
    <path
      opacity="0.4"
      d="M11.9967 12.5837C14.9347 12.5837 17.2887 10.2287 17.2887 7.2917C17.2887 4.3547 14.9347 1.9997 11.9967 1.9997C9.05971 1.9997 6.70471 4.3547 6.70471 7.2917C6.70471 10.2287 9.05971 12.5837 11.9967 12.5837Z"
      fill="#130F26"
    />
  </svg>
);

const IconTamanho = ({ ...rest }) => (
  <svg
    {...rest}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.1528 5.55553C10.2037 5.65919 10.2373 5.77021 10.2524 5.88434L10.5308 10.0243L10.669 12.1051C10.6705 12.3191 10.704 12.5317 10.7687 12.736C10.9356 13.1326 11.3372 13.3846 11.7741 13.367L18.4313 12.9315C18.7196 12.9268 18.998 13.0346 19.2052 13.2313C19.3779 13.3952 19.4894 13.6096 19.5246 13.8402L19.5364 13.9802C19.2609 17.7949 16.4592 20.9767 12.6524 21.798C8.84555 22.6193 4.94186 20.8843 3.06071 17.5349C2.51839 16.5618 2.17965 15.4923 2.06438 14.389C2.01623 14.0624 1.99503 13.7325 2.00098 13.4025C1.99503 9.31273 4.90747 5.77696 8.98433 4.92457C9.47501 4.84816 9.95603 5.10792 10.1528 5.55553Z"
      fill="#130F26"
    />
    <path
      opacity="0.4"
      d="M12.8701 2.00082C17.43 2.11683 21.2624 5.39579 22.0001 9.81229L21.993 9.84488L21.9729 9.89227L21.9757 10.0224C21.9652 10.1947 21.8987 10.3605 21.784 10.4945C21.6646 10.634 21.5014 10.729 21.3217 10.7659L21.2121 10.7809L13.5313 11.2786C13.2758 11.3038 13.0214 11.2214 12.8314 11.052C12.6731 10.9107 12.5719 10.7201 12.5433 10.5147L12.0277 2.84506C12.0188 2.81913 12.0188 2.79102 12.0277 2.76508C12.0348 2.55367 12.1278 2.35384 12.2861 2.21023C12.4444 2.06662 12.6547 1.9912 12.8701 2.00082Z"
      fill="#130F26"
    />
  </svg>
);

const IconTelefone = ({ ...rest }) => (
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

const IconCategoria = ({ ...rest }) => (
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

const IconLeft = ({ ...rest }) => (
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
      d="M20.2891 12.6592L11.8111 12.6592C11.4189 12.6592 11.1006 12.3409 11.1006 11.9487C11.1006 11.5565 11.4189 11.2382 11.8111 11.2382L20.2891 11.2382C20.6813 11.2382 20.9996 11.5565 20.9996 11.9487C20.9996 12.3409 20.6813 12.6592 20.2891 12.6592Z"
      fill="#130F26"
    />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="3"
      y="6"
      width="10"
      height="12"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.5215 6.50023L12.5215 17.3966H3.58202L3.58202 6.50023L12.5215 6.50023Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0)">
      <path
        d="M11.811 17.3969C11.6783 17.3969 11.5476 17.36 11.432 17.288L3.9137 12.5502C3.70717 12.4194 3.58117 12.193 3.58117 11.9486C3.58117 11.7042 3.70717 11.4778 3.9137 11.347L11.432 6.60923C11.6509 6.47186 11.9275 6.46334 12.1539 6.58934C12.3813 6.71439 12.5215 6.95218 12.5215 7.21081L12.5215 16.6864C12.5215 16.945 12.3813 17.1828 12.1539 17.3079C12.0469 17.3675 11.9284 17.3969 11.811 17.3969Z"
        fill="#130F26"
      />
    </g>
  </svg>
);
