import React from "react";
import { IoSearch } from "react-icons/io5";

function CareGuide() {
  return (
    <div className="flex items-center justify-center bg-[#e3fafc] p-[100px] pt-40 xs:h-auto xs:overflow-hidden xs:p-[0px] xs:pt-12">
      <div className="max-w-4xl bg-[#e3fafc] p-8 xs:p-0 md:mt-[80px] md:p-10 lg:p-14">
        <div className="flex items-center justify-center rounded-lg">
          <div className="flex items-stretch xs:w-screen xs:flex-col sm:w-auto">
            <div className="basis-5/12 sm:basis-full">
              <img
                src="/img/macarons-care-image.avif"
                alt="Macarons being cared for and stored properly."
                className="h-full rounded-t-md object-top xs:h-[350px] xs:w-full xs:object-cover xs:object-center mobile:object-top"
              />
            </div>
            <div className="flex basis-7/12 flex-col justify-center rounded-b-md bg-white p-[50px] xs:p-8 mobile:p-10 lgmobile:p-12">
              <h1 className="pb-4 text-center font-[Sacramento] text-5xl text-[#22b8cf] xs:p-2 xs:pb-4 xs:text-5xl mobile:text-6xl sm:text-6xl md:text-7xl">
                Care Guide
              </h1>
              <div className="text-15px xs:text-16px mobile:text-16px sm:text-18px md:text-18px lg:text-16px font-[Raleway]">
                <p>
                  Welcome to the care guide for your delicious macarons from{" "}
                  <span className="text-[#15aabf]">Simply Sweet by Amy</span>!
                  Proper care ensures the best taste and texture in every bite.
                </p>
                <br></br>
                <p>
                  <strong>Storage:</strong>
                  <ul className="list-disc pl-8">
                    <li>
                      Store your macarons in an{" "}
                      <strong className="text-red-400">
                        airtight container
                      </strong>{" "}
                      in the refrigerator. This helps maintain their freshness
                      and prevents them from drying out.
                    </li>
                    <li>
                      For best results, our macarons should be consumed within 1
                      week.
                    </li>
                    <li>
                      If you need longer-term storage, our macarons can be
                      frozen for up to 1 month and can be served at room
                      temperature after defrosting for at least 1-2 hours.
                    </li>
                  </ul>
                </p>
                <br></br>
                <p>
                  <strong>Handling:</strong> Handle macarons with clean, dry
                  hands. Avoid touching the delicate surface to preserve their
                  appearance. Please do not place by or next to anything damp or
                  wet as they will get soggy.
                </p>
                <br></br>
                <p>
                  <strong>Enjoyment:</strong> Macarons are best enjoyed at room
                  temperature. Take them out of the refrigerator and let them
                  sit for at least 30 minutes before consuming.
                </p>
                <br></br>
                <p>
                  <strong>Flavor Variety:</strong> Explore the diverse range of
                  flavors. From classic favorites to unique aromas, each macaron
                  offers a delightful journey through cultures.
                </p>
                <br></br>
                <p>
                  Thank you for choosing{" "}
                  <span className="text-[#15aabf]">Simply Sweet by Amy</span>.
                  We hope you savor every moment with our delectable macarons!
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 pt-6">
                <span className="font-[Raleway] text-[16px] font-bold text-[#15aabf]">
                  Have other questions? Check out our Frequently Asked
                  Questions:
                </span>
                <a
                  href="/FAQs"
                  className="flex items-center justify-center gap-2 rounded-md bg-[#3bc9db] px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#15aabf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15aabf]"
                >
                  <IoSearch /> FAQs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareGuide;
