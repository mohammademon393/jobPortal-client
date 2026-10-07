import React, { useContext } from "react";
import AuthContext from "../../context/authContext/AuthContext";
import { Link } from "react-router";
import img from "../../assets/registerLogin.png";
import GoogleLogin from "./GoogleLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // pssword validation
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    if (!/[A-Z]/.test(password)) {
      return toast.error("At least one uppercase letter required");
    }

    if (!/[0-9]/.test(password)) {
      return toast.error("At least one number required");
    }

    // Create user with email and password
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen px-4 py-5">
      <div className="hero-content w-full max-w-4xl p-0">
        {/* Main Card */}
        <div className="card bg-base-100 shadow-2xl w-full overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center text-center">
              <h1 className="text-2xl font-bold">Create Your Account!</h1>
              <img
                src={img}
                alt="Register"
                className="w-3/4 max-w-xs mx-auto mt-4"
              />
            </div>

            {/* Right Side - Register Form */}
            <div className="w-full md:w-1/2 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-center">Register</h2>
              <p className="text-center text-base-content/60 text-sm mt-1">
                Fill in the details to create your account
              </p>

              <form onSubmit={handleRegister} className="mt-5">
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input input-sm w-full"
                    placeholder="Your name"
                    required
                  />

                  <label className="label mt-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input input-sm w-full"
                    placeholder="Email"
                    required
                  />

                  <label className="label mt-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input input-sm w-full"
                    placeholder="Password"
                    minLength={6}
                    required
                  />

                  <button
                    type="submit"
                    className="btn btn-primary btn-sm mt-5 w-full"
                  >
                    Register
                  </button>
                </fieldset>
              </form>
              <GoogleLogin></GoogleLogin>

              <p className="text-center mt-5 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary font-bold hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
