import '../styles/home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='hero'>
      <h1 className='headline'>Your wallet might cry, but your style won't</h1>
      <Link to='/products' className='cta-button'>
        Start Shopping Now
      </Link>
    </div>
  );
}
