import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='Navbar'>
      <Link to='/' className="no-decor">
        <div className='branding'>
          <img className='logo' src='/src/Assets/shopping-bag.png' alt='Logo' />
          <h1 className='brand'>Shopify</h1>
        </div>
      </Link>
      <nav className='tabs'>
        <input type="text" className="search" placeholder="Summer clothes"/>
        <Link to="/trending" className="tab decor">
          <h1 className="Trending">Trending</h1>
        </Link>
        <Link to="/products" className="tab decor">
          <h1 className="products">Products</h1>
        </Link>
        <Link to="/categories" className="tab decor">
          <h1 className="categories">Categories</h1>
        </Link>
      </nav>
    </div>
  );
}
