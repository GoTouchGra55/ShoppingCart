import '../styles/home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='hero'>
      <h1 className='headline'>Style. Simplicity. Shipped.</h1>
      <Link to='/products' className='cta-button'>
        Start Shopping Now
      </Link>
    </div>
  );
}
