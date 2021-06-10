import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//
import Arrow from "../../assets/icons/Arrow";

//
import { useStateValue } from "../../providers/StateProvider";

function ButtonFilter(props) {
  const history = useHistory();
  const [arrow, setArrow] = useState(false);
  const [{}, dispatch] = useStateValue();

  return !arrow ? (
    <div
      onClick={() => setArrow(true)}
      style={{ borderRight: props.borderRight }}
      className="animalX--buttonFilter"
    >
      <p>{props.name}</p>
      <Arrow
        style={{ transform: "rotate(360deg)", transition: "all 0.2s ease" }}
      />
    </div>
  ) : (
    <div
      onClick={() => setArrow(false)}
      className="animalX--buttonFilter"
      style={{ borderRight: props.borderRight }}
    >
      <p>{props.name}</p>
      <Arrow
        style={{ transform: "rotate(180deg)", transition: "all 0.2s ease" }}
      />

      <div
        onClick={() => setArrow(false)}
        style={{ left: props.name === "Localização" ? "-100px" : "" }}
        className="animalX--buttonFilter-active"
      >
        {props.items.map((item, i) => (
          <p
            onClick={() => {
              dispatch({
                type: "SET_FILTER",
                filter: {
                  state: item,
                  type: props.name,
                },
              });
              history.push("/");
              document.title = "Animal X";
            }}
            key={i}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ButtonFilter;
