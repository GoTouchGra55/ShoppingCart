import App from "./App";
import Categories from "./Categories";
import ErrorPage from "./ErrorPage";
import Products from "./Products";
import Trending from "./Trending";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {path: "/trending", element: <Trending />},
      {path: "/products", element: <Products />},
      {path: "/categories", element: <Categories />}
    ]
  }
]

export default routes;