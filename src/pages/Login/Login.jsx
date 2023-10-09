import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const [logError, setLogError] = useState("");
  const { logInUser, logInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    
    if(password.length<6){
      setLogError("Password must be at least 6 characters");
      return;
    }
    logInUser(email, password)

      .then(() => {
        Swal.fire({
          title: "Login",
          text: "Successfully Login",
          icon: "Success",
          confirmButtonText: "ok",
        }),
          navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setLogError(error.message);
      });
  };

  const handleGoogleLogIn = () => {
    logInWithGoogle()
    .then(()=>{
      navigate(location.state ? location.state : "/");
    })
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full  lg:w-[600px] shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="text-base">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-base">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="/" className="text-sm link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {logError && <span className="text-red-400">{logError}</span>}
          <div className="flex items-center justify-center gap-4">
            <h4>Continue with</h4>
            <button onClick={handleGoogleLogIn}>
              <FaGoogle />
            </button>
          </div>
          <div className="label p-5 pt-0">
            <p>
              New here?
              <Link to="/register" className="text-sm link link-hover">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
