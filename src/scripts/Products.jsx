import { useState, useEffect } from 'react';
import FetchItems from './fetchItems';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setProducts([]);
    async function getData() {
      const data = await FetchItems();
      setProducts(data);
      setIsLoading(false);
    }
    getData();
  }, []);

  return (
    <div>
      <h1 className='title'>Products</h1>
      {!isLoading && (
        console.log(products)
      )}
    </div>
  );
}
