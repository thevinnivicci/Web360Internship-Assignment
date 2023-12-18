import { Link } from "react-router-dom";
const Navcomponent = () => {
  return (
    <div className="w-full h-[70px] bg-[#fff] shadow-md absolute top-0 text-[#903749] flex items-center justify-between px-[100px]">
      <Link to="/">
        {" "}
        <span className="bg-red-400 rounded-full font-medium p-3">Logo</span>
      </Link>
      <div className="flex items-center justify-center space-x-8">
        <Link to="/" className="font-medium hover:text-red-300">
          Home
        </Link>
        <Link to="/login" className="font-medium hover:text-red-300">
          Login
        </Link>
        <Link to="/register" className="font-medium hover:text-red-300">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navcomponent;
