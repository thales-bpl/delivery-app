import React, { useState, useEffect, useContext } from 'react';
// import { apiSellers } from '../api/apiSellers';
import FinishOrderBtn from '../components/FinishOrderBtn';
import MainContext from '../store/Context';
import RemoveBtn from '../components/RemoveBtn';
import getLocalStorage from '../services/getLocalStorage';

export default function Checkout() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [sellers, setSellers] = useState([]);
  const [adressInput, setAdressInput] = useState('');
  const [adssNumberInput, setAdssNumberInput] = useState('');
  const { productsCart, setProductsCart, setSelectedSeller } = useContext(MainContext);

  const calculateTotal = () => {
    let total = 0;
    productsCart.forEach(({ quantity, price }) => {
      total += (price * quantity);
    });
    setTotalPrice(total.toFixed(2));
  };

  const getProductsCart = () => {
    const products = getLocalStorage('productsCart');
    console.log(products);
    if (products) {
      setProductsCart(products);
    }
  };

  // const getSellers = () => {
  //   const data = apiSellers();
  //   setSellers(data);
  // };

  useEffect(() => {
    // getSellers();
    getProductsCart();
    calculateTotal();
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
                <td>{ index + 1 }</td>
                <td>{ product.name }</td>
                <td>{ product.quantity }</td>
                <td>{ Number(product.price).toFixed(2) }</td>
                <td>{ (product.price * product.quantity).toFixed(2) }</td>
                <td>
                  <RemoveBtn id={ product.id } />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <aside className="checkout_total_div">{`Total: ${totalPrice}`}</aside>
      <form>
        <h2>Detalhes e Endereço para Entrega</h2>
        <br />
        <label htmlFor="checkout_seller_option" className="label">
          P.Vendedora Responsável:
          <select className="checkout_select" id="checkout_seller_option">
            {
              sellers.map((seller) => (
                <option
                  key={ seller.id }
                  onChange={ setSelectedSeller(seller.id) }
                >
                  { seller.name }
                </option>
              ))
            }
            <option>Algum vendedor qualquer</option>
            <option>Outro vendedor qualquer</option>
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
