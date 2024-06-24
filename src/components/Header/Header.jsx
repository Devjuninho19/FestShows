import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <span>
          Compre na <b>Fetshows</b>
        </span>
      </header>
      <main>
        <div className={styles.pagetitle}>Seu Carrinho</div>
        <div className={styles.content}>
          <section>Listagem de Produtos</section>
          <aside>Resumo das compras</aside>
        </div>
      </main>
    </div>
  );
};

export default Header;
