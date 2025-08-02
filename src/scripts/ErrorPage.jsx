import '../styles/errorpage.css';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="Error">
      <h1 className='Topic'>404</h1>
      <h1 className="Desc">Looks like this page doesn't exist.</h1>
      <Link to='/'>
        <button>Go back</button>
      </Link>
    </div>
  );
}
