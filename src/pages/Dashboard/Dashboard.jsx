import React from "react";
import styles from "./Dashboard.module.css";
import { useState } from "react";
//import { Link } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
const Dashboard = () => {
  const [loading] = useState();

  return (
    <div className={styles.dashboard}>
      <div>{loading && <p>Carregando..</p>}</div>
      <Cart />
    </div>
  );
};

export default Dashboard;
