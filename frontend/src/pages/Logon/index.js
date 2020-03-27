import React from "react";
import { FiLogIn } from "react-icons/fi";
import "./style.css";
import logoImg from "../../assets/logo.svg";
import herosImg from "../../assets/heros.png";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form>
          <h1>Faça seu Logon</h1>

          <input placeholder="Sua ID" />
          <button type="submit" className="button">
            Entrar
          </button>

          <a href="/register">
            <FiLogIn fontSize={16} color="E02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>
      <img src={herosImg} alt="Heros" />
    </div>
  );
}
