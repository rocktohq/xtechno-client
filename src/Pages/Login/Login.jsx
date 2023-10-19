import { Helmet, HelmetProvider } from "react-helmet-async"
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const registerState = location.state ? location.state : "/";
  const handleLogin = e => {
    e.preventDefault();

    // Data from User
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Validation
    if (email === "" && password === "") {
      toast.error("All fields are required!");
      return;
    } else if (email === "") {
      toast.error("Email field can not be empty!");
      return;
    }
    else if (password === "") {
      toast.error("Password field can not be empty!");
      return;
    }

    // No Error: Login User
    // Loading
    toast.loading("Login in Process...");

    loginUser(email, password)
      .then(() => {
        toast.dismiss();
        toast.success("Login Success!");
        form.reset();
        
        // Navigate after Login
        location.state
          ? navigate(location.state)
          : navigate("/")
      })
      .catch(error => {
        toast.dismiss();
        if (error.code === "auth/invalid-login-credentials") return toast.error("Wrong email or password!");

        toast.error(error.code);
        console.error(error.code);
      })
  }

  // Soial Media Login
  const handleSocialLogin = () => {
    toast.loading("Login in Process...");
    googleLogin()
      .then(() => {
        toast.dismiss();
        toast.success("Login Success");

        // Navigate after Login
        location.state
          ? navigate(location.state)
          : navigate("/")
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
        <title>Login</title>
      </Helmet>
      <section className="py-10 bg-base-200">
        <div className="max-w-lg mx-auto">
          <div className="card w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="divider text-xl font-bold">User Login</h2>
              <form onSubmit={handleLogin}>
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
                <p className="mt-3">&#187; Need an account?&nbsp;
                  <Link state={registerState} to="/register" className="link link-hover">Register here.</Link>
                </p>
                <div className="form-control mt-6">
                  <button className="btn btn-secondary">Login</button>
                </div>
              </form>
              <div className="form-control">
                <p className="divider font-bold">OR</p>
                <div className="form-control">
                  <button onClick={handleSocialLogin} className="btn btn-secondary btn-outline">Login with Google</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  )
}

export default Login
