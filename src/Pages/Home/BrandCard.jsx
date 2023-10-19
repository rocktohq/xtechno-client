import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {

  const { name, logo } = brand;

  return (
    <Link to={`/brands/${name}`} className="shadow-md rounded-md bg-base-200 hover:bg-base-300 p-5 flex flex-col items-center gap-10">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-3">{name}</h2>
        <p>Browse all {name} products</p>
      </div>
      <figure>
        <img className="mx-auto w-4/5" src={logo} alt={name} />
      </figure>
    </Link>
  )
}

export default BrandCard

BrandCard.propTypes = {
  brand: PropTypes.object
}