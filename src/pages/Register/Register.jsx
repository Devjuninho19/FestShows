import React from "react";
import styles from "./Register.module.css";
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import cadastro from "../../images/cadastro.svg";
const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser, error: authError, loading } = useAuthentication();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }
    const res = await createUser(user);
    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <div className={styles.register}>
      <h2>Cadastre-se</h2>
      <img src={cadastro} alt="cadastro" />
      <div className={styles.right}>
        <form onSubmit={handleSubmit} className={styles.card}>
          <div className={styles.textfield}>
            <label>
              <span>Nome:</span>
              <input
                type="text"
                name="displatName"
                required
                placeholder="Nome do usuário"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </label>
            <label>
              <span>E-mail:</span>
              <input
                type="email"
                name="email"
                required
                placeholder=" E-mail do usuário"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <span>Password:</span>
              <input
                type="password"
                name="password"
                required
                placeholder=" Insira sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label>
              <span>Confirmação de Senha:</span>
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder=" Confirme a sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
          </div>
          {!loading && <button className="btn">Cadastrar</button>}

          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
