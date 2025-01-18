import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../Utils/userSlice'
import { useEffect } from "react";
import { Logo } from "../Utils/constants";
const Header = () => {
  const dispatch = useDispatch()
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
       
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //  sign in
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    });
    // unsubscribe when component unmounts
     return ()=> unsubscribe();
  },[])
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b  from-black z-10 flex justify-between">
      <img
        className="w-44" 
        src={Logo}
        alt="logo"
      />
 {user && (
  <div className="flex items-center p-2 gap-2">
     
     <img
  className="w-8 h-8 rounded-full border"
  src={user.photoURL || "/path/to/default/avatar.png"}
  alt="user icon"
/>
<button
  onClick={handleSignOut}
  className="flex flex-col items-start text-left font-semibold"
>
  <span className="block text-xs text-white">
    {user.displayName || "Anonymous User"}
  </span>
  <span className="block text-xs text-white font-bold hover:text-blue-600">
    Sign Out
  </span>
</button>
</div>




) }

      
    </div>
  );
};

export default Header;
