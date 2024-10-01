import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-neutral-900 transition-all duration-500 ease-in-out">
      <h1 className="text-5xl font-bold text-white animate-pulse">
        WHAT TO DO?
      </h1>
    </div>
  );
}
