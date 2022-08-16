import React, { useEffect, useState } from 'react';
import fetchProducts from '../api/fetchProducts';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

export default function Products() {
  const [products, setProducts] = useState([]);

  const convertUrlImage = (urlImage) => {
    const urlWithBasePath = urlImage;
    const resultUrl = urlWithBasePath.replace(/^http[s]?:\/\/.+?\//, '');
    return resultUrl;
    // https://stackoverflow.com/questions/11550790/remove-hostname-and-port-from-url-using-regular-expression
  };

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <>
      <Navbar />
      { products.map(
        ({ price, url_image: urlImage, name, id }) => (
          <Card
            key={ id }
            index={ id }
            price={ price }
            urlImage={ convertUrlImage(urlImage) }
            name={ name }
          />),
      )}
      ,
    </>
  );
}
