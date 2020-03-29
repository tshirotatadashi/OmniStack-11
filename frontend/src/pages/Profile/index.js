import React, { useState, useEffect } from 'react'
import { list, deleteIncident } from '../../actions/IncidentsActions'
import { Link, useHistory } from "react-router-dom";
import './style.css'
import logoImg from "../../assets/logo.svg"
import { FiPower, FiTrash2 } from "react-icons/fi"

export default function Profile() {
  const history = useHistory()
  const ongName = localStorage.getItem('ongName')
  const [incidents, setIncidents] = useState([])

  useEffect(() => {
    list().then(response => {
      setIncidents(response)
    })
  }, [])

  function handleDelete (id) {
    deleteIncident(id)
      .then(() => {
        setIncidents(incidents.filter(incident => incident.id !== id))
        alert('Incidente excluído com sucesso!')
      })
      .catch(() => alert('Erro ao deletar Incidente'))
  }

  function handleLogOut () {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to='/incidents/new'>Cadastrar novo Caso</Link>
        <button type="button" onClick={() => handleLogOut()}>
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

            <button type="button" onClick={() => handleDelete(id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
