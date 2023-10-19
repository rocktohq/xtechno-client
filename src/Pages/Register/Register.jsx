import { Helmet, HelmetProvider } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const Register = () => {
  const { registerUser, profileUpdate } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const loginState = location.state ? location.state : "/";

  const handleRegister = e => {
    e.preventDefault();

    // User Data from the Form
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Validation
    if (name === "" && photo === "" && email === "" && password === "") {
      return toast.error("All fields are required!");
    } else if (name === "") {
      return toast.error("Please provide your name!");
    } else if (photo === "") {
      return toast.error("Please provide your photo URL!");
    } else if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png|webp)/.test(photo)) {
      return toast.error("Please provide a valid photo URL!");
    } else if (email === "") {
      return toast.error("Please provide your email!");
    } else if (password === "") {
      return toast.error("Password is required!");
    } else if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long!");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error("Password must have an uppercase letter!");
    } else if (!/[!@#$%^&*]/.test(password)) {
      return toast.error("Password must have a special character!");
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return toast.error("Please provide an valid email!");
    }

    // No Error: Now Register the User
    // Loading
    toast.loading("Registering User...");
    registerUser(email, password)
      .then(() => {
        profileUpdate(name, photo)
          .then(() => {
            toast.dismiss();
            toast.success("Registration Successfull");
            form.reset();
            navigate(location.state);
          })
          .catch(error => {
            toast.dismiss();
            toast.error(error.message);
            console.error(error.message);
          })
      })
      .catch(error => {
        toast.dismiss();
        toast.error(error.message);
        console.error(error.message)
      })
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <section className="py-10 bg-base-200">
        <div className="max-w-lg mx-auto">
          <div className="card w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="divider text-xl font-bold">User Registration</h2>
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" placeholder="Full Name" className="input input-bordered focus:outline-none" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered focus:outline-none" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="Email" className="input input-bordered focus:outline-none" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="password" placeholder="Password" className="input input-bordered focus:outline-none" />
                </div>
                <p className="mt-3">&#187; Already have an account?&nbsp;
                  <Link state={loginState} to="/login" className="link link-hover">Login here.</Link>
                </p>
                <div className="form-control mt-6">
                  <button className="btn btn-secondary">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  )
}

export default Register
