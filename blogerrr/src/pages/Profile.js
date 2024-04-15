import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center items-center bg-gray-800 ">
      <div className="container h-full justify-center mt-14 ml-5 lg:w-3/6 xl:w-2/7 sm:w-full md:w-2/3    bg-gray-900  shadow-lg    transform   duration-200 easy-in-out">
        <div className=" h-32 overflow-hidden">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt=""
          />
        </div>
        <div className="flex justify-center px-5  -mt-12">
          <img
            className="h-32 w-32 bg-gray-900 p-2 rounded-full   "
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt=""
          />
        </div>
        <div className=" ">
          <div className="text-center px-14">
            <h2 className="text-white text-3xl font-bold">Mohit Dhiman</h2>
            <a
              className="text-white mt-2 italic hover:text-blue-500"
              href="https://www.instagram.com/immohitdhiman/"
              target="BLANK()"
            >
              @immohitdhiman
            </a>
            <p className="mt-2 italic text-white text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>
          </div>
          <hr className="mt-6" />
          <div className="flex text-white bg-gray-900 ">
            <div className="text-center w-1/2 p-4 hover:bg-gray-800 cursor-pointer">
              <p>
                <span className="font-semibold">2.5 k </span> Followers
              </p>
            </div>
            <div className="border"></div>
            <div className="text-center text-white w-1/2 p-4 hover:bg-gray-800 cursor-pointer">
              <p>
                {" "}
                <span className="font-semibold">2.0 k </span> Following
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div class="h-100  w-full  flex items-center justify-center bg-teal-lightest font-sans">
          <div class="bg-gray-900 text-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div class="mb-4">
              <h1 class="text-grey-darkest text-2xl italic">Posts</h1>
              <div class="flex mt-4 pb-4">
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-black"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 w-full grid-rows-1 px-8 py-4 gap-4 border border-gray-50">
              <div class="flex mb-4 items-center">
                <div class="w-full text-s ">
                  Title Only
                </div>
                <button
                  class="middle none center w-56 mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  View Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
