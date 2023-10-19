import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import PropTypes from 'prop-types'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Slider = ({ products }) => {
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
          products?.slice(0, 3).map(product => <SwiperSlide key={product._id} style={{padding: "20px 0px"}}>
            <div className='flex flex-col lg:flex-row justify-around items-center'>
              <figure>
                <img className='h-64 rounded-md' src={product.image} alt="" />
              </figure>
              <div>
                <h3 className='font-bold text-2xl'>{product.name}</h3>
                <p>Price: $<span className='text-xl font-semibold'>{product.price}</span></p>
                <Link to={`/products/${product._id}`}><button className='btn btn-secondary rounded my-5'>Shop Now</button></Link>
              </div>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  )
}

export default Slider

Slider.propTypes = {
  products: PropTypes.array
}