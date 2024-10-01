import React, { useState } from "react";
import {
  TbLayoutSidebarLeftExpandFilled,
  TbLayoutSidebarLeftCollapseFilled,
} from "react-icons/tb";
import { FaSearch, FaPlus } from "react-icons/fa"; // Import ikon plus

export function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col relative">
      <nav className="flex justify-between p-4 bg-neutral-800 border-b border-neutral-600">
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <TbLayoutSidebarLeftCollapseFilled className="text-2xl" />
          ) : (
            <TbLayoutSidebarLeftExpandFilled className="text-2xl" />
          )}
        </button>
        <h1 className="text-white text-2xl font-bold">What To Do?</h1>
        <button>
          <FaSearch className="text-white text-xl" />
        </button>
      </nav>
      <div className="flex flex-1">
        <div
          className={`bg-neutral-800 p-5 h-full transition-transform duration-300 w-1/4 border-r border-neutral-600 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h1 className="text-white">Side Bar</h1>
        </div>
        <div
          className={`flex-1 p-5 transition-transform duration-300 ease-in-out flex justify-center ${
            isSidebarOpen ? "ml-0" : "-ml-[25%]"
          }`}
          style={{ transition: "margin-left 0.3s ease-in-out" }}
        >
          <h1>Main Content</h1>
        </div>
      </div>

      {/* Button untuk menambah todo */}
      <div className="absolute bottom-4 right-4">
        <button
          className="bg-neutral-600 text-white rounded-full p-4 shadow-lg hover:bg-neutral-500 transition duration-200"
          onClick={() => (window.location.href = "/add-todo")}
        >
          <FaPlus className="text-xl" />
        </button>
      </div>
    </div>
  );
}
