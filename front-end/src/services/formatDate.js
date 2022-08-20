export default function formatDate(date) {
  const dd = date.toString().split('-')[2].slice(0, 2);
  const mm = date.toString().split('-')[1];
  const yyyy = date.toString().split('-')[0];
  return `${dd}/${mm}/${yyyy}`;
}
