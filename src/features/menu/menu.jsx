import React from "react";
import { IoCartOutline } from "react-icons/io5";
import ModalImage from "react-modal-image";
import menuImageUrl from "/img/menu/simply-sweet-by-amy-menu/flavors.png";
import orderingImageUrl from "/img/menu/simply-sweet-by-amy-menu/ordering.png";
import pricingImageUrl from "/img/menu/simply-sweet-by-amy-menu/pricing.png";

const MenuItem = ({ smallImageUrl, largeImageUrl, altText }) => (
  <div className="zoom-in-container">
    <ModalImage
      small={smallImageUrl}
      large={largeImageUrl}
      showRotate={true}
      alt={altText}
      className="zoom-in-image"
    />
  </div>
);

function Menu() {
  return (
    <div className="flex items-center justify-center bg-[#e3fafc] p-[100px] pt-40 xs:h-auto xs:overflow-hidden xs:p-[0px] xs:pt-12">
      <div className="max-w-[1400px] bg-[#e3fafc] xs:pt-[110px] lg:mt-[110px] lg:px-[40px] lg:py-12">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-stretch rounded-md bg-white shadow-md">
            <div className="m-4 mt-10 flex justify-center">
              <h1 className="text-center font-[Sacramento] text-[#22b8cf] xs:text-5xl mobile:text-6xl sm:text-6xl  md:text-7xl">
                Menu & Pricing
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md bg-white px-[20px] pb-[50px] pt-[10px]">
              <div className="mb-[40px] flex flex-col md:flex-row">
                <MenuItem
                  smallImageUrl={orderingImageUrl}
                  largeImageUrl={orderingImageUrl}
                  altText="Simply Sweet by Amy Ordering Guidelines"
                />
                <MenuItem
                  smallImageUrl={menuImageUrl}
                  largeImageUrl={menuImageUrl}
                  altText="Simply Sweet by Amy Menu"
                />
                <MenuItem
                  smallImageUrl={pricingImageUrl}
                  largeImageUrl={pricingImageUrl}
                  altText="Simply Sweet by Amy Pricing Chart"
                />
              </div>
              <a
                href="/order"
                className="duration-3000 flex items-center justify-center gap-4 rounded-md bg-[#3bc9db] px-8 py-2 text-[18px] text-sm font-semibold uppercase tracking-[2px] text-white shadow-sm transition-transform hover:scale-105 hover:bg-[#66d9e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15aabf]"
              >
                <IoCartOutline /> Order Macarons
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
