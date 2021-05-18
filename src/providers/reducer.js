import Gato1 from "../assets/pets/gato1.svg";
import Gato2 from "../assets/pets/gato2.svg";
import Gato3 from "../assets/pets/gato3.svg";
import Gato4 from "../assets/pets/gato4.svg";

import Cachorro1 from "../assets/pets/cachorro1.svg";
import Cachorro2 from "../assets/pets/cachorro2.svg";
import Cachorro3 from "../assets/pets/cachorro3.svg";
import Cachorro4 from "../assets/pets/cachorro4.svg";

export const initialState = {
  activeCategory: "Gatos",
  searchPets: "",
  filter: "",
  pets: [
    {
      id: 1,
      image: Gato1,
      apelido: "Chitara",
      cidade: "Fortaleza",
      idade: "1 ano",
      estado: "CE",
      descricao: "Sou Chitara, adoro brincar, sou amavel e muito eduacada.",
      whatsapp: 558594356463,
      tamanho: "G",
      sexo: "Feminino",
      categoria: "Gatos",
      raca: "Siamês",
      situacao: "Bem",
      especie: "Gato",
      peso: "4,5 kg",
    },
    {
      id: 2,
      image: Gato2,
      apelido: "Lindinha",
      cidade: "Fortaleza",
      idade: "3 meses",
      estado: "CE",
      descricao: "Sou Lindinha, adoro brincar, sou amavel e muito eduacada.",
      whatsapp: 558594356463,
      tamanho: "G",
      sexo: "Feminino",
      categoria: "Gatos",
      raca: "Vira-lata",
      situacao: "Bem",
      especie: "Gato",
      peso: "2,2 kg",
    },
    {
      id: 3,
      image: Gato3,
      apelido: "Goiata",
      cidade: "Fortaleza",
      idade: "2 anos",
      estado: "CE",
      descricao: "Sou Goiata, adoro brincar, sou amavel e muito eduacada.",
      whatsapp: 558594356463,
      tamanho: "G",
      sexo: "Feminino",
      categoria: "Gatos",
      raca: "Vira-lata",
      situacao: "Bem",
      especie: "Gato",
      peso: "4,7 kg",
    },
    {
      id: 4,
      image: Gato4,
      apelido: "Charmosa",
      cidade: "Fortaleza",
      idade: "3 anos",
      estado: "CE",
      descricao: "Sou Charmosa, adoro brincar, sou amavel e muito eduacada.",
      whatsapp: 558594356463,
      tamanho: "G",
      sexo: "Feminino",
      categoria: "Gatos",
      raca: "Siamês",
      situacao: "Bem",
      especie: "Gato",
      peso: "4,4 kg",
    },
    //Cachorro
    {
      id: 5,
      image: Cachorro1,
      apelido: "Chitara",
      cidade: "Fortaleza",
      idade: "1 ano",
      estado: "CE",
      descricao: "Sou Chitara, adoro brincar, sou amavel e muito eduacada.",
      whatsapp: 558594356463,
      tamanho: "G",
      sexo: "Feminino",
      categoria: "Cachorros",
      raca: "Siamês",
      situacao: "Bem",
      especie: "Cachorro",
      peso: "4,5 kg",
    },
    {
      id: 6,
      image: Cachorro2,
      apelido: "Lindinha",
      cidade: "Fortaleza",
      idade: "3 meses",
      estado: "CE",
      descricao: "Sou Lindinha, adoro brincar, sou amavel e muito eduacada.",
      whatsapp: 558594356463,
      tamanho: "G",
      sexo: "Feminino",
      categoria: "Cachorros",
      raca: "Vira-lata",
      situacao: "Bem",
      especie: "Cachorro",
      peso: "2,2 kg",
    },
    {
      id: 7,
      image: Cachorro3,
      apelido: "Goiata",
      cidade: "Fortaleza",
      idade: "2 anos",
      estado: "CE",
      descricao: "Sou Goiata, adoro brincar, sou amavel e muito eduacada.",
      whatsapp: 558594356463,
      tamanho: "G",
      sexo: "Masculino",
      categoria: "Cachorros",
      raca: "Pastor-alemão",
      situacao: "Bem",
      especie: "Cachorro",
      peso: "4,7 kg",
    },
    {
      id: 8,
      image: Cachorro4,
      apelido: "Charmosa",
      cidade: "Fortaleza",
      idade: "3 anos",
      estado: "CE",
      descricao: "Sou Charmosa, adoro brincar, sou amavel e muito eduacada.",
      whatsapp: 558594356463,
      tamanho: "G",
      sexo: "Feminino",
      categoria: "Cachorros",
      raca: "Vira-lata",
      situacao: "Bem",
      especie: "Cachorro",
      peso: "4,4 kg",
    },
  ],
};

export const actionTypes = {
  SET_ACTIVE_CATEGORY: "SET_ACTIVE_CATEGORY",
  SET_PETS: "SET_PETS",
  SET_SEARCH_PETS: "SET_SEARCH_PETS",
  SET_FILTER: "SET_FILTER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PETS:
      return {
        ...state,
        pets: action.pets,
      };
    case actionTypes.SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.activeCategory,
      };
    case actionTypes.SET_SEARCH_PETS:
      return {
        ...state,
        searchPets: action.searchPets,
      };
    case actionTypes.SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default reducer;
