import React from "react";

const Form = () => {
  return (
    <form>
      <h2>Título</h2>
      <div>
        <input placeholder="Título" />
      </div>

      <div>
        <input placeholder="Descrição" />
      </div>

      <div>
        <textarea placeholder="Descrição" />
      </div>

      <button>Botão</button>
    </form>
  );
};

export default Form;
