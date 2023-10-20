import PropTypes from 'prop-types'
import { AiFillEye, AiFillSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const BrandProductCard = ({ product }) => {

  const { _id, name, image, brand, type, price, rating } = product;

  return (
    <div className="rounded-md shadow-md bg-base-100">
      <figure className='relative'>
        <img className='lg:w-full lg:h-52 rounded-t-md' src={image} alt={name} />
        <p className='bg-secondary font-medium text-lg text-center px-3 py-1 absolute top-0 left-0 rounded-tl-md'>{brand}</p>
      </figure>
      <div className='p-5 space-y-2'>
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
        <div className='flex flex-col lg:flex-row gap-2 justify-between'>
          <Link to={`/products/${_id}`}><button className='btn btn-info rounded w-full'><AiFillEye /> View Details</button></Link>
          <Link to={`/updateProduct/${_id}`}><button className='btn btn-neutral rounded w-full'><AiFillSetting /> Update</button></Link>
        </div>
      </div>
    </div>
  )
}

export default BrandProductCard

BrandProductCard.propTypes = {
  product: PropTypes.object
}