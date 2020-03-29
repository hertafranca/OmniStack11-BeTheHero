import React, { useState, useEffect } from "react";
import logoImg from "../../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiPower } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

import heroesSmallImg from "../../assets/heroesSmall.png";

import api from "../../services/api";

import "./styles.css";

export default function Profile() {
  const [incidents, setincidents] = useState([]);

  const history = useHistory();

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        setincidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });
      setincidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert("Erro ao deletar caso,tente novamente");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}!</span>

        <Link className="button" to="/incidentes/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} />
        </button>
      </header>

      <div className="between">
        <h1>Casos Cadastrados</h1>
        <img src={heroesSmallImg} alt="Heroes" />
      </div>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Caso</strong>
            <p>{incident.title}</p>
            <strong>Descrição</strong>
            <p>{incident.description}</p>
            <strong>Valor</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </p>
            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <MdDelete size={20} color="#de2041" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
