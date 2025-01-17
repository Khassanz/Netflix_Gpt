import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BackgroundImg } from "../Utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [IsSignIn, setIsSignIn] = useState(true);
  const [errormessage, seterrormessage] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null); // For profile picture file

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0] || Profile); // Save the selected file
  };

  const handleButtonClick = async () => {
    const message = checkValidData(email.current.value, password.current.value);

    seterrormessage(message);

    if (message) return;

    if (!IsSignIn) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(async (userCredential) => {
          const user = userCredential.user;

          // Upload the profile picture to Firebase Storage (if provided)
          let photoURL = "";
          if (profilePicture) {
            const storage = getStorage();
            const storageRef = ref(storage, `profilePictures/${user.uid}`);
            await uploadBytes(storageRef, profilePicture);
            photoURL = await getDownloadURL(storageRef);
          }

          // Update user profile with displayName and photoURL
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: photoURL || "", // Set to uploaded URL or leave blank
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL })); // Save user info in Redux
            })
            .catch((error) => {
              seterrormessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // Handle successful sign-in (if needed)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + " - " + errorMessage);
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
          src={BackgroundImg}
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
            <>
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full p-4 mb-4 bg-gray-800 rounded-lg placeholder-gray-400"
              />
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-4 mb-4 bg-gray-800 rounded-lg text-gray-400"
                accept="image/*"
              />
            </>
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
