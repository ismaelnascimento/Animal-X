import React, { useState, useEffect } from "react";

//
import { CgClose } from "react-icons/cg";

//
import "../../styles/Pets/CadastroPet.css";
import api from "../../service/service";
import { useHistory } from "react-router-dom";

function CadastroPet() {
  const [upload1, setUpload1] = useState(null);
  const [uploadView1, setUploadView1] = useState("");
  const [upload2, setUpload2] = useState(null);
  const [uploadView2, setUploadView2] = useState("");
  const [upload3, setUpload3] = useState(null);
  const [uploadView3, setUploadView3] = useState("");

  function changeImageUploadImage1(e) {
    setUpload1(e.target.files[0]);
  }
  function changeImageUploadImage2(e) {
    setUpload2(e.target.files[0]);
  }
  function changeImageUploadImage3(e) {
    setUpload3(e.target.files[0]);
  }

  const renderFt = (upload, setUploadView) => {
    if (upload) {
      const reader = new FileReader();

      reader.onload = function () {
        const result = reader.result;

        setUploadView(result);
      };
      reader.readAsDataURL(upload);
    }
  };

  useEffect(() => {
    renderFt(upload1, setUploadView1);
    renderFt(upload2, setUploadView2);
    renderFt(upload3, setUploadView3);
  }, [upload1, upload2, upload3]);

  const [checkedSituacao, setCheckedSituacao] = useState(true);
  const [apelido, setApelido] = useState("");
  const [raca, setRaca] = useState("");
  const [descricao, settDescricao] = useState("");
  const [especie, setEspecie] = useState("");
  const [categoria, setCategoria] = useState("Gatos");
  const [altura, setAltura] = useState();
  const [idade, setIdade] = useState();
  const [typeIdade, setTypeIdade] = useState("anos");
  const [peso, setPeso] = useState();
  const [tamanho, setTamanho] = useState("P");
  const [sexo, setSexo] = useState("Feminino");

  const history = useHistory();

  const addPet = async (e) => {
    e.preventDefault();

    let dataPet = {
      altura: altura,
      apelido: apelido,
      categoria: categoria,
      descricao: descricao,
      especie: especie,
      idade: idade,
      peso: peso,
      raca: raca,
      sexo: sexo,
      situacao: "Disponivel",
      tamanho: tamanho,
      unidadeTempo: typeIdade,
      usuario: localStorage.getItem("ID_USUARIO_LOGADO"),
    };

    var config = {
      headers: { Authorization: "bearer " + localStorage.getItem("TOKEN") },
    };

    const resp = await api.post("animal/salvar/", dataPet, config);
    let id = resp.data.id;

    if (upload1) {
      let dataUpload = new FormData();
      dataUpload.append("file", upload1, upload1.name);
      let respFt = await api.post(
        `foto/upload/storage/${id}`,
        dataUpload,
        config
      );
    }
    if (upload2) {
      let dataUpload = new FormData();
      dataUpload.append("file", upload2, upload2.name);
      await api.post(`foto/upload/storage/${id}`, dataUpload, config);
    }
    if (upload3) {
      let dataUpload = new FormData();
      dataUpload.append("file", upload3, upload3.name);
      await api.post(`foto/upload/storage/${id}`, dataUpload, config);
    }

    setUpload1(null);
    setUploadView1("");
    setUpload2(null);
    setUploadView2("");
    setUpload3(null);
    setUploadView3("");
    setCheckedSituacao(true);
    setApelido("");
    setRaca("");
    settDescricao("");
    setEspecie("");
    setCategoria("Gatos");
    setAltura("");
    setTamanho("");
    setIdade("");
    setPeso("");
    setSexo("Feminino");
    history.push("/");
  };

  useEffect(() => {
    document.title = "Cadastro de seu amiguinho | Animal X";
  }, []);

  return (
    <div className="app-cadastro-pet">
      <div className="app-cadastro-pet__back">
        <div></div>
      </div>

      <div className="app-cadastro-pet__content">
        <p>Cadastro de seu amiguinho</p>

        <div className="app-cadastro-pet__content-items">
          <div className="app-cadastro-pet__content-items__uploads">
            <input
              onChange={(e) => changeImageUploadImage1(e)}
              type="file"
              id="upload-pet-cadastro-1"
            />
            <input
              onChange={(e) => changeImageUploadImage2(e)}
              type="file"
              id="upload-pet-cadastro-2"
            />
            <input
              onChange={(e) => changeImageUploadImage3(e)}
              type="file"
              id="upload-pet-cadastro-3"
            />

            {!upload1 ? (
              <label
                className="app-cadastro-pet__content-items__uploads-view"
                htmlFor="upload-pet-cadastro-1"
              >
                <IconUpload />
                <p>Fazer upload da 1 imagem</p>
              </label>
            ) : (
              <div
                style={{ border: "none", cursor: "auto" }}
                className="app-cadastro-pet__content-items__uploads-view"
              >
                <div
                  onClick={() => {
                    setUpload1(null);
                    setUploadView1("");
                  }}
                >
                  <CgClose />
                </div>

                <img src={uploadView1} alt="" />
              </div>
            )}
            {!upload2 && upload1 ? (
              <label
                className="app-cadastro-pet__content-items__uploads-view"
                htmlFor="upload-pet-cadastro-2"
              >
                <IconUpload />
                <p>Fazer upload da 2 imagem</p>
              </label>
            ) : upload2 ? (
              <div
                style={{ border: "none", cursor: "auto" }}
                className="app-cadastro-pet__content-items__uploads-view"
              >
                {" "}
                <div
                  onClick={() => {
                    setUpload2(null);
                    setUploadView2("");
                  }}
                >
                  <CgClose />
                </div>
                <img src={uploadView2} alt="" />
              </div>
            ) : (
              ""
            )}
            {!upload3 && upload1 && upload2 ? (
              <label
                className="app-cadastro-pet__content-items__uploads-view"
                htmlFor="upload-pet-cadastro-3"
              >
                <IconUpload />
                <p>Fazer upload da 3 imagem</p>
              </label>
            ) : upload3 ? (
              <div
                style={{ border: "none", cursor: "auto" }}
                className="app-cadastro-pet__content-items__uploads-view"
              >
                {" "}
                <div
                  onClick={() => {
                    setUpload3(null);
                    setUploadView3("");
                  }}
                >
                  <CgClose />
                </div>
                <img src={uploadView3} alt="" />
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="app-cadastro-pet__content-items__inputs">
            <div className="app-cadastro-pet__content-items__inputs-input">
              <p>Apelido</p>
              <input
                onChange={(e) => setApelido(e.target.value)}
                value={apelido}
                type="text"
                placeholder="Digite o apelido do pet"
              />
            </div>

            <div className="app-cadastro-pet__content-items__inputs-input">
              <p>Raça</p>
              <input
                onChange={(e) => setRaca(e.target.value)}
                value={raca}
                type="text"
                placeholder="Digite o raça do pet ex: Siamês"
              />
            </div>

            <div className="app-cadastro-pet__content-items__inputs-input">
              <p>Descrição</p>
              <textarea
                onChange={(e) => settDescricao(e.target.value)}
                value={descricao}
                placeholder="Descrição do pet"
              />
            </div>

            <div className="app-cadastro-pet__content-items__inputs-input">
              <p>Especie</p>
              <input
                onChange={(e) => setEspecie(e.target.value)}
                value={especie}
                type="text"
                placeholder="Especie do seu pet ex: gato"
              />
            </div>

            <div className="app-cadastro-pet__content-items__inputs-input">
              <p>Categoria</p>

              <section>
                <select
                  onChange={(e) => setCategoria(e.target.value)}
                  value={categoria}
                  id="categoria-pet-add"
                >
                  <option value="Gatos">Gatos</option>
                  <option value="Cachorros">Cachorros</option>
                  <option value="Outros">Outros</option>
                </select>
              </section>
            </div>

            <div className="app-cadastro-pet__content-items__inputs-input">
              <p>Altura</p>
              <input
                onChange={(e) => setAltura(e.target.value)}
                value={altura}
                type="number"
                placeholder="Altura do seu pet em cm"
              />
            </div>

            <div className="app-cadastro-pet__content-items__inputs-input">
              <p>Idade</p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <input
                  style={{ margin: "4px", flex: "1" }}
                  onChange={(e) => setIdade(e.target.value)}
                  value={idade}
                  type="text"
                  placeholder="Idade do seu pet"
                />
                <section style={{ margin: "4px", flex: "1" }}>
                  <select
                    onChange={(e) => setTypeIdade(e.target.value)}
                    value={typeIdade}
                    id="type-idade-pet-add"
                  >
                    <option value="anos">anos</option>
                    <option value="meses">meses</option>
                  </select>
                </section>
              </div>
            </div>

            <div className="app-cadastro-pet__content-items__inputs-input">
              <p>Peso</p>
              <input
                onChange={(e) => setPeso(e.target.value)}
                value={peso}
                type="number"
                placeholder="Peso do seu pet"
              />
            </div>

            <div className="app-cadastro-pet__content-items__inputs-input">
              <p>Tamanho</p>

              <section>
                <select
                  onChange={(e) => setTamanho(e.target.value)}
                  value={tamanho}
                  id="tamanho-pet-add"
                >
                  <option value="P">P</option>
                  <option value="M">M</option>
                  <option value="G">G</option>
                </select>
              </section>
            </div>

            <div className="app-cadastro-pet__content-items__inputs-input">
              <p>Sexo</p>

              <section>
                <select
                  onChange={(e) => setSexo(e.target.value)}
                  value={sexo}
                  id="sexo-pet-add"
                >
                  <option value="Feminino">Feminino</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Outro">Outro</option>
                </select>
              </section>
            </div>

            <div className="app-cadastro-pet__content-items__inputs-input">
              <p>Situação</p>

              <div>
                <div className="cbx">
                  <input
                    checked={checkedSituacao}
                    onChange={() => setCheckedSituacao(!checkedSituacao)}
                    type="checkbox"
                    name="Situação"
                    id="cbx"
                  />
                  <label htmlFor="cbx"></label>
                  <svg width="15" height="14" viewbox="0 0 15 14" fill="none">
                    <path d="M2 8.36364L6.23077 12L13 2"></path>
                  </svg>
                </div>

                <p>Disponivel</p>
              </div>
            </div>
          </div>

          {uploadView1 !== "" &&
          apelido !== "" &&
          raca !== "" &&
          descricao !== "" &&
          especie !== "" &&
          altura !== undefined &&
          altura !== null &&
          idade !== undefined &&
          peso !== undefined &&
          peso !== null ? (
            <button onClick={(e) => addPet(e)}>Adicionar</button>
          ) : (
            <button style={{ opacity: "0.5", cursor: "auto" }}>
              Adicionar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CadastroPet;

const IconUpload = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M6.447 22C3.996 22 2 19.9698 2 17.4755V12.5144C2 10.0252 3.99 8 6.437 8L17.553 8C20.005 8 22 10.0302 22 12.5256V17.4846C22 19.9748 20.01 22 17.563 22H16.623H6.447Z"
      fill="#130F26"
    />
    <path
      d="M11.4548 2.22108L8.5458 5.06687C8.2458 5.36099 8.2458 5.83432 8.5478 6.12747C8.8498 6.41964 9.3368 6.41867 9.6368 6.12552L11.2298 4.56628V6.06124V14.4515C11.2298 14.8655 11.5748 15.2015 11.9998 15.2015C12.4258 15.2015 12.7698 14.8655 12.7698 14.4515V4.56628L14.3628 6.12552C14.6628 6.41867 15.1498 6.41964 15.4518 6.12747C15.6028 5.98041 15.6788 5.78854 15.6788 5.59571C15.6788 5.40482 15.6028 5.21296 15.4538 5.06687L12.5458 2.22108C12.4008 2.07986 12.2048 2 11.9998 2C11.7958 2 11.5998 2.07986 11.4548 2.22108Z"
      fill="#130F26"
    />
  </svg>
);
