
const Header = () => {
  return (
    <header className="relative h-screen overflow-hidden">

      {/* Header Content */}
      <div
        className="flex text-center p-4 flex-col items-center z-10 relative justify-center h-full"
      >
        <span className="bg-[#2E6D9C] text-white lg:text-lg md:text-lg text-xs font-light px-4 py-2 rounded-full border">
          Company Name
        </span>
        <div>
          <h1 className="lg:text-8xl md:text-7xl text-4xl font-black mt-4">
          A Very Catchy for <br /> TagLine or Slogan <br /> Here
          </h1>
          <h5 className="mt-4 md:text-xl lg:text-3xl text-xs">
            Company Slogan Goes Here.
          </h5>
        </div>
        <div className="flex mt-8 items-center gap-3">
          <button className="header_button_1">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;