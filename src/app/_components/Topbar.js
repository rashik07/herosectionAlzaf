import React from "react";


const Topbar = () => {
  return (
    <div>
      <div className="bg-gray-100 py-2 text-sm">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Left Section */}
          <div className="flex space-x-12 text-gray-600">
            <a href="#" className="text-orange-500 ">
              English <i className={`fa-solid fa-chevron-up`} />
            </a>
            <a href="#" className="hover:text-gray-800">
              Help Center
            </a>

            <a href="#" className="hover:text-gray-800">
              Mobile: 9908790055
            </a>
          </div>

          {/* Right Section */}
          <div className="flex space-x-12 text-gray-600">
            <a href="#" className="hover:text-gray-800">
              Become a Seller
            </a>

            <a href="#" className="hover:text-gray-800">
              Order Track
            </a>

            <a
              href="#"
              className="text-orange-500 font-bold hover:text-orange-700"
            >
              Sign In / Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
