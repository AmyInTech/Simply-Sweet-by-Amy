//Modal using JS and CSS only:
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import Modal from './modal';
import menuImage from "../../img/menu/simply-sweet-by-amy-menu/flavors.png";
import orderingImage from "../../img/menu/simply-sweet-by-amy-menu/ordering.png";
import pricingImage from "../../img/menu/simply-sweet-by-amy-menu/pricing.png";

function MenuAndOrderingCopy() {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isOrderingModalOpen, setIsOrderingModalOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

  const openMenuModal = () => setIsMenuModalOpen(true);
  const closeMenuModal = () => setIsMenuModalOpen(false);

  const openOrderingModal = () => setIsOrderingModalOpen(true);
  const closeOrderingModal = () => setIsOrderingModalOpen(false);

  const openPricingModal = () => setIsPricingModalOpen(true);
  const closePricingModal = () => setIsPricingModalOpen(false);

  return (
    <div className="flex items-center justify-center bg-[#e3fafc] p-[100px] pt-40 xs:h-auto xs:overflow-hidden xs:p-[0px] xs:pt-12">
      <div className="max-w-4xl bg-[#e3fafc] p-8 xs:p-0 md:mt-[80px] md:p-10 lg:p-14">
        <div className="flex items-center justify-center">
          <div className="flex items-stretch rounded-t-md bg-white shadow-md xs:w-screen xs:flex-col sm:w-auto">
            <div className="mb-4 mt-10 flex justify-center mobile:mt-28 md:mt-10">
              <h1 className="font-[Sacramento] text-4xl text-[#22b8cf] mobile:text-4xl sm:text-5xl md:text-6xl">
                Menu and Ordering
              </h1>
            </div>
            <div className="rounded-md bg-white p-[20px]">
              <div className="flex justify-between">
                <div className="ordering-image-container" onClick={openOrderingModal} style={{ cursor: 'zoom-in' }}>
                  <img src={orderingImage} alt="Ordering Information" className="w-full" />
                </div>
                <div className="menu-image-container" onClick={openMenuModal} style={{ cursor: 'zoom-in' }}>
                  <img src={menuImage} alt="Flavors Menu" className="w-full" />
                </div>
                <div className="pricing-image-container" onClick={openPricingModal} style={{ cursor: 'zoom-in' }}>
                  <img src={pricingImage} alt="Pricing Information" className="w-full" />
                </div>
              </div>

              {/* Modals */}
              {/* Ordering Page */}
              <Modal isOpen={isOrderingModalOpen} onClose={closeOrderingModal}>
                <img src={orderingImage} alt="Full Size Ordering" className="w-full" />
              </Modal>
              {/* Flavors Page */}
              <Modal isOpen={isMenuModalOpen} onClose={closeMenuModal}>
                <img src={menuImage} alt="Full Size Menu" className="w-full" />
              </Modal>
              {/* Pricing Page*/}
              <Modal isOpen={isPricingModalOpen} onClose={closePricingModal}>
                <img src={pricingImage} alt="Full Size Pricing" className="w-full" />
              </Modal>

              <div className="flex flex-col items-center justify-center gap-2 pt-6">
                <span className="font-[Raleway] text-[16px] font-bold text-[#15aabf]">
                  Ready to place your order?
                </span>
                {/* Replace the link below with the SetMore link once it's set up */}
                <a
                  href="/placeholder-link"
                  className="flex items-center justify-center gap-2 rounded-md bg-[#3bc9db] px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#15aabf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15aabf]"
                >
                  <IoCartOutline /> Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



//Modal Using React Modal:
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import menuImage from "../../img/menu/simply-sweet-by-amy-menu/flavors.png";
import orderingImage from "../../img/menu/simply-sweet-by-amy-menu/ordering.png";
import pricingImage from "../../img/menu/simply-sweet-by-amy-menu/pricing.png";
import ModalImage from "react-modal-image";

function MenuAndOrdering() {

  return (
    <div className="flex items-center justify-center bg-[#e3fafc] p-[100px] pt-40 xs:h-auto xs:overflow-hidden xs:p-[0px] xs:pt-12">
      <div className="max-w-[1200px] bg-[#e3fafc] p-8 xs:p-0 md:mt-[80px] md:p-10 lg:p-14">
        <div className="flex items-center justify-center">
          <div className="flex items-stretch rounded-md bg-white shadow-md xs:w-screen xs:flex-col sm:w-auto">
            <div className="mb-4 mt-10 flex justify-center mobile:mt-28 md:mt-10">
              <h1 className="font-[Sacramento] text-4xl text-[#22b8cf] mobile:text-4xl sm:text-5xl md:text-6xl">
                Menu and Ordering
              </h1>
            </div>
            <div className="rounded-md bg-white p-[20px]">
              <div className="flex justify-between gap-[20px]">
              <ModalImage
              small={orderingImage}
              large={orderingImage}
              showRotate={true}
              alt="Simply Sweet by Amy Ordering Guidelines"
              />
              <ModalImage
              small={menuImage}
              large={menuImage}
              showRotate={true}
              alt="Simply Sweet by Amy Menu"
              />
               <ModalImage
              small={pricingImage}
              large={pricingImage}
              showRotate={true}
              alt="Simply Sweet by Amy Pricing Chart"
              />
              </div>



              <div className="flex flex-col items-center justify-center gap-2 pt-6">
                <span className="font-[Raleway] text-[16px] font-bold text-[#15aabf]">
                  Ready to place your order?
                </span>
                {/* Replace the link below with the SetMore link once it's set up */}
                <a
                  href="/placeholder-link"
                  className="flex items-center justify-center gap-2 rounded-md bg-[#3bc9db] px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#15aabf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15aabf]"
                >
                  <IoCartOutline /> Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuAndOrderingCopy;



