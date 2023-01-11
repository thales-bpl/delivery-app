import PropTypes from 'prop-types';

export default function TableBody({ userRole, page, products }) {
  return (
    <tbody className="checkout_table_body">
      {
        products.map((product, index) => (
          <tr
            key={ index }
          >
            <td
              data-testid={
                `${userRole}_${page}__element-order-table-item-number-${index}`
              }
            >
              { index + 1 }
            </td>

            <td
              data-testid={
                `${userRole}_${page}__element-order-table-name-${index}`
              }
            >
              { product.name }
            </td>

            <td
              data-testid={
                `${userRole}_${page}__element-order-table-quantity-${index}`
              }
            >
              { product.quantity }
            </td>

            <td
              data-testid={
                `${userRole}_${page}__element-order-table-unit-price-${index}`
              }
            >
              { Number(product.price).toFixed(2).replace('.', ',') }
            </td>

            <td
              data-testid={
                `${userRole}_${page}__element-order-table-sub-total-${index}`
              }
            >
              { (product.price * product.quantity).toFixed(2).replace('.', ',') }
            </td>
          </tr>
        ))
      }
    </tbody>
  );
}

TableBody.propTypes = {
  userRole: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  })).isRequired,
};
