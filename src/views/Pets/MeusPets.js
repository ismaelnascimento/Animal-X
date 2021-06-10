import React, { useEffect, useState } from "react";

//
import "../../styles/Pets/MeusPets.css";

//
import CardPet from "../../components/Cards/CardPet";
import api from '../../service/service';
function MeusPets() {
  const [meusPets, setMeusPets] = useState([]);

  async function data() {
    var config = { headers: { Authorization: "bearer " + localStorage.getItem('TOKEN') } };   
    const resp = await api.get(`animal/animaisUsuario/${localStorage.getItem('ID_USUARIO_LOGADO')}`,config); 
    setMeusPets(resp.data.content);
    console.log(resp);
  }
  
  useEffect(() => {
    data();
    document.title = "Meus amiguinhos | Animal X";
  }, []);

  return (
    <div className="app-cadastro-pet">
      <div className="app-cadastro-pet__back">
        <div></div>
      </div>

      <div className="app-cadastro-pet__content">
        <p>AMIGUINHOS QUE COLOQUEI PARA ADOÇÃO</p>

        <div className="app-meus-pets__items">
          {meusPets?.map((pet, i) => (
            <CardPet
              meus={true}
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
              altura={pet.alura}
              usuario={pet.usuario.id}
              unidadetempo={pet.unidadetempo}
              id={pet.id}

              
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeusPets;
