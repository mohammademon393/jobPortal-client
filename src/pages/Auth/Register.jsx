import React from "react";
import lottieData from "../../assets/lottie/ansLotte.json";
import Lottie from "lottie-react";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log({ name, email, password });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Animation section */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Create Your Account!</h1>

          {/* <Lottie
            animationData={lottieData}
            className="w-full max-w-md mx-auto"
          /> */}
        </div>

        {/* Register form */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Register</h2>

            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Your name"
                  required
                />

                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                  required
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                  minLength={6}
                  required
                />

                <button type="submit" className="btn btn-primary mt-4">
                  Register
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
