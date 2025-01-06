import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [IsSignIn,setIsSignIn]=useState(true)


  const toggleSignInForm = ()=>{

    setIsSignIn(!IsSignIn)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/PK-en-20241230-TRIFECTA-perspective_ee072ddd-787e-4489-b453-8c3c834f8fa0_large.jpg"
          alt="bgimage"
        />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{IsSignIn?"Sign In":"Sign Up"}</h1>
        {!IsSignIn && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4  w-full bg-gray-700 rounded-lg "
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg  "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4  w-full bg-gray-700 rounded-lg "
        />
        <button className="p-4 my-6  bg-red-700   w-full rounded-lg ">
        {IsSignIn?"Sign In":"Sign Up"}
        </button>
        <p className="py-4  cursor-pointer" onClick={toggleSignInForm}>
        {IsSignIn?"New to Netflix? Sign Up Now":"Already Registered-Sign In Now"}
          </p>
      </form>
    </div>
  );
};

export default Login;
