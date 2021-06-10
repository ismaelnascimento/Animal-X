import React, { useEffect, useMemo, useRef, useState } from "react";

//
import "../../styles/Filter/FilterHeader.css";

import { useStateValue } from "../../providers/StateProvider";

//
import ButtonFilter from "../Buttons/ButtonFilter";
import Search from "../../assets/icons/Search";
import { useHistory } from "react-router-dom";

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

function FilterHeader() {
  const history = useHistory();

  const [{ activeCategory }, dispatch] = useStateValue();
  const [{}, dispatchSearch] = useStateValue();
  const [modalSearch, setModalSearch] = useState(false);
  const [search, setSearch] = useState("");

  const modalRef = useRef();

  useOnClickOutside(modalRef, () => setModalSearch(false));

  const [categorys, setCategorys] = useState([
    "Gatos",
    "Cachorros",
    "Outros",
  ]);

  const searchSubmit = (e) => {
    dispatchSearch({
      type: "SET_SEARCH_PETS",
      searchPets: search,
    });

    window.scrollTo({ top: 405 });
    setSearch("");
    setModalSearch(false);
    history.push("/");
    document.title = "Animal X";
  };

  return (
    <div className="animalX--filter">
      {modalSearch ? (
        <div className="animalX--modal">
          <div ref={modalRef} className="animalX--modal-search">
            <form onSubmit={(e) => searchSubmit(e)}>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Pesquisar pets..."
              />

              <button type="submit">
                <Search />
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="animalX--filter__categorys">
        {categorys.map((category, i) => (
          <button
            key={i}
            style={{
              background: activeCategory === category ? "#99D4FF" : "#B4BACB",
              fontWeight: activeCategory === category ? "500" : "400",
            }}
            onClick={() => {
              dispatch({
                type: "SET_ACTIVE_CATEGORY",
                activeCategory: category,
              });
              dispatchSearch({
                type: "SET_SEARCH_PETS",
                searchPets: "",
              });
              dispatch({
                type: "SET_FILTER",
                filter: "",
              });
              history.push("/");
              document.title = "Animal X";
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
            borderRight={""}
          />
          <ButtonFilter
            name={"Idade"}
            borderRight={""}
            items={["5 anos", "2 anos", "3 meses"]}
          />
          <ButtonFilter
            name={"Localização"}
            borderRight={"1px solid rgba(0, 0, 0, 0)"}
            items={["Fortaleza CE", "Pacajus CE", "Horizonte CE"]}
          />
        </div>

        <div
          onClick={() => setModalSearch(true)}
          className="animalX--filter__types-search"
        >
          <Search />

          <p>Me encontre</p>
        </div>
      </div>
    </div>
  );
}

export default FilterHeader;
