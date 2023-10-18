import { useLoaderData } from "react-router-dom"

const Product = () => {

  const product = useLoaderData();
  console.log(product);

  return (
    <div>

    </div>
  )
}

export default Product
