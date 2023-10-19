import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Brands from "../Pages/Brands/Brands";
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Product from "../Pages/Product/Product";
import AddProduct from './../Pages/AddProduct/AddProduct';
import UpdateProduct from './../Pages/UpdateProduct/UpdateProduct';
import Cart from './../Pages/Cart/Cart';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brands")
      },
      {
        path: "/brands/:brand",
        element: <Brands></Brands>,
        loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.brand}`)
      },
      {
        path: "/products/:id",
        element: <PrivateRoute><Product></Product></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/updateProduct/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        // loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  }
]);

export default router
