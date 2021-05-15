import React, { useState } from "react";

//
import "../../styles/Filter/FilterHeader.css";

import { useStateValue } from "../../providers/StateProvider";

//
import ButtonFilter from "../Buttons/ButtonFilter";
import Search from "../../assets/images/icons/Search";

function FilterHeader() {
  const [{ activeCategory }, dispatch] = useStateValue();
  const [categorys, setCategorys] = useState([
    "Gatos",
    "Cachorros",
    "Outros Pets",
  ]);

  return (
    <div className="animalX--filter">
      <div className="animalX--filter__categorys">
        {categorys.map((category) => (
          <button
            style={{
              background: activeCategory === category ? "#99D4FF" : "#B4BACB",
              fontWeight: activeCategory === category ? "500" : "400",
            }}
            onClick={() => {
              dispatch({
                type: "SET_ACTIVE_CATEGORY",
                activeCategory: category,
              });
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="animalX--filter__types">
        <div className="animalX--filter__types-filters">
          <ButtonFilter
            name={"Raça"}
            items={[
              "Buldogue",
              "Pastor-alemão",
              "Siamês",
              "Gato manês",
              "Vira-lata",
            ]}
          />
          <ButtonFilter
            name={"Idade"}
            items={["5 anos", "2 anos", "3 meses"]}
          />
          <ButtonFilter
            name={"Localização"}
            items={["Ceará, Brasil", "São Paulo, Brasil"]}
          />
        </div>

        <div className="animalX--filter__types-search">
          <Search />

          <p>Me encontre</p>
        </div>
      </div>
    </div>
  );
}

export default FilterHeader;
