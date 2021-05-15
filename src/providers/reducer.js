import Gato1 from "../assets/pets/gato1.svg";
import Gato2 from "../assets/pets/gato2.svg";
import Gato3 from "../assets/pets/gato3.svg";
import Gato4 from "../assets/pets/gato4.svg";

export const initialState = {
  activeCategory: "Gatos",
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
      raca: "Siamês",
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
      raca: "Siamês",
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
  ],
};

export const actionTypes = {
  SET_ACTIVE_CATEGORY: "SET_ACTIVE_CATEGORY",
  SET_PETS: "SET_PETS",
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
    default:
      return state;
  }
};

export default reducer;
