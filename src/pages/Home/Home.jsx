import React from "react";
import styles from "./Home.module.css";
import pessoa from "../../images/pessoa.png"
import { FaCode } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";

//hooks

//componentes
const Home = () => {
 
  return (
<div>
  <section>
    <div className="interface">
      <div className="interface">
        <div className={styles.flex}>
          <div className={styles.topo}>
<h1>A MELHOR EXPERIÊNCIA EM SHOWS <span>.</span></h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
  Quos consequuntur ratione assumenda, 
  culpa aliquam ea libero id doloribus nobis voluptates. 
  Vitae quas repellat fuga a illum ipsum, nobis nam hic.</p>
  <div className="btn-contato">
       <a>
        <button className={styles.btn}>Acesse os Eventos</button>
       </a>
  </div>
  <div className={styles.img}>
    <img src={pessoa} alt="pessoa"/>
  </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className={styles.especialidades}>
    <div className={styles.interface}>
      <h2 className={styles.titulo}>NOSSAS <span>VANTAGENS</span></h2>
<div className={styles.flex}>
  <div className={styles.box}>
    <h3>webSite</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero, temporibus, beatae fuga eos et explicabo minima, deleniti laboriosam aliquam consequuntur id? Omnis commodi blanditiis fuga perferendis quaerat esse voluptatem?</p>
  <FaCode />


  </div>
  <div className={styles.box}>
    <h3>webSite</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero, temporibus, beatae fuga eos et explicabo minima, deleniti laboriosam aliquam consequuntur id? Omnis commodi blanditiis fuga perferendis quaerat esse voluptatem?</p>
    <IoCartOutline />



  </div>
  
  <div className={styles.box}>
    <h3>webSite</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero, temporibus, beatae fuga eos et explicabo minima, deleniti laboriosam aliquam consequuntur id? Omnis commodi blanditiis fuga perferendis quaerat esse voluptatem?</p>
    <FaWordpress />



  </div>

</div>
    </div>
  </section>
</div>
  );
};

export default Home;
