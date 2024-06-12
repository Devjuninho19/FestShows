import React from "react";
import styles from "./Dashboard.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import PostDetails from "../../components/PostDetails";
import ActionAreaCard from "../../components/Card/ActionAreaCard";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [posts] = useState([]);
  const [loading] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.dashboard}>
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
        {loading && <p>Carregando..</p>}
        {posts &&
          posts.map((post) => <PostDetails key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className={styles.nooposts}>
            <p>Não foram encontrados posts</p>
            <ActionAreaCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
