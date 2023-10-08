import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

  const {logInUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');    
    logInUser(email, password)
    .then(res =>{
      console.log(res.user);
      navigate('/');
    })
    .catch(err => console.error(err));

  }
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
          <input type="email" name='email' required placeholder="email" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-base">Password</span>
          </label>
          <input type="password" name='password' required placeholder="password" className="input input-bordered"/>
          <label className="label">
            <Link to="/" className="text-sm link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="label p-5 pt-0">
            <p>New here?<Link to="/register" className="text-sm link link-hover"> Register</Link></p>
          </div>
    </div>
  </div>
</div>
  )
}

export default Login