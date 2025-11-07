import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white animate-fadeIn">
      <h1 className="text-5xl font-bold drop-shadow-[0_0_10px_#00fff2] mb-4">
        Welcome Home 🏡
      </h1>
      <p className="text-lg text-gray-300">
        Discover futuristic design with glassmorphism and neon effects!
      </p>
    </div>
  );
}
