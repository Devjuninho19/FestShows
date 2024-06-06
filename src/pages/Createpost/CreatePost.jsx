import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { userInsertDocument } from "./../../hooks/useInsertDocument";
import styles from "./CreatePost.module.css";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");

  const [tags, setTags] = useState([]);
  const [forError, setFormError] = useState("");
  const { user } = useAuthValue();
  const { InsertDocument, response } = userInsertDocument("posts");
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    InsertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
    });
  };
  return (
    <div className={styles.create}>
      <h2>Criar Evento</h2>
      <p>Escreva Sobre o Evento</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Adicione o título"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira a imagem que representa o seu evento"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo de criação"
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
      </form>
      <button className="btn">Criar</button>
    </div>
  );
};

export default CreatePost;
