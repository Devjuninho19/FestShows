import React from "react";
import styles from "./Home.module.css";
import pessoa from "../../images/pessoa.png";
import { FaCode } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FiLock } from "react-icons/fi";

//hooks

//componentes
const Home = () => {
  return (
    <div className={styles.principal}>
      <section>
        <div className="interface">
          <div className="interface">
            <div className={styles.flex}>
              <div className={styles.topo}>
                <h1>
                  A MELHOR EXPERIÊNCIA EM SHOWS <span>.</span>
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                  consequuntur ratione assumenda, culpa aliquam ea libero id
                  doloribus nobis voluptates. Vitae quas repellat fuga a illum
                  ipsum, nobis nam hic.
                </p>
                <div className="btn-contato"></div>
              </div>
              <img src={pessoa} className={styles.img} alt="pessoa" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.especialidades}>
        <div className={styles.interface}>
          <h2 className={styles.titulo}>
            NOSSAS <span>VANTAGENS</span>
          </h2>
          <div className={styles.flex}>
            <div className={styles.box}>
              <FaCode className={styles.icon} />

              <h3>Visão</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                vero, temporibus, beatae fuga eos et explicabo minima, deleniti
                laboriosam aliquam consequuntur id? Omnis commodi blanditiis
                fuga perferendis quaerat esse voluptatem?
              </p>
            </div>
            <div className={styles.box}>
              <IoCartOutline className={styles.icon} />

              <h3>Missão</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                vero, temporibus, beatae fuga eos et explicabo minima, deleniti
                laboriosam aliquam consequuntur id? Omnis commodi blanditiis
                fuga perferendis quaerat esse voluptatem?
              </p>
            </div>

            <div className={styles.box}>
              <FiLock className={styles.icon} />

              <h3>Segurança</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                vero, temporibus, beatae fuga eos et explicabo minima, deleniti
                laboriosam aliquam consequuntur id? Omnis commodi blanditiis
                fuga perferendis quaerat esse voluptatem?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
