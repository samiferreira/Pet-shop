import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/dog.png";
import "./index.css";

function Main() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/agendamentos");
  };

  return (
    <>
      <div className="description">
        <h1 className="subtitle">
          O melhor cuidado para seu <span className="person">melhor amigo</span>
        </h1>
        <p className="paragraph">
          Está esperando o que para fazer seu pet mais feliz? Aqui você encontra
          o que seu pet merece. Banho, tosa, ração e acessórios.
        </p>
        <button onClick={handleClick} className="schedule_button">
          {" "}
          Agendar serviço{" "}
        </button>
      </div>
      <img src={banner} className="dog" alt="Dog" />
    </>
  );
}

export default Main;
