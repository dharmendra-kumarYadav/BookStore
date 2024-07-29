import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth(); // Destructuring to only get setAuthUser

  const handelLogout = () => {
    try {
      setAuthUser(null); // Clear the authUser state
      localStorage.removeItem("Users"); // Remove user data from localStorage
      toast.success("Logout successfully!");
      // Optionally, navigate to a logout page or reset application state.
    } catch (error) {
      toast.error("Error: " + error);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handelLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
