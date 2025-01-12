import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => {
    // console.log(store); // Check the store structure
    return store.user;
  });
  
  // console.log(user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
 {user && (
  <div className="flex items-center p-2 gap-2">
  <img
    className="w-8 h-8 rounded-full border border-gray-300"
    src={user.photoURL}
    alt="user icon"
  />
  <button
    onClick={handleSignOut}
    className="flex flex-col items-start text-left font-semibold text-gray-700 hover:text-gray-600"
  >
    <span className="block text-xs text-gray-950">{user.displayName}</span>
    <span className="block text-xs text-blue-700 font-bold hover:text-blue-600">Sign Out</span>
  </button>
</div>




) }

      
    </div>
  );
};

export default Header;
