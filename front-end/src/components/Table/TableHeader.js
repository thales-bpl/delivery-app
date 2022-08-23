// Table Header for products, can be used either on checkout or orderDefails page

export default function TableHeader() {
  return (
    <thead className="table_head">
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
      </tr>
    </thead>
  );
}
