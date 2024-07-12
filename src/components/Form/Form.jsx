import React from "react";
import { useForm } from "react-hook-form";
import { api } from "../../Provider/Provider";
const Form = ({ title, textButton }) => {
  const { register, handleSubmit, reset } = useForm();

  function handleCreatePost(data) {
    api.post("/posts", data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleCreatePost)}>
      <h2>{title}</h2>
      <div>
        <input placeholder="Título" {...register("title")} />
      </div>

      <div>
        <input placeholder="Descrição" {...register("description")} />
      </div>

      <div>
        <textarea placeholder="Conteúdo" {...register("content")} />
      </div>

      <button type="submit">{textButton}</button>
    </form>
  );
};

export default Form;
