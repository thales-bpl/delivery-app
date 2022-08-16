import React, { useState, useEffect, useContext } from 'react';
import FinishOrderBtn from '../components/FinishOrderBtn';
import MainContext from '../store/Context';
import RemoveBtn from '../components/RemoveBtn';
// import getLocalStorage from '../services/getLocalStorage';

export default function Checkout() {
  // const [total, setTotal] = useState(0);
  // const [seller, setSeller] = useState('');
  const [adressInput, setAdressInput] = useState('');
  const [adssNumberInput, setAdssNumberInput] = useState('');
  const { productsCart, setProductsCart } = useContext(MainContext);

  const products = [ // mock
    {
      id: 1,
      name: 'Skol Lata 250ml',
      price: 2.20,
      quantity: 4,
    },
    {
      id: 11,
      name: 'Stella Artois 275ml',
      price: 3.49,
      quantity: 12,
    },
  ];

  const calculateTotal = () => {
    let total = 0;
    productsCart.forEach(({ quantity, price }) => {
      total += (price * quantity);
    });
    return total.toFixed(2);
  };

  const getProductsCart = () => {
    // const products = getLocalStorage('cart');
    // if (products) {
    //   setProductsCart(products);
    // }
    setProductsCart(products);
  };

  useEffect(() => {
    getProductsCart();
  }, []);
  console.log(productsCart);

  return (
    <main className="checkout_main">
      <h2>Finalizar Pedido</h2>
      <table className="checkout_produts_section">
        <thead className="checkout_table_head">
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody className="checkout_table_body">
          {
            productsCart.map((product, index) => (
              <tr
                data-testid={ `element-order-table-name-${index}` }
                key={ index }
              >
                <td>{ index }</td>
                <td>{ product.name }</td>
                <td>{ product.quantity }</td>
                <td>{ product.price }</td>
                <td>{ (product.price * product.quantity).toFixed(2) }</td>
                <td>
                  <RemoveBtn id={ product.id } />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <aside className="checkout_total_div">{`Total: ${calculateTotal()}`}</aside>
      <form>
        <h2>Detalhes e Endereço para Entrega</h2>
        <br />
        <label htmlFor="checkout_seller_option" className="label">
          P.Vendedora Responsável:
          <select className="checkout_select">
            <option id="checkout_seller_option">Algum vendedor qualquer</option>
            <option id="checkout_seller_option">Outro vendedor qualquer</option>
          </select>
        </label>
        <label htmlFor="checkout_adressInput">
          Endereço
          <input
            id="checkout_adressInput"
            type="text"
            value={ adressInput }
            onChange={ ({ target: { value } }) => setAdressInput(value) }
            placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
          />
        </label>
        <label htmlFor="checkout_adssNumberInput">
          Número
          <input
            id="checkout_adssNumberInput"
            type="text"
            value={ adssNumberInput }
            onChange={ ({ target: { value } }) => setAdssNumberInput(value) }
            placeholder="198"
          />
        </label>
      </form>
      <FinishOrderBtn />
    </main>
  );
}
