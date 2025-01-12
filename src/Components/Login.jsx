import React, { useState } from "react";
import Header from "./Header";
import { useRef } from "react";
import { checkValidData } from "../Utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import {useNavigate} from 'react-router-dom'
import {  updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";

const Login = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
  const [IsSignIn, setIsSignIn] = useState(true);
  const [errormessage, seterrormessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);

    seterrormessage(message);

    if (message) return;
    if (!IsSignIn) {
      // sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/165404218?v=4&size=64"
          }).then(() => {
            // Profile updated!
                  const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                    
            navigate("/browse")
          }).catch((error) => {
            // An error occurred
            seterrormessage(error.message)
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!IsSignIn);
  };

  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/PK-en-20241230-TRIFECTA-perspective_ee072ddd-787e-4489-b453-8c3c834f8fa0_large.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative flex items-center justify-center min-h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-11/12 max-w-md p-8 bg-black bg-opacity-75 text-white rounded-lg shadow-lg md:p-12 lg:max-w-lg"
        >
          <h1 className="text-3xl font-bold mb-6">
            {IsSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!IsSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-4 mb-4 bg-gray-800 rounded-lg placeholder-gray-400"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="w-full p-4 mb-4 bg-gray-800 rounded-lg placeholder-gray-400"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-4 bg-gray-800 rounded-lg placeholder-gray-400"
          />
          {errormessage && (
            <p className="text-red-500 text-sm mb-4">{errormessage}</p>
          )}
          <button
            onClick={handleButtonClick}
            className="w-full p-4 bg-red-600 hover:bg-red-700 transition-colors rounded-lg text-white font-semibold"
          >
            {IsSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            onClick={toggleSignInForm}
            className="text-sm mt-4 text-gray-400 hover:text-white cursor-pointer"
          >
            {IsSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
