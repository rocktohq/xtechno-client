import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";

const AddProduct = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("https://xtechno-server.vercel.app/brands")
      .then(res => res.json())
      .then(data => setBrands(data))
  }, []);

  const handleAddProduct = e => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const short_description = form.short_description.value;
    const image = form.image.value;
    const price = form.price.value;

    // Validations
    if (name === "" && brand === "" && type === "" && rating === "" && short_description === "" && image === "" && price === "") return toast.error("All fields are required");
    else if (name === "") return toast.error("Product name is required");
    else if (brand === "") return toast.error("Product brand is required");
    else if (type === "") return toast.error("Product type is required");
    else if (rating === "") return toast.error("Product rating is required");
    else if (short_description === "") return toast.error("Product description is required");
    else if (image === "") return toast.error("Product image is required");
    else if (price === "") return toast.error("Product price is required");

    const product = { name, brand, type, rating: parseFloat(rating), short_description, image, price };
    // console.log(product)

    fetch("https://xtechno-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) toast.success("Product added");
        else toast.error("Soething went wrong");
      })

    form.reset();
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Add New Product</title>
      </Helmet>
      <section className="max-w-screen-sm mx-auto my-10">
        <form onSubmit={handleAddProduct} className="p-5 shadow-md rounded-md">
          <h3 className="text-xl font-semibold text-center mb-5">Add New Product</h3>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input type="text" name="name" placeholder="Product Name" className="input input-bordered focus:outline-none w-full" />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <select name="brand" className="select select-bordered focus:outline-none w-full">
                <option disabled selected>Brand</option>
                {brands.length > 0 &&
                  brands.map(brand => <option key={brand._id} value={brand.name}>{brand.name}</option>)
                }
              </select>
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <input type="text" name="type" placeholder="Type" className="input input-bordered focus:outline-none w-full" />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="text" name="price" placeholder="Price" className="input input-bordered focus:outline-none w-full" />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input type="text" name="rating" placeholder="Rating" className="input input-bordered focus:outline-none w-full" />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered focus:outline-none w-full" />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input type="text" name="image" placeholder="Image URL" className="input input-bordered focus:outline-none w-full" />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary text-white"><FaPlus />Add Product</button>
          </div>
        </form>
      </section>
    </HelmetProvider>
  )
}

export default AddProduct
