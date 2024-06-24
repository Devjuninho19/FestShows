import React from "react";
import styles from "./Cart.module.css";
import ingresso from "../../images/ingresso.png";
const Cart = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.pagetitle}>Disponíveis</div>
        <div className={styles.content}>
          <div className={styles.table}>
            <section>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                    <th>-</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className={styles.product}>
                        <img src="https://picsum.photos/100/120" alt="imagem" />
                        <div className={styles.info}>
                          <div className={styles.name}>Nome do produto</div>
                          <div className={styles.category}>Categoria</div>
                        </div>
                      </div>
                    </td>
                    <td>R$ 120</td>
                    <td>
                      <div className={styles.qty}>
                        <span>2</span>
                      </div>
                    </td>
                    <td>R$ 240</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className={styles.product}>
                        <img src="https://picsum.photos/100/120" alt="imagem" />
                        <div className={styles.info}>
                          <div className={styles.name}>Nome do produto</div>
                          <div className={styles.category}>Categoria</div>
                        </div>
                      </div>
                    </td>
                    <td>R$ 120</td>
                    <td>
                      <div className={styles.qty}>
                        <span>2</span>
                      </div>
                    </td>
                    <td>R$ 240</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <div className={styles.product}>
                        <div className={styles.info}>
                          <div className={styles.name}>Nome do produto</div>
                          <div className={styles.category}>Categoria</div>
                        </div>
                      </div>
                    </td>
                    <td>R$ 120</td>
                    <td>
                      <div className={styles.qty}>
                        <span>2</span>
                      </div>
                    </td>
                    <td>R$ 240</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
          <div>
            <aside>Resumo das compras</aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
