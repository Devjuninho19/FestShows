import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Fest <sapn>Shows</sapn>
      </h2>
      <p>
        Em um mundo repleto de experiências emocionantes, nosso site é o seu
        portal para acesso a eventos imperdíveis. Seja você um aficionado por
        música, um entusiasta de esportes ou um amante das artes, estamos aqui
        para tornar suas experiências memoráveis.
      </p>
      <p>
        Navegue por nossa plataforma intuitiva e encontre os ingressos perfeitos
        para o seu próximo evento. Com apenas alguns cliques, você pode garantir
        seu lugar e começar a contar os minutos até o momento especial.
      </p>
    </div>
  );
};

export default About;
