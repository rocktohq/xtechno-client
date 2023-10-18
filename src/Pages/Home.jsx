import { useLoaderData } from "react-router-dom"
import Banner from "../components/Banner/Banner"

const Home = () => {

  const brands = useLoaderData()
  console.log(brands)

  return (
    <>
      <Banner></Banner>
    </>
  )
}

export default Home
