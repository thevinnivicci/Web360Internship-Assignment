import { useEffect, useState } from "react";
import axios from "axios";
const Profile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      // Fetch user profile data from the backend using the user ID
      axios
        .get(`http://localhost:8000/profile?userId=${userId}`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
        });
    }
  }, []);

  return (
    <div className="w-full h-screen text-[#5c5c5c] bg-[#ddd] flex justify-center items-center">
      <div className="w-1/2 h-1/2 bg-white rounded-lg flex flex-col items-center justify-center space-y-2">
        <h1 className="text-2xl font-medium">User Profile</h1>
        <h2 className="text-2xl">Name: {userData.name}</h2>
        <h2 className="text-2xl">Email: {userData.email}</h2>
      </div>
    </div>
  );
};

export default Profile;
