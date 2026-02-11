import ProfilAccount from "../../assets/images/Profile.png";
import IconLogOut from "../../assets/images/IconLogOut.png";

import { Link } from "react-router";
import { useState } from "react";
import Logo from "../atom/Logo";

const NavBarMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-[20px_10px_40px_rgba(62,67,74,0.31)] relative w-full h-18.5 border border-[#3A35411F] md:shadow-none px-6 py-4 md:px-15 lg:px-30 lg:py-3 flex justify-between items-center z-11">
      <Logo />
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="cursor-pointer text-[#333333AD] font-dm-sans text-base font-medium hover:underline" >Kategori</Link>

        <details className="relative">
          <summary className="list-none cursor-pointer">
            <img
              src={ProfilAccount}
              alt="Profile"
              className="w-10 h-10 rounded-[10px] border-none"
            />
          </summary>
          <ul className="absolute md:right-0 mt-3 w-50 py-4 bg-white border rounded-br-[10px] rounded-bl-[10px] border-[#3A35411F] shadow-lg z-11">
            <li>
              <Link
                to="/"
                className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
              >
                Profil Saya
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
              >
                Kelas Saya
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
              >
                Pesanan Saya
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block text-[#FF5C2B] px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
              >
                Keluar{" "}
                <img src={IconLogOut} alt="Keluar" className="inline h-6" />
              </Link>
            </li>
          </ul>
        </details>
      </div>
      {/* Mobile Navbar Button */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-0.5 bg-gray-700"></span>
        <span className="w-6 h-0.5 bg-gray-700"></span>
        <span className="w-6 h-0.5 bg-gray-700"></span>
      </button>
      {/* Mobile Navbar List */}
      <div
        className={`md:hidden absolute w-full left-0 top-18.5 bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-125 opacity-100 z-11" : "max-h-0 opacity-0 z-0"}`}
      >
        <ul className="py-1 rounded-br rounded-bl bg-white shadow-lg z-1">
          <li>
            <Link
              to="/"
              className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
            >
              Kategori
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
            >
              Profil Saya
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
            >
              Kelas Saya
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
            >
              Pesanan Saya
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="block text-[#FF5C2B] px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
            >
              Keluar{" "}
              <img src={IconLogOut} alt="Keluar" className="inline h-6" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBarMain;
