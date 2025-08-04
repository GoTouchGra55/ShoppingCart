import App from './App';
import Categories from './Categories';
import ErrorPage from './ErrorPage';
import Products from './Products';
import Cart from './Cart';
import Home from './Homepage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/categories', element: <Categories /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
];

export default routes;
