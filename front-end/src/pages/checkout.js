import React, { useState, useEffect, useContext } from 'react';
import FinishOrderBtn from '../components/FinishOrderBtn';
import MainContext from '../store/Context';

export default function Checkout() {
  // const [produtos, setProdutos] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [seller, setSeller] = useState('');
  const [adressInput, setAdressInput] = useState('');
  const [adssNumberInput, setAdssNumberInput] = useState('');
  const { productsCart } = useContext(MainContext);

  useEffect(() => {
    // falta implementar
    console.log(productsCart);
  }, []);

  return (
    <main className="checkout_main">
      Finalizar Pedido
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
        {/* <tbody className="checkout_table_body">
          {
            products.map((product, index) => (
              <tr
                data-testid={`element-order-table-name-${index}`}
                key={ index }
              >
                <td>{ item }</td>
                <td>{ product.name }</td>
                { name or description?? }
                <td>{ product.quantity }</td>
                <td>{ product.unitValue }</td>
                <td>{ subTotal }</td>
                <td>{ Botão excluir }</td>
              </tr>
            ))
          }
        </tbody> */}
        <div className="checkout_total_div">Total: R$XX,XX</div>
      </table>
      Detalhes e Endereço para Entrega
      <form>
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
