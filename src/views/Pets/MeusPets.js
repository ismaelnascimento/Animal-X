import React, { useEffect, useState } from "react";

//
import "../../styles/Pets/MeusPets.css";

//
import CardPet from "../../components/Cards/CardPet";

function MeusPets() {
  const [meusPets, setMeusPets] = useState([
    {
      id: 1,
      apelido: "Poliana",
      especie: "Gato",
      raca: "Siamês",
      descricao: "Gatinha tranquila, já cadastrada e tem 1 ano e meio",
      peso: 200,
      alura: 20,
      tamanho: "P",
      categoria: "Gatos",
      idade: 3,
      situacao: "Adotado",
      status: null,
      sexo: "Feminino",
      usuario: {
        id: 4,
        nome: "Jonas Silva Vera",
        img_login:
          "1622402910976_500_F_163121616_76WYhq1hFN5B3BJYfASSp9ekLUBWUvhR.jpg",
        email: "jonasverasilva@gmail.com",
        whatsapp: "85 991207966",
        cidade: "Horizonte",
        estado: "CE",
        tipo_usuario: null,
        data_cadastro: null,
        data_atualizacao: null,
        senha: null,
      },
      data_cadastro: "2021-05-15T00:00:00Z",
      data_atualizacao: "2021-05-15T00:00:00Z",
      fotos: [
        {
          id: 1,
          nome: "1621133778796_piercing-para-cachorro-2.jpg",
          tamanho: 74977,
          contexto: "Animal",
          data_cadastro: "2021-05-15T00:00:00Z",
          data_atualizacao: "2021-05-15T00:00:00Z",
        },
      ],
    },
    {
      id: 3,
      apelido: "José",
      especie: "Cachorro",
      raca: "Vira-lata",
      descricao: "Não morde e super brincalhão, pega bolinha..",
      peso: 30,
      alura: 50,
      tamanho: "G",
      categoria: "Cachorros",
      idade: 2,
      situacao: "Disponivel",
      status: null,
      sexo: "Masculino",
      usuario: {
        id: 4,
        nome: "Jonas Silva Vera",
        img_login:
          "1622402910976_500_F_163121616_76WYhq1hFN5B3BJYfASSp9ekLUBWUvhR.jpg",
        email: "jonasverasilva@gmail.com",
        whatsapp: "85 991207966",
        cidade: "Horizonte",
        estado: "CE",
        tipo_usuario: null,
        data_cadastro: null,
        data_atualizacao: null,
        senha: null,
      },
      data_cadastro: "2023-05-15T00:00:00Z",
      data_atualizacao: null,
      fotos: [
        {
          id: 4,
          nome: "1621790116792_gata1.1.jpg",
          tamanho: 266986,
          contexto: "Animal",
          data_cadastro: "2021-05-23T00:00:00Z",
          data_atualizacao: "2021-05-23T00:00:00Z",
        },
        {
          id: 5,
          nome: "1621790126210_gato4.jpg",
          tamanho: 59139,
          contexto: "Animal",
          data_cadastro: "2021-05-23T00:00:00Z",
          data_atualizacao: "2021-05-23T00:00:00Z",
        },
      ],
    },
    {
      id: 4,
      apelido: "Hercules",
      especie: "Gato",
      raca: "Siamês",
      descricao: "tranquilo , já cadastrada e tem 2 ano e meio",
      peso: 14,
      alura: 15,
      tamanho: "M",
      categoria: "Gatos",
      idade: 2,
      situacao: "Disponivel",
      status: null,
      sexo: "Masculino",
      usuario: {
        id: 4,
        nome: "Jonas Silva Vera",
        img_login:
          "1622402910976_500_F_163121616_76WYhq1hFN5B3BJYfASSp9ekLUBWUvhR.jpg",
        email: "jonasverasilva@gmail.com",
        whatsapp: "85 991207966",
        cidade: "Horizonte",
        estado: "CE",
        tipo_usuario: null,
        data_cadastro: null,
        data_atualizacao: null,
        senha: null,
      },
      data_cadastro: "2021-05-15T00:00:00Z",
      data_atualizacao: "2021-05-15T00:00:00Z",
      fotos: [
        {
          id: 6,
          nome: "1621790142783_gato2.jpeg",
          tamanho: 13405,
          contexto: "Animal",
          data_cadastro: "2021-05-23T00:00:00Z",
          data_atualizacao: "2021-05-23T00:00:00Z",
        },
        {
          id: 7,
          nome: "1621790148846_gato2.jpg",
          tamanho: 27388,
          contexto: "Animal",
          data_cadastro: "2021-05-23T00:00:00Z",
          data_atualizacao: "2021-05-23T00:00:00Z",
        },
      ],
    },
    {
      id: 5,
      apelido: "Tom",
      especie: "Cachorro",
      raca: "Buldogue",
      descricao: "tranquilo , já cadastrada e tem 3 ano e meio",
      peso: 20.0,
      alura: 60,
      tamanho: "G",
      categoria: "Cachorros",
      idade: 5,
      situacao: "Disponivel",
      status: null,
      sexo: "Masculino",
      usuario: {
        id: 4,
        nome: "Jonas Silva Vera",
        img_login:
          "1622402910976_500_F_163121616_76WYhq1hFN5B3BJYfASSp9ekLUBWUvhR.jpg",
        email: "jonasverasilva@gmail.com",
        whatsapp: "85 991207966",
        cidade: "Horizonte",
        estado: "CE",
        tipo_usuario: null,
        data_cadastro: null,
        data_atualizacao: null,
        senha: null,
      },
      data_cadastro: "2021-05-15T00:00:00Z",
      data_atualizacao: "2021-05-15T00:00:00Z",
      fotos: [
        {
          id: 8,
          nome: "1621790161918_buld2.jpg",
          tamanho: 50812,
          contexto: "Animal",
          data_cadastro: "2021-05-23T00:00:00Z",
          data_atualizacao: "2021-05-23T00:00:00Z",
        },
        {
          id: 9,
          nome: "1621790168125_buld1.jpg",
          tamanho: 11948,
          contexto: "Animal",
          data_cadastro: "2021-05-23T00:00:00Z",
          data_atualizacao: "2021-05-23T00:00:00Z",
        },
      ],
    },
    {
      id: 6,
      apelido: "Lindinha",
      especie: "Cachorro",
      raca: "Vira-lata",
      descricao: "Sou linha, adoro brincar, sou amavel e muito eduacada",
      peso: 15,
      alura: 20,
      tamanho: "P",
      categoria: "Cachorros",
      idade: 5,
      situacao: "Disponivel",
      status: null,
      sexo: "Feminino",
      usuario: {
        id: 4,
        nome: "Jonas Silva Vera",
        img_login:
          "1622402910976_500_F_163121616_76WYhq1hFN5B3BJYfASSp9ekLUBWUvhR.jpg",
        email: "jonasverasilva@gmail.com",
        whatsapp: "85 991207966",
        cidade: "Horizonte",
        estado: "CE",
        tipo_usuario: null,
        data_cadastro: null,
        data_atualizacao: null,
        senha: null,
      },
      data_cadastro: "2021-05-15T00:00:00Z",
      data_atualizacao: "2021-05-15T00:00:00Z",
      fotos: [
        {
          id: 10,
          nome: "1621790197192_viralata2.jpg",
          tamanho: 5299,
          contexto: "Animal",
          data_cadastro: "2021-05-23T00:00:00Z",
          data_atualizacao: "2021-05-23T00:00:00Z",
        },
        {
          id: 11,
          nome: "1621790205104_viralata.jpg",
          tamanho: 108455,
          contexto: "Animal",
          data_cadastro: "2021-05-23T00:00:00Z",
          data_atualizacao: "2021-05-23T00:00:00Z",
        },
      ],
    },
    {
      id: 7,
      apelido: "Mikey",
      especie: "Gato",
      raca: "Siames",
      descricao: "um gato rato.",
      peso: 15.0,
      alura: 10.0,
      tamanho: "P",
      categoria: "Gatos",
      idade: 2,
      situacao: "Disponivel",
      status: null,
      sexo: "Masculino",
      usuario: {
        id: 4,
        nome: "Jonas Silva Vera",
        img_login:
          "1622402910976_500_F_163121616_76WYhq1hFN5B3BJYfASSp9ekLUBWUvhR.jpg",
        email: "jonasverasilva@gmail.com",
        whatsapp: "85 991207966",
        cidade: "Horizonte",
        estado: "CE",
        tipo_usuario: null,
        data_cadastro: null,
        data_atualizacao: null,
        senha: null,
      },
      data_cadastro: "2021-06-08T00:00:00Z",
      data_atualizacao: "2021-06-08T00:00:00Z",
      fotos: [
        {
          id: 12,
          nome: "1621790218049_gata1.2.jpg",
          tamanho: 4082,
          contexto: "Animal",
          data_cadastro: "2021-05-23T00:00:00Z",
          data_atualizacao: "2021-05-23T00:00:00Z",
        },
        {
          id: 13,
          nome: "1621790223566_gata1.jpg",
          tamanho: 51734,
          contexto: "Animal",
          data_cadastro: "2021-05-23T00:00:00Z",
          data_atualizacao: "2021-05-23T00:00:00Z",
        },
        {
          id: 14,
          nome: "1621790230598_gata23.jpg",
          tamanho: 51196,
          contexto: "Animal",
          data_cadastro: "2021-05-23T00:00:00Z",
          data_atualizacao: "2021-05-23T00:00:00Z",
        },
      ],
    },
  ]);
  
  useEffect(() => {
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeusPets;
