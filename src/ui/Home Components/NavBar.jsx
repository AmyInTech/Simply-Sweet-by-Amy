import { useState } from "react";
import NavBarOverlay from "./NavBarOverlay";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-min">
      <nav className=" flex items-center justify-center bg-white py-1 text-sm tracking-widest text-[Raleway] text-stone-400">
        <div className="hidden md:flex">
          {/* Render other Links Here */}
          <a
            href="/"
            className="rounded-lg bg-[#fff5f5] px-6 py-2 hover:cursor-pointer hover:text-[#22b8cf] hover:underline hover:decoration-2 hover:underline-offset-4 hover:duration-300"
          >
            Home
          </a>
          <a
            href="/menu-and-ordering"
            className="rounded-lg px-6 py-1 hover:cursor-pointer hover:text-[#22b8cf] hover:underline hover:decoration-2 hover:underline-offset-4 hover:duration-300"
          >
            Menu & Ordering
          </a>
          <a
            href="/about-us"
            className="rounded-lg px-6 py-1 hover:cursor-pointer hover:text-[#22b8cf] hover:underline hover:decoration-2 hover:underline-offset-4 hover:duration-300"
          >
            About Us
          </a>
          <a
            href="/FAQs"
            className="rounded-lg px-6 py-1 hover:cursor-pointer hover:text-[#22b8cf] hover:underline hover:decoration-2 hover:underline-offset-4 hover:duration-300"
          >
            FAQs
          </a>
          <a
            href="/care-guide"
            className="rounded-lg px-6 py-1 hover:cursor-pointer hover:text-[#22b8cf] hover:underline hover:decoration-2 hover:underline-offset-4 hover:duration-300"
          >
            Care Guide
          </a>
          <a
            href="/contact"
            className="rounded-lg px-6 py-1 hover:cursor-pointer hover:text-[#22b8cf] hover:underline hover:decoration-2 hover:underline-offset-4 hover:duration-300"
          >
            Contact
          </a>
        </div>
      </nav>
      {menuOpen && <NavBarOverlay />}
    </div>
  );
}

export default NavBar;
