import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
        <div className=" min-h-screen flex w-full max-w-xs p-4 bg-gray-900">
          <ul className="flex flex-col w-full">
            <Link to="/">
              <li className="mt-0 mb-6 text-white font-bold text-xl	">Logo</li>
            </Link>

            <li className="my-px">
              <input
                type="search"
                placeholder="Search Category"
                href="#"
                className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 bg-gray-100 w-full"
              />
            </li>
            <Link to="/addnew">
              <li className="my-px">
                <a
                  href="#"
                  className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700"
                >
                  <span className="flex items-center justify-center text-lg text-green-400">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </span>
                  <span className="ml-3">Add new</span>
                </a>
              </li>
            </Link>
            <li className="my-px">
              <span className="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">
                Account
              </span>
            </li>
         <Link to='/profile'>
         <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-gray-500">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </span>
                <span className="ml-3">Profile</span>
              </a>
            </li>
         </Link>
            {/* <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-gray-500">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                </span>
                <span className="ml-3">Notifications</span>
                <span className="flex items-center justify-center text-sm text-red-500 font-semibold bg-red-300 h-6 px-2 rounded-full ml-auto">
                  10
                </span>
              </a>
            </li> */}
            <Link to='/login'>
            <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-red-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                  </svg>
                </span>
                <span className="ml-3">Logout</span>
              </a>
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
