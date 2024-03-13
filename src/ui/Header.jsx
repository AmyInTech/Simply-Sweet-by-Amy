import { Link } from "react-router-dom";
import NavBar from "./Home Components/NavBar";
import NavBarOverlay from "./Home Components/NavBarOverlay";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";
import { BsInstagram, BsEnvelope } from "react-icons/bs";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Use useEffect to check the screen width and update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-10">
      <header className="flex items-center bg-[#e3fafc] p-2 font-[Sacramento] text-3xl xs:flex-col xs:justify-center xs:gap-2 xs:p-4 mobile:flex-col mobile:gap-2 sm:flex-row sm:justify-between sm:px-6 md:flex-row md:items-end md:justify-between md:gap-[5px]">
        <Link to="/">
          <img
            src="/img/canva-logos/ssba-logo-removebg.png"
            className="w-[280px] sm:w-[300px]"
          />
        </Link>
        <div className="hidden md:flex md:items-start md:justify-start md:gap-[6px]">
          <a
            href="https://www.instagram.com/simplysweetbyamymacarons/"
            target="_blank"
            className="rounded-[20px] bg-[#faa2c1] p-[6px] text-[18px] text-[#ffffff] hover:font-semibold hover:text-[#fff0f6]"
          >
            <BsInstagram
              title="@simplysweetbyamymacarons"
              alt="Instagram link to @simplysweetbyamymacarons"
            />
          </a>
          <a
            href="mailto: amy@simplysweetbyamy.com"
            target="_blank"
            className="rounded-[20px] bg-[#faa2c1] p-[6px] text-[18px] text-[#ffffff] hover:font-semibold hover:text-[#fff0f6]"
          >
            <BsEnvelope
              title="Send Amy an Email"
              alt="Link to send an email to Amy"
            />
          </a>
        </div>

        {isMobile && (
          <div onClick={toggleMenu}>
            <button className="flex items-end justify-center">
              <FiMenu className="text-3xl text-[#22b8cf] hover:font-bold hover:text-neutral-400 md:text-3xl" />
            </button>
          </div>
        )}
      </header>
      {!isMobile && <NavBar />}
      {menuOpen && isMobile && <NavBarOverlay />}
    </div>
  );
}

export default Header;
