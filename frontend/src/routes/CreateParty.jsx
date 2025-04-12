import React from "react";

const CreateParty = () => {
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
            <p>Serviços...</p>
          </div>
        </div>
        <input type="submit" value={"Criar Festa"} />
      </form>
    </div>
  );
};

export default CreateParty;
