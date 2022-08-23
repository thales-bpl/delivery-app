export default function convertToMoreZeros(NumberProp) {
  const empStr = '';
  const str = empStr + NumberProp;
  const pad = '0000';
  const NumPedido = pad.substring(0, pad.length - str.length) + str;

  // https://stackoverflow.com/questions/5366849/convert-1-to-0001-in-javascript

  return NumPedido;
}
