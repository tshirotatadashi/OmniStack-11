import React from 'react'
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import './style.css'
import logoImg from "../../assets/logo.svg";

export default function NewIncidents() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section className="form">
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft fontSize={16} color="E02041" />
            Voltar para home
          </Link>
        </section>
        <form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" />
          <div className="button-group">
            <Link className="button button-cancel" to="/profile">
              Cancelar
            </Link>
            <button className="button" type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
