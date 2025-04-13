import { Link } from "react-router-dom";

const NavSectionOne = () => {
  return (
    <div className="flex items-center gap-2">
      <img src="/Komponent.svg" className="w-[30px]" alt="app_logo" />
      <Link to="/">
        <h1 className="text-xl font-black text-white mr-[20px]">Komponent</h1>
      </Link>
    </div>
  );
};

export default NavSectionOne;
