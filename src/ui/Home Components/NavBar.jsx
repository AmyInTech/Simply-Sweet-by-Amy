import { useState, useEffect } from "react";
import NavBarOverlay from "./NavBarOverlay";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateActiveLink = () => {
      const links = document.querySelectorAll(".nav-link");
      links.forEach((link) => {
        if (link.getAttribute("href") === window.location.pathname) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };

    updateActiveLink();

    return () => {
      window.removeEventListener("popstate", updateActiveLink);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-min">
      <nav className="flex items-center justify-center bg-white py-1 text-sm tracking-widest text-[Raleway] text-stone-400">
        <div className="hidden md:flex">
          <a
            href="/"
            className="nav-link flex justify-center items-center text-center rounded-lg px-6 py-2 hover:cursor-pointer hover:text-[#f783ac] hover:duration-300"
          >
            Home
          </a>
          <a
            href="/menu-and-ordering"
            className="nav-link flex justify-center items-center text-center rounded-lg px-6 py-2 hover:cursor-pointer hover:text-[#f783ac] hover:duration-300"
          >
            Menu & Ordering
          </a>
          <a
            href="/about-us"
            className="nav-link flex justify-center items-center text-center rounded-lg px-6 py-2 hover:cursor-pointer hover:text-[#f783ac] hover:duration-300"
          >
            About Us
          </a>
          <a
            href="/FAQs"
            className="nav-link flex justify-center items-center text-center rounded-lg px-6 py-2 hover:cursor-pointer hover:text-[#f783ac] hover:duration-300"
          >
            FAQs
          </a>
          <a
            href="/care-guide"
            className="nav-link flex justify-center items-center text-center rounded-lg px-6 py-2 hover:cursor-pointer hover:text-[#f783ac] hover:duration-300"
          >
            Care Guide
          </a>
          <a
            href="/contact"
            className="nav-link flex justify-center items-center text-center rounded-lg px-6 py-2 hover:cursor-pointer hover:text-[#f783ac] hover:duration-300"
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
