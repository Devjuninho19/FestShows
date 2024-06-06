import React from "react";
import styles from "./Home.module.css";
//hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { collection } from "firebase/firestore";
//componentes
const Home = () => {
  const [query, setQuery] = useState("");
  const [posts] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.home}>
      <h3>Veja os nossos Eventos!</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Busque os Eventos..."
          onChange={(e) => setQuery(e.target.value)}
          className={styles.form_input}
        />
        <button className="btn">Pesquisar</button>
      </form>
      <div>
        <h2>Posts...</h2>
        {posts && posts.length === 0 && (
          <div className={styles.nooposts}>
            <p>Não foram encontrados posts</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
