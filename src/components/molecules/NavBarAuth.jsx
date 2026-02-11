import Logo from "../atom/Logo";

const NavBar = () => {
  return (
    <header className="bg-white py-4 px-6 shadow-[4px_8px_12px_#3E434A26] relative z-10 flex items-center border-b border-[#F1F1F1] md:px-30 md:py-3 md:shadow-none">
      <Logo />
    </header>
  );
};

export default NavBar;
