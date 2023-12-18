import Image from "../assets/form image.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-full h-screen bg-[#ddd] flex items-center justify-center">
      <div className="w-1/2 h-full flex flex-col justify-center space-y-6 pl-36 ">
        <h1 className="text-6xl font-semibold text-[#5c5c5c] text-start ">
          This is heading
        </h1>
        <p className="text-lg text-[#5c5c5c]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel
          totam, animi sint dignissimos recusandae consequatur beatae aut id
          voluptatum earum laborum delectus rerum obcaecati accusantium odit
          ratione, dolor exercitationem.
        </p>
        <div>
          <Link to="/login">
            <button
              type="submit"
              className="p-3 capitalize text-[#5c5c5c] font-semibold rounded-md bg-gradient-to-r from-red-400 to-red-300 hover:shadow-lg hover:shadow-red-200 "
            >
              Get started
            </button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 h-full bg-cover flex items-center justify-center">
        <img src={Image} alt="" className="w-1/2 h-1/2 rounded-xl" />
      </div>
    </div>
  );
};

export default Home;
