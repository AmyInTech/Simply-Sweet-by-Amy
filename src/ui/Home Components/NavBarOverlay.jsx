import { useState, useRef } from "react";
import { FiX } from "react-icons/fi";

function NavBarOverlay() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Reference to the overlay element
  const overlayRef = useRef(null);

  // Checks if the clicked element is an anchor tag
  const handleMenuClick = (e) => {
    if (!e.target.tagName || e.target.tagName.toLowerCase() !== "a") {
      toggleMenu();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 cursor-pointer transition-opacity ${
        menuOpen ? "opacity-90" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        ref={overlayRef}
        className={`fixed left-0 top-0 z-50 h-full w-full transform overflow-y-auto bg-white transition-transform duration-[5s] ease-linear ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Collapsible menu content */}
        <div className="flex h-full flex-col gap-24" onClick={handleMenuClick}>
          <div className="mr-8 mt-8 flex w-auto justify-end">
            <FiX className="text-5xl text-[#22b8cf]  hover:font-bold hover:text-neutral-400" />
          </div>
          <div className="flex flex-col items-center justify-center gap-12 text-center">
            <a
              href="/home"
              className="block px-4 py-2 font-[Raleway] text-3xl font-medium tracking-wide text-[#1098ad] hover:text-neutral-400"
            >
              Home
            </a>
            <a
              href="/menu"
              className="block px-4 py-2 font-[Raleway] text-3xl font-medium tracking-wide text-[#1098ad] hover:text-neutral-400"
            >
              Menu & Ordering
            </a>
            <a
              href="/about-us"
              className="block px-4 py-2 font-[Raleway] text-3xl font-medium tracking-wide text-[#1098ad] hover:text-neutral-400"
            >
              About Us
            </a>
            <a
              href="/FAQ"
              className="block px-4 py-2 font-[Raleway] text-3xl font-medium tracking-wide text-[#1098ad] hover:text-neutral-400"
            >
              FAQs
            </a>
            <a
              href="/care-guide"
              className="block px-4 py-2 font-[Raleway] text-3xl font-medium tracking-wide text-[#1098ad] hover:text-neutral-400"
            >
              Care Guide
            </a>
            <a
              href="/contact"
              className="block px-4 py-2 font-[Raleway] text-3xl font-medium tracking-wide text-[#1098ad] hover:text-neutral-400"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarOverlay;
