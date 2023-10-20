import { Link, NavLink, useLocation } from "react-router-dom"
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {

  const { user, logOut, toggleTheme } = useContext(AuthContext);
  const location = useLocation();

  // Logout Button
  const handleLogOut = () => {
    user &&
      logOut()
        .then(() => {
          toast.success("Logout successfull");
        })
        .catch(error => {
          toast.error(error);
          console.error(error);
        })
  }

  const navLinks = <>
    <li className="link link-hover"><NavLink to="/">Home</NavLink></li>
    <li className="link link-hover"><NavLink to="/addProduct">Add Product</NavLink></li>
    <li className="link link-hover"><NavLink to="/cart">My Cart</NavLink></li>
  </>


  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden pl-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box space-y-2 w-52 text-lg">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="text-xl md:text-2xl lg:text-3xl font-extrabold"><span className="text-secondary">x</span>Techno</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-lg flex items-center space-x-2">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end space-x-1">
        {user && <><span className="text-lg text-center text-neutral-600 hidden lg:block">{user.displayName}</span><hr /> </>}
        {user && <>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 h-10 rounded-full border border-secondary">
                <img src={user.photoURL} alt="" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-md w-52 text-xl">
              <li>{user?.displayName}</li>
              <li>
                <hr />
                <button onClick={handleLogOut} className="btn btn-ghost btn-sm rounded"><AiOutlineLogout /> Logout</button>
              </li>
            </ul>
          </div>
        </>}
        {user
          ? <button onClick={handleLogOut} className="btn btn-neutral rounded hidden lg:flex"><AiOutlineLogout />Logout</button>
          : <Link state={location.pathname} to="/login"><button className="btn btn-neutral rounded btn-sm md:btn-md"><AiOutlineLogin />Login</button></Link>
        }
        <div className="btn btn-sm btn-circle ml-2">
          <label className="swap swap-rotate">
            <input onClick={toggleTheme} type="checkbox" />
            <div className="swap-on"><MdDarkMode className="text-2xl" /></div>
            <div className="swap-off"><MdOutlineLightMode className="text-2xl" /></div>
          </label>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
