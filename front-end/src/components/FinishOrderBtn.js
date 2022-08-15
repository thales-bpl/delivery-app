import { useNavigate } from 'react-router-dom';

export default function FinishOrderBtn() {
  const navigate = useNavigate();
  const handleClick = () => {
    // implementar
    navigate(`/customer/orders/${id}`);
  };

  return (
    <button
      type="button"
      className="finish_order_btn"
      onClick={ handleClick }
    >
      Finalizar Pedido
    </button>
  );
}
