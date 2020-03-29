import React, { useState } from "react";
import store from '../../actions/OngsActions'
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./style.css";
import logoImg from "../../assets/logo.svg";

export default function Register() {
  const history = useHistory()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  function handleRegister(event) {
    event.preventDefault();
    const data = { name, email, phone, city, uf };
    store(data)
      .then((id) => {
        alert(`Sua ID: ${id}, foi criada com sucesso!`)
        history.push('/profile')
      })
      .catch(() => alert('Erro ao criar ONG'))
  }

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
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <input
            placeholder="email"
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <input
            placeholder="Telefone"
            value={phone}
            onChange={event => setPhone(event.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={event => setCity(event.target.value)}
            />
            <input
              placeholder="UF"
              value={uf}
              onChange={event => setUf(event.target.value)}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
