import React, { useState, useEffect } from 'react'
import { list } from '../../actions/IncidentsActions'
import { Link } from "react-router-dom";
import './style.css'
import logoImg from "../../assets/logo.svg"
import { FiPower, FiTrash2 } from "react-icons/fi"

export default function Profile() {
  const ongName = localStorage.getItem('ongName')
  const [incidents, setIncidents] = useState([])

  useEffect(() => {
    list().then(response => {
      setIncidents(response)
    })
  }, [])

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to='/incidents/new'>Cadastrar novo Caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(({ id, name, description, value }) => (
          <li key= {id}>
            <strong>Caso:</strong>
          <p>{name}</p>

            <strong>Descrição:</strong>
          <p>{description}</p>

            <strong>Valor:</strong>
            <p>{
              Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(value)
            }</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
