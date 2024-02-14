import React from "react";
import { IoHomeOutline, IoMailOutline } from "react-icons/io5";

const Error = () => {
  return (
    <div className="flex items-center justify-center lg:absolute">
      <div className="flex w-screen items-center justify-center bg-[#e3fafc] p-4 pb-12 pt-[160px] md:pl-12 md:pr-12 md:pt-[200px]">
        {/* */}
        <div className="sm:p-12s flex flex-col gap-4 rounded-md bg-white p-4 sm:w-[100%] lg:w-[1000px] lg:items-center lg:justify-center lg:p-20 lg:pb-0 xl:w-[1200px]">
          <div className="flex flex-col sm:text-center lg:w-[690px] lg:text-left">
            <h1 className="bg-white text-5xl text-red-400 mobile:text-center sm:text-7xl lg:text-left lg:text-8xl">
              404
            </h1>
            <h1 className="bg-white text-2xl text-red-400 mobile:text-center sm:text-4xl lg:text-left lg:text-5xl">
              Page Not Found
            </h1>
            <p className="pt-6 text-4xl text-stone-500 lg:text-3xl">
              Ooops! We couldn't find the page you are looking for.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 sm:text-center lg:w-[690px] lg:gap-0 lg:text-left">
            <div className="flex flex-col gap-4">
              <p className="text-stone-500 lg:w-[80%]">
                The page you're looking for might have been taken down. ☹
              </p>
              <p className="text-stone-500 lg:w-[80%]">
                Regardless, you can always send us a message and we'll try to
                help find what you're looking for.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-12 sm:pt-4 lg:flex-col lg:items-start lg:justify-start lg:gap-4">
                <a
                  href="/"
                  className="flex items-center gap-2 rounded-lg pt-4 text-red-400 underline-offset-4 hover:cursor-pointer hover:text-[#22b8cf] hover:underline hover:decoration-2 hover:duration-300 sm:pt-0"
                >
                  <IoHomeOutline /> Go back to Home Page
                </a>
                <a
                  href="/contact"
                  className=" flex items-center justify-center gap-2 rounded-lg text-red-400 underline-offset-4 hover:cursor-pointer hover:text-[#22b8cf] hover:underline hover:decoration-2 hover:duration-300"
                >
                  <IoMailOutline /> Send us a Message
                </a>
              </div>
            </div>
            <img
              src="..//img/undraw-error-illustration-2.svg"
              alt="error message illustration"
              className="w-[90%] sm:w-[300px] lg:relative lg:bottom-[80px] lg:right-[-180px] lg:w-[350px]"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
