import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useState } from 'react';

import '../styles/main.css';

export default function App() {

  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <div>
      <Navbar quantity={cartQuantity}/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
