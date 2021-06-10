import React, { useEffect, useMemo, useState } from "react";

import "../../styles/Content/content.css";

//
import Pata from "../../assets/images/Complements/PataBottom.svg";
import CardPet from "../../components/Cards/CardPet";

//
import { useStateValue } from "../../providers/StateProvider";
import api from "../../service/service";

const More = () => (
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

function Content() {
  const [{ pets }] = useStateValue();
  const [{ activeCategory }] = useStateValue();
  const [{ searchPets }, dispatchSearch] = useStateValue();
  const [getPets, setGetPets] = useState();
  const [{ filter }] = useStateValue();
  const [notPets, setNotPets] = useState(false);

  async function data() {
    const resp = await api.get("animal/animaisAdocao?pageSize=1000");
    setNotPets(false);
    setGetPets(resp.data.content);
  }

  useEffect(() => {
    data();
  });

  const filterPets = useMemo(() => {
    if (searchPets === "" && filter === "") {
      return getPets?.filter((pet) => {
        return (
          retira_acentos(pet?.categoria) === retira_acentos(activeCategory)
        );
      });
    } else if (searchPets !== "") {
      return getPets?.filter((pet) => {
        return retira_acentos(pet?.apelido)?.includes(
          retira_acentos(searchPets)
        );
      });
    } else if (filter !== "") {
      if (filter?.type === "Raça") {
        return getPets?.filter((pet) => {
          return retira_acentos(pet?.raca).includes(
            retira_acentos(filter?.state)
          );
        });
      } else if (filter?.type === "Localização") {
        return getPets?.filter((pet) => {
          var local = `${pet.usuario.cidade} ${pet.usuario.estado}`;

          return retira_acentos(local)?.includes(retira_acentos(filter?.state));
        });
      } else {
        return getPets?.filter((pet) => {
          return retira_acentos(pet?.idade) === filter?.state;
        });
      }
    }
  }, [activeCategory, getPets, searchPets, filter]);

  useEffect(() => {
    if (filterPets?.length !== 0) {
      setNotPets(false);
    } else {
      setNotPets(true);
    }
  }, [filterPets, pets, notPets]);

  return (
    <div style={{ position: "relative" }}>
      <div className="animalX--content">
        {filterPets?.length > 0 ? (
          filterPets?.map((pet, i) => (
            <CardPet
              key={i}
              id={pet.id}
              image={
                pet.fotos.length == 0
                  ? null
                  : `https://photoanimalx.s3.us-east-2.amazonaws.com/${pet.fotos[0].nome}`
              }
              apelido={pet.apelido}
              cidade={pet.usuario.cidade}
              idade={pet.idade}
              estado={pet.usuario.estado}
              descricao={pet.descricao}
              whatsapp={pet.usuario.whatsapp}
              tamanho={pet.tamanho}
              sexo={pet.sexo}
              categoria={pet.categoria}
              raca={pet.raca}
              situacao={pet.situacao}
              especie={pet.especie}
              peso={pet.peso}
            />
          ))
        ) : notPets ? (
          <div className="animalX--notPets">
            <More />
            <p>Nenhum pet encontrado.</p>
          </div>
        ) : (
          <div className="lds-ellipsis"></div>
        )}
      </div>
      <img
        className="animalX--content__pata"
        src={Pata}
        alt="Pata ilustrator"
      />
    </div>
  );
}

export default Content;

const retira_acentos = (str) => {
  var com_acento = `ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐ
  ÑÒÓÔÕÖØÙÚÛÜ
  ÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ`;

  var sem_acento = `AAAAAAACEEEEIIIIDN
  OOOOOOUUUUYRsBaaa
  aaaaceeeeiiiionoooooouuuuybyr`;

  var novastr = "";
  for (var i = 0; i < str.length; i++) {
    var troca = false;
    for (var a = 0; a < com_acento.length; a++) {
      if (str.substr(i, 1) == com_acento.substr(a, 1)) {
        novastr += sem_acento.substr(a, 1);
        troca = true;
        break;
      }
    }
    if (troca == false) {
      novastr += str.substr(i, 1);
    }
  }
  return novastr.toLocaleLowerCase();
};
