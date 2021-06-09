import React, { useState } from "react";

//
import "../../styles/Relatorios.css";

function Relatorio() {
  const [usersCadastrados, setUsersCadastrados] = useState([]);
  const [petsCadastrados, setPetsCadastrados] = useState([]);
  const [usersAdotados, setUsersAdotados] = useState([]);

  return (
    <div className="app-relatorio">
      <p>Relatorios</p>

      <div className="app-relatorio__infos">
        <p>Usuários cadastrados</p>
        <h5>{usersCadastrados?.length}</h5>
      </div>

      <div className="app-relatorio__infos">
        <p>Pets cadastrados</p>
        <h5>{petsCadastrados?.length}</h5>
      </div>

      <div className="app-relatorio__infos">
        <p>Pets adotados</p>
        <h5>{usersAdotados?.length}</h5>
      </div>
    </div>
  );
}

export default Relatorio;
