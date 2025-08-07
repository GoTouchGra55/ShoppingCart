import '../styles/productCard.css';
import AddToCart from './AddToCart';

export default function DisplayProducts({ products, setCartQuantity }) {
  const handleClick = (prod) => {
    AddToCart(prod);
    setCartQuantity((prev) => prev + 1);
  };

  return (
    <div className='products'>
      {products.map((product, index) => (
        <div className='productCard' key={index}>
          <img
            src={product.image}
            alt='Image of a product'
            className='productImg'
          />
          <h2 className='prodTitle'>{product.title}</h2>
          <h4 className='prodPrice'>${product.price}</h4>
          <h4 className='rating'>
            ⭐{product.rating.rate}
            <span className='count'>({product.rating.count})</span>
          </h4>
          <h4 className='prodCtg'>Category: {product.category}</h4>
          <button className='Add' onClick={() => handleClick(product)}>
            + Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
