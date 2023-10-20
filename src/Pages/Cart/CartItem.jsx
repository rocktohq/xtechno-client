import PropTypes from 'prop-types'
import StarRatings from 'react-star-ratings';
import { AiFillDelete } from "react-icons/ai"

const CartItem = ({ product, handleRemove, cartId }) => {
  const { name, image, price, rating, type, brand } = product;

  return (
    <div className='p-5 shadow-md rounded-md flex flex-col lg:flex-row lg:items-center gap-5'>
      <figure>
        <img className='lg:w-full lg:h-52 rounded-t-md' src={image} alt="" />
      </figure>
      <div>
        <h2 className='text-xl font-bold'>{name}</h2>
        <div className='flex justify-between items-center font-medium'>
          <span>Brand: {brand}</span>
          <span>Type: {type}</span>
        </div>
        <div className='flex justify-between items-center'>
          <p>$<span className='text-xl font-semibold'>{price}</span></p>
          <StarRatings
            rating={parseFloat(rating)}
            starDimension="20px"
            starSpacing="1px"
            starRatedColor="#fc7914"
          />
        </div>
        <button onClick={() => handleRemove(cartId)} className='btn btn-error rounded mt-5'><AiFillDelete /> Remove Product</button>
      </div>
    </div>
  )
}

export default CartItem

CartItem.propTypes = {
  product: PropTypes.object,
  handleRemove: PropTypes.func,
  cartId: PropTypes.string
}