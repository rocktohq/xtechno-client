import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import {BsFire} from "react-icons/bs";

const TopSoldProduct = () => {

  const [topProduct, setTopProduct] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/products/652f79821a34485ec679a106")
      .then(res => res.json())
      .then(data => setTopProduct(data))
  }, []);

  console.log(topProduct)

  return (
    <>
      {
        topProduct && <div className="flex flex-col lg:flex-row justify-around items-center gap-10">
          <div className="flex-1">
            <h2 className="text-4xl font-bold flex items-center"><BsFire className="text-error" /> <span>Top Selling Product</span></h2>
            <p className="mt-5">
              <span className="font-bold">{topProduct.name}</span> got over 1M+ orders and listed as top selling product. {topProduct.short_description}.. Interested? View the product details for more infomation.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-10 flex-1">
            <figure>
              <img className="lg:h-96" src={topProduct.image} alt="" />
            </figure>
            <div>
              <h2 className="text-2xl font-bold">{topProduct.name}</h2>
              <div className="space-y-2">
                <p>Brand: {topProduct.brand}</p>
                <p>Price: $<span className="text-xl font-semibold">{topProduct.price}</span></p>
                <Link to={`/products/${topProduct._id}`}><button className="mt-5 btn btn-secondary btn-outline rounded">View Product</button></Link>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default TopSoldProduct
