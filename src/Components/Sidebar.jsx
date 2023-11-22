import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faGem,
  faPlusSquare,
  faQuestionCircle,
  faLifeRing,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex h-screen w-1/7  ">
      {!isMobile && (
        <div className="h-full max-w-full  bg-white text-black rounded-lg shadow-lg  dark:shadow-grey-400">
          <div className="p-4 mt-6">
            {/* Profile Section */}
            <div className="flex items-center flex-col mb-4 bg-white">
              <img
                src="https://via.placeholder.com/50"
                alt="Profile"
                className="w-25 h-25 rounded-full"
              />
              <div className="flex items-center mt-2">
                <p className="text-black font-extrabold">Ram Mohan</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                  className="ml-1 h-4 w-4 fill-current text-blue-500"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </div>
              <p className="text-black text-xs">rammohan2@gmail.com</p>
            </div>

            <ul>
              <li className="flex items-center font-semibold py-3 hover:bg-sky-300 rounded-lg mb-1 ">
                <FontAwesomeIcon
                  icon={faTachometerAlt}
                  className="mr-3 text-sky-600 "
                />
                Dashboard
              </li>
              <li className="flex items-center font-semibold py-3 hover:bg-sky-300 rounded-lg  mb-1 ">
                <FontAwesomeIcon icon={faGem} className="mr-3 text-sky-600" />
                Perks
              </li>
              <li className="flex items-center font-semibold py-3 hover:bg-sky-300 rounded-lg   mb-1 ">
                <FontAwesomeIcon
                  icon={faPlusSquare}
                  className="mr-3 text-sky-600"
                />
                Addons
              </li>
              <li className="flex items-center font-semibold py-3 hover:bg-sky-300 rounded-lg  mb-1 ">
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="mr-3 text-sky-600"
                />
                FAQ
              </li>
              <li className="flex items-center font-semibold py-3 hover:bg-sky-300 rounded-lg  mb-1 ">
                <FontAwesomeIcon
                  icon={faLifeRing}
                  className="mr-3 text-sky-600"
                />
                Support
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center mt-28">
            <ul>
              <li className="flex items-center py-3 text-blue-500  rounded-lg mb-1 ">
                Logout
                <FontAwesomeIcon
                  icon={faPowerOff}
                  className="ml-2 text-sky-600"
                />
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="flex-1 p-4" style={{ paddingTop: "16px" }}>
        {isMobile && !isOpen && (
          <button
            className="bg-gray-400 text-gray-100 px-4 py-2 rounded-md"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        )}
      </div>

      {isMobile && isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 text-gray-100 w-1/2">
          <div className="p-4">
            <button
              className="bg-gray-700 text-gray-100 px-4 py-2 rounded-md mb-4"
              onClick={closeSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            <div className="flex  flex-col mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <p className="text-white font-semibold mt-2">Ram Mohan</p>
              <p className="text-gray-400">rammohan2@gmail.com</p>
            </div>

            <ul>
              <li className="flex items-center py-2 hover:bg-gray-700">
                <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
                Dashboard
              </li>
              <li className="flex items-center py-2 hover:bg-gray-700">
                <FontAwesomeIcon icon={faGem} className="mr-3" />
                Perks
              </li>
              <li className="flex items-center py-2 hover:bg-gray-700">
                <FontAwesomeIcon icon={faPlusSquare} className="mr-3" />
                Addons
              </li>
              <li className="flex items-center py-2 hover:bg-gray-700">
                <FontAwesomeIcon icon={faQuestionCircle} className="mr-3" />
                FAQ
              </li>
              <li className="flex items-center py-2 hover:bg-gray-700">
                <FontAwesomeIcon icon={faLifeRing} className="mr-3" />
                Support
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center mt-28">
            <ul>
              <li className="flex items-center py-3 text-blue-500 rounded-lg mb-1 ">
                Logout
                <FontAwesomeIcon
                  icon={faPowerOff}
                  className="ml-2 text-sky-600"
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
