import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//
import api from "../../service/service";

//
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

//
import "../../styles/Details/DetailsPet.css";

function DetailsPet() {
  const { petId } = useParams();
  const [pet, setPet] = useState({});
  const [notPet, setNotPet] = useState(false);
  const [filter, setFilter] = useState([]);

  const fetchPosts = async () => {
    const resp = await api.get("animal/animaisAdocao");
    var filter = resp?.data?.content?.filter((pet) => {
      return pet.id === parseFloat(petId);
    });

    setFilter(filter);

    if (filter?.length > 0) {
      setNotPet(false);
      filter?.map((pet) => {
        setPet(pet);
      });
    } else {
      setNotPet(true);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [pet, petId]);

  return filter.length > 0 ? (
    <div className="app-details-pet">
      <div className="app-details-pet__right">
        <AwesomeSlider>
          {pet?.fotos?.map((ft) => (
            <div>
              <img
                alt={ft.nome}
                src={`https://photoanimalx.s3.us-east-2.amazonaws.com/${ft.nome}`}
              />
            </div>
          ))}
        </AwesomeSlider>
      </div>

      <div className="app-details-pet__left">
        <p>{pet?.apelido}</p>

        <div className="app-details-pet__left-infos">
          <div>
            <h5>{pet?.sexo}</h5>
            <p>Sexo</p>
          </div>
          <div>
            <h5>{pet?.idade}</h5>
            <p>Idade</p>
          </div>
          <div>
            <h5>{pet?.peso}kg</h5>
            <p>Peso</p>
          </div>
        </div>
      </div>
    </div>
  ) : notPet ? (
    <p>Page not found</p>
  ) : (
    <p>Loading...</p>
  );
}

export default DetailsPet;
