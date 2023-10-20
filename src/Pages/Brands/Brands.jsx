import { useLoaderData, useParams } from "react-router-dom"
import BrandProductCard from "./BrandProductCard";
import Slider from "../../components/Slider/Slider";

const Brands = () => {

  const products = useLoaderData();
  const brandName = useParams();

  return (
    <section className="max-w-screen-2xl mx-auto py-10">
      <div>
        {
          <Slider products={products}></Slider>
        }
      </div>
      <div className="py-10 bg-base-200">
        <h2 className="text-center font-bold text-4xl divider mb-10">All {brandName.brand} Products</h2>
        {
          products.length > 0
            ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-3">
              {
                products?.map(product => <BrandProductCard key={product._id} product={product}></BrandProductCard>)
              }
            </div>
            : <div className="my-10">
              <h3 className="text-center text-3xl font-bold">No Product Found!</h3>
            </div>
        }

      </div>
    </section>
  )
}

export default Brands
