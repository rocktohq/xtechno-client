import { useLoaderData } from "react-router-dom"

const UpdateProduct = () => {

  const product = useLoaderData();
  console.log(product);

  return (
    <div>
      Update Product
    </div>
  )
}

export default UpdateProduct
