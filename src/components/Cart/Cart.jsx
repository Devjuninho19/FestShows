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
                        <button>+</button>
                        <span>2</span>
                        <button>-</button>
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
                        <button>+</button>
                        <span>2</span>
                        <button>-</button>
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
                        <button>+</button>
                        <span>2</span>
                        <button>-</button>
                      </div>
                    </td>
                    <td>R$ 240</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
          <aside className={styles.aside}>
            <div className={styles.box}>
              <header>Resumo da compra</header>
              <div className={styles.info}>
                <div>
                  <span>sub-total</span>
                  <span>R$ 418</span>
                </div>

                <div>
                  <button>Adicionar cupom de desconto</button>
                </div>
              </div>
              <footer>
                <span>Total</span>
                <span>R$ 418</span>
              </footer>
            </div>
            <button className={styles.buton}>Finalizar Compra</button>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Cart;
