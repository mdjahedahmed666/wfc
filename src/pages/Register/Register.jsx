import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
console.log(name, photo, email, password);
    createUser(email, password)
    .then(res =>{
      console.log(res.user);
    })
    .catch(err => console.error(err));

  }
  return (
      <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Register now!</h1>
      </div>
      <div className="card flex-shrink-0 w-full  lg:w-[600px] shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body w-full">
          <div className="form-control">
            <label className="label">
              <span className="text-base">Name</span>
            </label>
            <input type="text" name="name" required placeholder="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base">Photo URL</span>
            </label>
            <input type="text" name="photo" required placeholder="photo url" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base">Email</span>
            </label>
            <input type="email" name="email" required placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base">Password</span>
            </label>
            <input type="password" name="password" required placeholder="password" className="input input-bordered" />
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="label p-5 pt-0">
            <Link to="/login" className="text-sm link link-hover mb-3">Already have an account? Login</Link>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Register