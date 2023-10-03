
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const Register = () => {
  const {createUser} = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get('name');
    const photoUrl = form.get('photo-url');
    const email = form.get('email');
    const password = form.get('password');

    console.log(name, photoUrl,email,password);
    // createUser

    createUser(email, password)
    .then(res => console.log(res.user))
    .catch(error => console.log(error));
    

  };

    return (
        <div className="">
      <Navbar></Navbar>
      
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <div className="text-center">
          <h1 className="text-2xl font-semibold text-center pt-5">Register Your Account</h1>
          </div>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-500 text-md">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered text-xs"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-500 text-md">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo-url"
                  className="input input-bordered text-xs"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-500 text-md">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered text-xs"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-500 text-md">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered text-xs"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text font-semibold text-gray-500 text-md-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gray-700 text-white hover:text-black">Register</button>
              </div>
              <p className="text-sm text-center font-semibold text-gray-400">Already Have An Account? <span className="text-red-400"><Link to='/login'>Login</Link></span></p>
            </form>
          </div>
        </div>

    </div>
    );
};

export default Register;