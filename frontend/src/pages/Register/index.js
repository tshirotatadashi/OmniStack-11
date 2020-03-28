import React from 'react'
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import './style.css'
import logoImg from "../../assets/logo.svg";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section className="form">
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft fontSize={16} color="E02041" />
            Voltar para o logon
          </Link>
        </section>
        <form>
          <input placeholder="Nome da ONG" />
          <input placeholder="email" type="email" />
          <input placeholder="Telefone" />
          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}