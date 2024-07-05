import React, { useEffect, useState } from "react";
import Summary from "../../components/Summary/Summary";
import TableRow from "../../components/TableRow/TableRow";
import { api } from "../../Provider/Provider";
import "../../components/styles.scss";
const Cart = () => {
  const [product, setProduct] = useState([]);
  const fetchData = () => {
    api.get("/cart").then((response) => setProduct(response.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <main>
        <div>
          <section>
            <table>
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
                {product.map((item, index) => (
                  <TableRow key={index} item={item} />
                ))}
                {product.length === 0 && (
                  <tr>
                    <td>Carrinho Vazio</td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
          <aside>
            <Summary />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Cart;
