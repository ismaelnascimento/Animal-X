import React from "react";

import "../../styles/Content/content.css";

//
import Pata from "../../assets/images/Complements/PataBottom.svg";
import CardPet from "../../components/Cards/CardPet";

//
import { useStateValue } from "../../providers/StateProvider";

function Content() {
  const [{ pets }] = useStateValue();

  return (
    <div className="animalX--content">
      {pets?.map((pet, i) => (
        <CardPet
          key={i}
          id={pet.id}
          image={pet.image}
          apelido={pet.apelido}
          cidade={pet.cidade}
          idade={pet.idade}
          estado={pet.estado}
          descricao={pet.descricao}
          whatsapp={pet.whatsapp}
          tamanho={pet.tamanho}
          sexo={pet.sexo}
          categoria={pet.categoria}
          raca={pet.raca}
          situacao={pet.situacao}
          especie={pet.especie}
          peso={pet.peso}
        />
      ))}

      <img
        className="animalX--content__pata"
        src={Pata}
        alt="Pata ilustrator"
      />
    </div>
  );
}

export default Content;
