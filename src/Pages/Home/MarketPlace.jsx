import MarketPlaceImg from "../../assets/largest.jpg"
import { FaShippingFast, FaMoneyCheckAlt } from "react-icons/fa"
import { MdLocalShipping } from "react-icons/md"

const MarketPlace = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
      <figure className="flex-1">
        <img className="rounded-md" src={MarketPlaceImg} alt="" />
      </figure>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-center lg:text-right mb-10">We are the largest tech marketplace in the world</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="bg-base-100 p-3 rounded">
            <FaShippingFast className="text-6xl mx-auto" />
            <h3 className="text-center text-lg">Worldwide Shipping</h3>
          </div>
          <div className="bg-base-100 p-3 rounded">
            <MdLocalShipping className="text-6xl mx-auto" />
            <h3 className="text-center text-lg">Fastest Delivery</h3>
          </div>
          <div className="bg-base-100 p-3 rounded">
            <FaMoneyCheckAlt className="text-6xl mx-auto" />
            <h3 className="text-center text-lg">10 Days Money Back</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketPlace
