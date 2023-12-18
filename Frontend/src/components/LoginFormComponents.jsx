import formimage from "../assets/form image.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
const LoginFormComponents = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:8000/login", { email, password })
    .then((result) => {
      console.log(result);
      if (result.data.message === "Success") {
        toast.success("Login successful");
        localStorage.setItem("userId", result.data.userId); // Store the user ID
        navigate("/profile");
      } else {
        toast.error("Invalid credentials");
      }
    })
    .catch((error) => console.log(error));
  };

  return (
    <div className="w-full h-screen bg-[#ddd] flex justify-center items-center">
      <div className="w-[70%] h-[70%] bg-white rounded-xl flex shadow-lg">
        <div className="w-1/2 h-full">
          <img
            src={formimage}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-1/2 h-full bg-white rounded-lg flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full h-full p-10 flex flex-col space-y-3 justify-center"
          >
            <h1 className="text-center  text-4xl text-[#5c5c5c] font-medium">
              Welcome
            </h1>

            <label htmlFor="email" className="block font-medium text-[#5c5c5c]">
              Enter Email
            </label>
            <input
              name="email"
              type="email"
              className="block bg-[#F9F9F9] w-full p-4 focus:outline-none rounded-md"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="block text-[#5c5c5c] font-medium">
              Enter Password
            </label>
            <input
              name="password"
              type="password"
              className="block bg-[#F9F9F9] w-full p-4 focus:outline-none mb-5 rounded-md"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="w-full flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-[#5c5c5c] font-medium">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="p-2 capitalize text-[#5c5c5c] font-semibold rounded-md bg-gradient-to-r from-red-400 to-red-300 hover:shadow-lg hover:shadow-red-200 "
            >
              Submit
            </button>
            <p className="text-center">
              not register yet?{" "}
              <Link to="/register" className="text-red-400">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginFormComponents;
