import React from "react";

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center p-6 max-w-lg bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Sorry, there seems to be an issue with our website. Please bear with
          us as we work to resolve it. Thank you for your patience.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default Error;
