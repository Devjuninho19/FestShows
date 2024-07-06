import React, { useEffect, useState } from "react";
import Summary from "../../components/Summary/Summary";
import TableRow from "../../components/TableRow/TableRow";
import { api } from "../../Provider/Provider";
import "../../components/styles.scss";
const Cart = () => {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const [product, setProduct] = useState([1]);
  const productObject = {
    name: "produto",
    category: "categoria",
    price: randomNumber(90, 1200),
    quantity: 1,
  };
  const fetchData = () => {
    console.log("fetch data");
    api.get("/cart").then((response) => setProduct(response.data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleAddItem = () => {
    console.log("disparou handleAddItem");

    api.post("/cart", productObject).then((response) => {
      console.log(response);
      fetchData();
    });
  };
  const handleRemoveItem = () => {};
  const handleUpdateItem = () => {};
  return (
    <div>
      <main>
        <div>
          <section>
            <button
              onClick={handleAddItem}
              style={{ padding: "5px 10px", marginBottom: 15 }}
            >
              add cart
            </button>
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
