import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 h-20">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Azaf Logo" className="w-32" />
        
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-1/2">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full px-4 py-2 border rounded-md focus:outline-none bg-gray-100 focus:ring-2 focus:ring-orange-500"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 m-[-5px]">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Icons and Button */}
        <div className="flex items-center space-x-8">
          {/* Icons */}
          <button className="text-gray-700 hover:text-orange-500">
       
            <i className="fas fa-user p-3 rounded-xl bg-gray-100 "></i>
          </button>
          <button className="text-gray-700 hover:text-orange-500">
            <i className="fas fa-heart p-3 rounded-xl bg-gray-100 "></i>
          </button>
          <button className="text-gray-700 hover:text-orange-500">
            <i className="fas fa-shopping-cart p-3 rounded-xl bg-gray-100 "></i>
          </button>

          {/* Cloud Service Button */}
          <button >
          <img
                src="/cloud.PNG"
                alt="Hero Slide 1"
                // className="w-full h-64 object-cover"
                // style={{ height:"391px"}}
              />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
