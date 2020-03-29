import React, { useState} from 'react'
import store from '../../actions/IncidentsActions'
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import './style.css'
import logoImg from "../../assets/logo.svg";

export default function NewIncidents() {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  function handleSave (event) {
    event.preventDefault()
    store({
      title,
      description,
      value
    }).then(() => history.push('/profile'))
      .catch(() => alert('Erro ao criar Incidente'))
  }

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
        <form onSubmit={handleSave}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={({target}) => setTitle(target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={({target}) => setDescription(target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={({target}) => setValue(target.value)}
          />
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
