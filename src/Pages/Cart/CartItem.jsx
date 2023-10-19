import PropTypes from 'prop-types'
import StarRatings from 'react-star-ratings';

const CartItem = ({ product }) => {
  const { _id, name, image, price, rating, type, brand } = product;


  return (
    <div className='p-5 shadow-md rounded-md flex flex-col lg:flex-row gap-5'>
      <figure>
        <img className='w-full h-52 rounded-t-md' src={image} alt="" />
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
      </div>
    </div>
  )
}

export default CartItem

CartItem.propTypes = {
  product: PropTypes.object
}