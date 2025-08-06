import { useState, useEffect } from 'react';
import FetchItems from './fetchItems';
import DisplayProducts from './DisplayProducts';
import '../styles/loader.css';

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
    <div className='main'>
      <h1 className='title'>Products</h1>
      {isLoading ? (
        <div className='spinDiv'>
          <div class='spinner' />
        </div>
      ) : (
        <DisplayProducts products={products} />
      )}
    </div>
  );
}
