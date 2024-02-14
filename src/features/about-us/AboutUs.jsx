import React from "react";
import { IoCartOutline } from "react-icons/io5";

function AboutUs() {
  return (
    <div className="flex items-center justify-center bg-[#e3fafc] p-[100px] pt-40 xs:h-auto xs:overflow-hidden xs:p-[0px] xs:pt-12">
      <div className="max-w-4xl bg-[#e3fafc] p-8 xs:p-0 md:mt-[80px] md:p-10 lg:p-14">
        <div className="flex items-center justify-center rounded-lg ">
          <div className="flex items-stretch xs:w-screen xs:flex-col sm:w-auto">
            <div className="basis-5/12 sm:basis-full">
              <img
                src="/img/about-us/baking-macarons-3-cropped.png"
                alt="Box of packaged macarons (pink, brown, blue, and white) with a pink ribbon tying a bow around it. White blossons on branches in the background."
                className="h-full rounded-t-md object-top xs:h-[350px] xs:w-full xs:object-cover xs:object-center mobile:object-top"
              />
            </div>
            <div className="flex basis-7/12 flex-col justify-center rounded-b-md bg-white p-[50px] xs:p-8 mobile:p-10 lgmobile:p-12">
              <h1 className="pb-4 font-[Sacramento] text-5xl text-[#22b8cf] xs:p-2 xs:pb-4 xs:text-center xs:text-5xl mobile:text-6xl sm:text-6xl md:text-7xl">
                Hello There!
              </h1>
              <div className="font-[Raleway] text-[15px] xs:text-[16px] mobile:text-[16px] sm:text-[18px] md:text-[18px] lg:text-[16px]">
                <p>
                  I'm Amy, the heart and hands behind{" "}
                  <span className="text-[#15aabf]">Simply Sweet by Amy</span>, a
                  passion project in which my lifelong love for baking meets a
                  rich cultural heritage. My journey of baking began with
                  cherished moments by my Vietnamese mother's side in the
                  kitchen, learning the art of cooking and baking. As a proud
                  Vietnamese American, I was fortunate enough to grow up deeply
                  connected to my heritage. This connection, woven with the
                  threads of tradition and innovation, has inspired the{" "}
                  <i className="font-semibold text-[#22b8cf]">
                    diverse range of flavors
                  </i>{" "}
                  that define my macarons.
                </p>
                <br></br>
                <p>
                  Drawing from my roots and guided by the belief that food
                  unites people, I meticulously craft each macaron with love and
                  dedication. From classic Western and European flavors such as{" "}
                  <strong className="text-[#a16207]">chocolate,</strong>{" "}
                  <strong className="text-[#4dabf7]">vanilla,</strong>{" "}
                  <strong className="text-[#2b8a3e]">pistachio,</strong> and{" "}
                  <strong className="text-[#f43f5e]">raspberry</strong> to the
                  unique aromas of Southeast Asia such as{" "}
                  <strong className="text-[#16a34a]">pandan,</strong>{" "}
                  <strong className="text-[#6d28d9]">ube,</strong>{" "}
                  <strong className="text-[#f06595]">lychee,</strong>{" "}
                  <strong className="text-[#fb923c]">mango,</strong>{" "}
                  <strong className="text-[#fed7aa]">milk tea,</strong> and{" "}
                  <strong className="text-[#3f6212]">matcha,</strong> every bite
                  is a journey through cultures and cuisines.
                </p>
                <br></br>
                <p>
                  I take immense joy in presenting a large array of
                  confectionaries and baked treats that are not only creative
                  and affordable, but are sure to satisfy your sweet tooth.
                  Located in the Twin Cities area,{" "}
                  <span className="text-[#15aabf]">Simply Sweet by Amy</span> is
                  more than just a home bakery;{" "}
                  <strong className="text-[#22b8cf]">
                    it is a celebration of flavors, cultures, and the shared
                    moments that truly matter.
                  </strong>{" "}
                  Welcome to my world of simple sweets!
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 pt-6">
                <span className="font-[Raleway] text-[16px] font-bold text-[#15aabf]">
                  Ready to start your order?
                </span>
                <a
                  href="/menu-and-ordering"
                  className="flex items-center justify-center gap-2 rounded-md bg-[#3bc9db] px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#15aabf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15aabf]"
                >
                  <IoCartOutline /> Order Macarons
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
