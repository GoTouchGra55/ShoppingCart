import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

import '../styles/main.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
