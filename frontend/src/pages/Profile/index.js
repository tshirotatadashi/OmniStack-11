import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
import logoImg from "../../assets/logo.svg";
import { FiPower, FiTrash2 } from "react-icons/fi";

export default function Profile() {
  const list = () => {
    const rows = []
    for (let i = 0; i < 10; i++) {
      rows.push(
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$: 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      );
    }
    return rows
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, ONG</span>

        <Link className="button" to='/incidents/new'>Cadastrar novo Caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {list()}
      </ul>
    </div>
  );
}
