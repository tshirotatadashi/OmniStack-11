import React, {useState} from "react";
import logon from '../../actions/LogonActions'
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import "./style.css";
import logoImg from "../../assets/logo.svg";
import herosImg from "../../assets/heros.png";

export default function Logon() {
  const [id, setId] = useState('')
  const history = useHistory()

  function hadleLogin(event) {
    event.preventDefault();
    logon({ id })
      .then(() => {
        history.push('/profile')
      }).catch(() => {
        alert('Erro ao fazer o login')
      })
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={hadleLogin}>
          <h1>Faça seu Logon</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={event => setId(event.target.value)}
          />
          <button type="submit" className="button">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn fontSize={16} color="E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={herosImg} alt="Heros" />
    </div>
  );
}
