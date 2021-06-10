import React, { useState,useEffect } from "react";

//
import "../../styles/Relatorios.css";
import api from "../../service/service";

function Relatorio() {
  const [usersCadastrados, setUsersCadastrados] = useState(0);
  const [petsCadastrados, setPetsCadastrados] = useState(0);
  const [usersAdotados, setUsersAdotados] = useState(0);

  const getRelatorio = async () => {
    var config = {
      headers: { Authorization: "bearer " + localStorage.getItem("TOKEN") },
    };
    let resp = await api.get( `usuario/relatorio/`,config);
     
    setUsersCadastrados(resp.data.qtdUsuariosCadastrados);
    setPetsCadastrados(resp.data.qtdAnimaisCadastrados);
    setUsersAdotados(resp.data.qtdAnimaisAdotados);
  };

  useEffect(()=>{
    getRelatorio();
  },[])
  return (
    <div className="app-relatorio">
      <p>Relatorios</p>

      <div className="app-relatorio__infos">
        <p>Usuários cadastrados</p>
        <h5>{usersCadastrados}</h5>
      </div>

      <div className="app-relatorio__infos">
        <p>Pets cadastrados</p>
        <h5>{petsCadastrados}</h5>
      </div>

      <div className="app-relatorio__infos">
        <p>Pets adotados</p>
        <h5>{usersAdotados}</h5>
      </div>
    </div>
  );
}

export default Relatorio;
