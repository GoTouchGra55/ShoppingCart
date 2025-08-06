import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar({ cartQuantity = 0 }) {
  return (
    <div className='Navbar'>
      <Link to='/' className='no-decor'>
        <div className='branding'>
          <img className='logo' src='/public/shopping-bag.png' alt='Logo' />
          <h1 className='brand'>Shopify</h1>
        </div>
      </Link>
      <nav className='tabs'>
        <Link to='/products' className='tab decor'>
          <h1 className='products'>Products</h1>
        </Link>
        <Link to='/categories' className='tab decor'>
          <h1 className='categories'>Categories</h1>
        </Link>
        <Link to='/cart' className='tab decor'>
          <h1 className='cart'>
            Cart
            <span className='cart-icon'>
              <img
                src='../src/Assets/carticon.png'
                alt='Icon of a cart'
                className='cartico'
              />
            </span>
          </h1>
          {cartQuantity > 0 && (
            <div className='badge-bg'>
              <span className='cart-badge'>
                {cartQuantity < 100 ? cartQuantity : '99+'}
              </span>
            </div>
          )}
        </Link>
      </nav>
    </div>
  );
}
