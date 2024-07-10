import React, { useEffect } from "react";
import styles from "./Dashboard.module.css";
import { useState } from "react";
import { api } from "../../Provider/Provider";
//import { Link } from "react-router-dom";
import MediaCard from "../../components/Card/Card";
const Dashboard = () => {
  const [loading] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data); // Atualiza o estado dos posts com os dados recebidos
      })
      .catch((error) => {
        console.error("Erro ao buscar posts:", error);
      });
  }, []);
  return (
    <div className={styles.dashboard}>
      <div>{loading && <p>Carregando..</p>}</div>
      <ul>
        {posts.map((post) => (
          <MediaCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
