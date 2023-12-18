import { Link } from "react-router-dom";
import formimage from "../assets/form image.jpg";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
        toast.success("Registerion Done");
      })
      .catch((error) => console.log(error));
    toast.error("failed to registor");
  };

  return (
    <div className="w-full h-screen flex items-center bg-[#ddd] justify-center">
      <div className="w-[70%] h-[70%] bg-white rounded-lg flex shadow-lg">
        <div className="w-1/2 h-full">
          <img
            src={formimage}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <form
            onSubmit={submitHandler}
            className="w-full h-full p-10 flex flex-col space-y-3 justify-center"
          >
            <h1 className="text-center  text-4xl text-[#5c5c5c] font-medium">
              Register
            </h1>
            <label htmlFor="email" className="block font-medium text-[#5c5c5c]">
              Enter Your Name
            </label>
            <input
              type="text"
              name="name"
              className="block bg-[#F9F9F9] w-full p-4 focus:outline-none rounded-md"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email" className="block font-medium text-[#5c5c5c]">
              Enter Email
            </label>
            <input
              type="email"
              name="email"
              className="block bg-[#F9F9F9] w-full p-4 focus:outline-none rounded-md"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email" className="block text-[#5c5c5c] font-medium">
              Enter Password
            </label>
            <input
              type="password"
              name="password"
              className="block bg-[#F9F9F9] w-full p-4 focus:outline-none mb-5 rounded-md"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="w-full flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-[#5c5c5c] font-medium">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="p-2 capitalize text-[#5c5c5c] font-semibold rounded-md shadow-md bg-gradient-to-r from-red-400 to-red-300 hover:shadow-lg hover:shadow-red-200"
            >
              Submit
            </button>
            <p className="text-center">
              already register{" "}
              <Link to="/login" className="text-red-400">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
