import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom"
import StarRatings from "react-star-ratings";
import { AuthContext } from './../../providers/AuthProvider';
import toast from "react-hot-toast";

const Product = () => {

  const { user } = useContext(AuthContext);
  const product = useLoaderData();
  const { name, image, short_description, price, rating, type, brand } = product;

  const handleAddToCart = (user, product) => {
    const cart = {
      user_email: user.email,
      product
    };
    console.log(cart);
    fetch("https://xtechno-server.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(cart)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) toast.success("Product added to cart");
        else toast.error("Soething went wrong");
      })
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img src={image} className="max-w-md rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{short_description}</p>
            <div className='font-medium space-y-2'>
              <p>Brand: <Link className="link link-hover text-blue-600 font-medium" to={`/brands/${brand}`}>{brand}</Link></p>
              <p>
                <span>Type: {type}</span>
              </p>
            </div>
            <div className="space-y-2">
              <p>Price: $<span className='text-xl font-semibold'>{price}</span></p>
              <StarRatings
                rating={parseFloat(rating)}
                starDimension="20px"
                starSpacing="1px"
                starRatedColor="#fc7914"
              />
            </div>
            <button onClick={() => handleAddToCart(user, product)} className="btn btn-secondary rounded mt-5"><FaCartPlus /> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
