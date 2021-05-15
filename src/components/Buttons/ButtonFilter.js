import React, { useState } from "react";

//
import Arrow from "../../assets/images/icons/Arrow";

function ButtonFilter(props) {
  const [arrow, setArrow] = useState(false);

  return !arrow ? (
    <div onClick={() => setArrow(true)} className="animalX--buttonFilter">
      <p>{props.name}</p>
      <Arrow
        style={{ transform: "rotate(360deg)", transition: "all 0.2s ease" }}
      />
    </div>
  ) : (
    <div
      onClick={() => setArrow(false)}
      className="animalX--buttonFilter"
      style={{ opacity: "0.9" }}
    >
      <p>{props.name}</p>
      <Arrow
        style={{ transform: "rotate(180deg)", transition: "all 0.2s ease" }}
      />

      <div
        onClick={() => setArrow(false)}
        className="animalX--buttonFilter-active"
      >
        {props.items.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default ButtonFilter;
