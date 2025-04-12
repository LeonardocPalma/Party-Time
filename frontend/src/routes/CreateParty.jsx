import "./Form.css";

import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import partyFetch from "../axios/config";

const CreateParty = () => {
  const [services, setServices] = useState([]);

  // load services
  useEffect(() => {
    const loadServices = async () => {
      const res = await partyFetch.get("/services");

      setServices(res.data);
    };

    loadServices();
  }, []);

  return (
    <div className="form-page">
      <h2>Crie sua próxima festa</h2>
      <p>Defina o seu orçamento e escolha os serviços</p>
      <form>
        <label>
          <span>Nome da festa:</span>
          <input type="text" placeholder="Seja Criativo..." required />
        </label>
        <label>
          <span>Anfitrião:</span>
          <input
            type="text"
            placeholder="Quem está fazendo a festa?"
            required
          />
        </label>
        <label>
          <span>Descrição:</span>
          <textarea placeholder="Descreva o seu evento..." required></textarea>
        </label>
        <label>
          <span>Orçamento:</span>
          <input
            type="number"
            placeholder="Quanto você pretende investir?"
            required
          />
        </label>
        <label htmlFor="">
          <span>Imagem:</span>
          <input type="text" placeholder="Insira a URL da imagem" required />
        </label>
        <div>
          <h2>Escolha os serviços</h2>
          <div className="services-container">
            {services.length === 0 && <p>Carregando...</p>}
            {services.length > 0 &&
              services.map((service) => (
                <div className="service" key={service._id}>
                  <img src={service.image} alt={service.name} />
                  <p className="service-name">{service.name}</p>
                  <p className="service-price">R$ {service.price}</p>
                  <div className="checkbox-container">
                    <input type="checkbox" value={service._id} />
                    <p>Selecionar</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <input type="submit" value={"Criar Festa"} className="btn"/>
      </form>
    </div>
  );
};

export default CreateParty;
