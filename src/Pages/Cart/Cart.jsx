import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CartItem from "./CartItem";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/cart/${user.email}`)
      .then(res => res.json())
      .then(data => setCartItems(data))
  }, []);

  // console.log(cartItems)

  return (
    <HelmetProvider>
      <Helmet>
        <title>My Cart</title>
      </Helmet>
      <section className="max-w-screen-2xl mx-auto px-3 my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {
            cartItems?.length > 0 &&
            cartItems.map(cartItem => <CartItem key={cartItem._id} product={cartItem.product}></CartItem>)
          }
        </div>
      </section>
    </HelmetProvider>
  )
}

export default Cart
