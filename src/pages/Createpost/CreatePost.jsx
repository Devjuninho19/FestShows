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
const[loading]= useState("");
const[error]= useState("");

  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");
  const { user } = useAuthValue();
  const { InsertDocument, response } = userInsertDocument("posts");
  
  const handleSubmit = (e) => {
    InsertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
    });
    e.preventDefault();
    setFormError("");

  
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
            onChange={(e) => setImage(e.target.value)}
            value={image}
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
        {!response.loading && <button className="btn">Cadastrar</button>}
        {loading && (
          <button className="btn" disabled>Aguarde...</button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    
    </div>
  );
};

export default CreatePost;
