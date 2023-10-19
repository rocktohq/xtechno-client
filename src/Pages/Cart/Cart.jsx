import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CartItem from "./CartItem";
import toast from "react-hot-toast";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch(`https://xtechno-server.vercel.app/cart/${user.email}`)
      .then(res => res.json())
      .then(data => setCartItems(data))
  }, []);

  // console.log(cartItems)
  const handleRemove = (_id) => {
    fetch(`https://xtechno-server.vercel.app/cart/${_id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          toast.success("Product removed from Cart");
          const remaining = cartItems.filter(cartItem => cartItem._id !== _id);
          setCartItems(remaining);
        }
        else {
          toast.error("Something went wrong");
          console.log(data);
        }
      })
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>My Cart</title>
      </Helmet>
      <section className="max-w-screen-2xl mx-auto px-3 my-10">

        {
          cartItems?.length > 0
            ? <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {cartItems.map(cartItem => <CartItem key={cartItem._id} product={cartItem.product} cartId={cartItem._id} handleRemove={handleRemove}></CartItem>)}
            </div>
            : <div className="my-10">
              <h2 className="text-3xl font-bold text-center">Cart is Empty!</h2>
            </div>

        }

      </section>
    </HelmetProvider>
  )
}

export default Cart
