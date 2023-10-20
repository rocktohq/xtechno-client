import { useLoaderData } from "react-router-dom"
import Banner from "../../components/Banner/Banner"
import BrandCard from "./BrandCard";
import MarketPlace from "./MarketPlace";
import { Helmet, HelmetProvider } from "react-helmet-async";
import TopSoldProduct from "./TopSoldProduct";

const Home = () => {

  const brands = useLoaderData();
  // console.log(brands)

  return (
    <HelmetProvider>
      <Helmet>
        <title>xTechno - Home</title>
      </Helmet>
      <Banner></Banner>
      <section className="max-w-screen-2xl mx-auto px-3 my-16">
        <TopSoldProduct></TopSoldProduct>
      </section>
      <section className="max-w-screen-2xl mx-auto px-3 my-16">
        <h2 className="text-center font-bold text-3xl lg:text-5xl divider mb-10">Browse Brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            brands?.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
          }
        </div>
      </section>
      <section className="bg-base-200 py-16">
        <div className="max-w-screen-2xl mx-auto px-3">
          <MarketPlace></MarketPlace>
        </div>
      </section>
    </HelmetProvider>
  )
}

export default Home
