import React from "react";
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Login.module.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, error: authError, loading } = useAuthentication();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);
    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <div className={styles.login}>
      <h2>FAÇA O SEU LOGIN</h2>
      <div className={styles.right}>
        <form onSubmit={handleSubmit} className={styles.card}>
          <div className={styles.textfield}>
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
          </div>
          {!loading && <button className="btn">Entrar</button>}

          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
