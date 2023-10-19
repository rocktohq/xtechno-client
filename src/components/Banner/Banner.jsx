import BannerImg from "../../assets/banner-1.jpg"
const Banner = () => {
  return (
    <section className="max-w-screen-2xl mx-auto my-10">
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${BannerImg})` }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Tech Essentials Redefined</h1>
            <p className="mb-5">Your Destination for Revolutionary Electronics and Gadgets</p>
            <button className="btn btn-primary rounded">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
