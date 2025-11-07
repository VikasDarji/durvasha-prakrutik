import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white animate-fadeIn">
      <h1 className="text-5xl font-bold drop-shadow-[0_0_10px_#ff00ff] mb-4">
        About Us 💡
      </h1>
      <p className="text-lg text-gray-300">
        We blend creativity and technology into visually stunning designs.
      </p>
    </div>
  );
}
