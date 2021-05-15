import React from "react";

//
import "../../styles/Header/header.css";

//
import Pata from "../../assets/images/Complements/IlustratorPata.svg";
import AdoteImage from "../../assets/images/Banner/AdoteAnimal.svg";
import IlustratorHeader from "../../assets/images/Banner/IlustratorHeader.svg";
import Gato from "../../assets/images/animals/gato.svg";
import Cachorro from "../../assets/images/animals/cachorro.svg";

//
import FilterHeader from "../../components/Filter/FilterHeader";

function Header() {
  return (
    <div className="animalX--header">
      <div className="animalX--header__pata">
        <img src={Pata} alt="Pata" />
      </div>

      <div className="animalX--header__left">
        <img src={AdoteImage} alt={"Adote um animal"} />

        <div className="animalX--header__left-pets">
          <img src={Gato} alt={"Gato"} />
          <img className="animalX--header__left-pets-cachorro" src={Cachorro} alt={"Cachorro"} />
        </div>

        <FilterHeader />
      </div>

      <div className="animalX--header__right">
        <div className="animalX--header__right-btns">
          <button className="animalX--header__right-btns-entrar">Entrar</button>
          <button className="animalX--header__right-btns-cadastro">
            Cadastro
          </button>
        </div>

        <img src={IlustratorHeader} alt={"Ilustração"} />
      </div>
    </div>
  );
}

export default Header;
