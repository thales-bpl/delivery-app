import React, { useState, useEffect, useContext } from 'react';
import { apiSellers } from '../api/apiSellers';
import FinishOrderBtn from '../components/FinishOrderBtn';
import MainContext from '../store/Context';
import RemoveBtn from '../components/RemoveBtn';
import getLocalStorage from '../services/getLocalStorage';
import Navbar from '../components/Navbar';

export default function Checkout() {
  const [totalPrice, setTotalPrice] = useState('0');
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
    if (products) {
      setProductsCart(products);
    }
  };

  const getSellers = async () => {
    const data = await apiSellers();
    setSellers(data);
    setSelectedSeller(data[0].id);
  };

  const handleSellerChange = (id) => {
    setSelectedSeller(id);
  };

  useEffect(() => {
    getSellers();
    getProductsCart();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [productsCart]);

  return (
    <main className="checkout_main">
      <Navbar />
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
                key={ index }
              >
                <td>{ index + 1 }</td>

                <td
                  data-testid={ `customer_checkout__element-order-table-name-${index}` }
                >
                  { product.name }
                </td>

                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  { product.quantity }
                </td>

                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  { Number(product.price).toFixed(2) }
                </td>

                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  { (product.price * product.quantity).toFixed(2) }
                </td>

                <td
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
                >
                  <RemoveBtn id={ product.id } />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <span
        data-testid="customer_checkout__element-order-total-price"
        className="checkout_total_div"
      >
        {`Total: ${totalPrice}`}
      </span>
      <form>
        <h2>Detalhes e Endereço para Entrega</h2>
        <br />
        <label htmlFor="checkout_seller_option" className="label">
          P.Vendedora Responsável:
          <select
            data-testid="customer_checkout__select-seller"
            className="checkout_select"
            id="checkout_seller_option"
          >
            {
              sellers.map((seller) => (
                <option
                  key={ seller.id }
                  onChange={ () => handleSellerChange(seller.id) }
                  value={ seller.id }
                >
                  { seller.name }
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="checkout_adressInput">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
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
            data-testid="customer_checkout__input-addressNumber"
            id="checkout_adssNumberInput"
            type="text"
            value={ adssNumberInput }
            onChange={ ({ target: { value } }) => setAdssNumberInput(value) }
            placeholder="198"
          />
        </label>
      </form>
      <FinishOrderBtn
        data-testid="customer_checkout__button-submit-order"
        adressInput={ adressInput }
        adssNumberInput={ adssNumberInput }
        totalPrice={ totalPrice }
      />
    </main>
  );
}
