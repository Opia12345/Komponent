import { useEffect, useState } from "react";
import { navLinks } from "./components/data.ts";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faTimes } from "@fortawesome/free-solid-svg-icons";
import NavSectionOne from "./components/NavSectionOne.tsx";
import MobileNav from "./components/MobileNav.tsx";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`p-6 fixed w-full z-[9999] top-0 right-0 flex items-center justify-around transition-all duration-300 ${
          isScrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
        }`}
      >
        <NavSectionOne />
        {/* Desktop Nav */}
        <div className="md:flex gap-3 hidden font-light text-white items-center">
          {navLinks.map((navLink) => (
            <NavLink to={navLink.path} key={navLink.id}>
              <h4 className="hover:text-slate-300">{navLink.name}</h4>
            </NavLink>
          ))}
          <button className="bg-blue-400 px-4 py-2 cursor-pointer hover:bg-blue-500 transition-all ease-in-out duration-300 rounded-md text-white font-semibold">
            Login
          </button>
          <button className="bg-slate-200/20 px-4 py-2 cursor-pointer hover:bg-slate-400/20 transition-all ease-in-out duration-300 rounded-md text-white font-semibold">
            Register
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <FontAwesomeIcon
            onClick={() => setMobileNav((prev) => !prev)}
            icon={mobileNav ? faTimes : faBarsStaggered}
            className="text-white text-xl cursor-pointer transition-all duration-300"
          />
        </div>
      </nav>

      {/* Mobile Nav Panel */}
      <MobileNav
        navLinks={navLinks}
        setMobileNav={setMobileNav}
        isVisible={mobileNav}
      />
    </header>
  );
};

export default Navbar;
