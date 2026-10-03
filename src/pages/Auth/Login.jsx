import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import AuthContext from "../../context/authContext/AuthContext";
import img from "../../assets/registerLogin.png";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
       
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen px-4 py-8">
      <div className="hero-content w-full max-w-4xl p-0">
        {/* Main Card */}
        <div className="card bg-base-100 shadow-2xl w-full overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center text-center">
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <img
                src={img}
                alt="Login"
                className="w-3/4 max-w-xs mx-auto mt-4"
              />
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full md:w-1/2 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-center">Login</h2>
              <p className="text-center text-base-content/60 text-sm mt-1">
                Sign in to continue to your account
              </p>

              <form onSubmit={handleLogin} className="mt-5">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input input-sm w-full"
                    placeholder="Enter your email"
                    required
                  />

                  <div className="flex justify-between items-center mt-2">
                    <label className="label">Password</label>
                    <Link
                      to="/forgot-password"
                      className="text-xs text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <input
                    type="password"
                    name="password"
                    className="input input-sm w-full"
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="submit"
                    className="btn btn-primary btn-sm mt-5 w-full"
                  >
                    Login
                  </button>
                </fieldset>
              </form>

              <p className="text-center mt-5 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary font-bold hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
