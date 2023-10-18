import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Brand from "../Pages/Brand/Brand";
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Product from "../Pages/Product/Product";
import AddProduct from './../Pages/AddProduct/AddProduct';
import UpdateProduct from './../Pages/UpdateProduct/UpdateProduct';

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
        path: "/:brand",
        element: <Brand></Brand>,
        loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.brand}`)
      },
      {
        path: "/product/:id",
        element: <Product></Product>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
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
