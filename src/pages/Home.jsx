import { useState } from "react";
import Hero from "../assets/images/HeroBG.jpg";
import NewsLetter from "../assets/images/NewsLetter.jpg";
import Rating from "../assets/images/Rating.png";
import ProfilAccount from "../assets/images/Profile.png";
import IconLogOut from "../assets/images/IconLogOut.png";

import ProfilCard1 from "../assets/images/ProfilCard1.png";
import ProfilCard2 from "../assets/images/ProfilCard2.png";
import ProfilCard3 from "../assets/images/ProfilCard3.png";
import ProfilCard4 from "../assets/images/ProfilCard4.png";
import ProfilCard5 from "../assets/images/ProfilCard5.png";
import ProfilCard6 from "../assets/images/ProfilCard6.png";
import ProfilCard7 from "../assets/images/ProfilCard7.png";
import ProfilCard8 from "../assets/images/ProfilCard8.png";
import ProfilCard9 from "../assets/images/ProfilCard3.png";

import ImgCard1 from "../assets/images/ImgCard1.jpg";
import ImgCard2 from "../assets/images/ImgCard2.jpg";
import ImgCard3 from "../assets/images/ImgCard3.jpg";
import ImgCard4 from "../assets/images/ImgCard4.jpg";
import ImgCard5 from "../assets/images/ImgCard5.jpg";
import ImgCard6 from "../assets/images/ImgCard6.jpg";
import ImgCard7 from "../assets/images/ImgCard7.jpg";
import ImgCard8 from "../assets/images/ImgCard8.jpg";
import ImgCard9 from "../assets/images/ImgCard9.jpg";

import Logo from "../components/atom/Logo";
import { Link } from "react-router";

const content = [
  { id: 1, img: ImgCard1, profil: ProfilCard1 },
  { id: 2, img: ImgCard2, profil: ProfilCard2 },
  { id: 3, img: ImgCard3, profil: ProfilCard3 },
  { id: 4, img: ImgCard4, profil: ProfilCard4 },
  { id: 5, img: ImgCard5, profil: ProfilCard5 },
  { id: 6, img: ImgCard6, profil: ProfilCard6 },
  { id: 7, img: ImgCard7, profil: ProfilCard7 },
  { id: 8, img: ImgCard8, profil: ProfilCard8 },
  { id: 9, img: ImgCard9, profil: ProfilCard3 },
];

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-[20px_10px_40px_rgba(62,67,74,0.31)] relative w-full h-18.5 border border-[#3A35411F] md:shadow-none px-6 py-4 md:px-15 lg:px-30 lg:py-3 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center space-x-6">
          <details className="relative">
            <summary className="cursor-pointer text-gray-700 font-medium hover:text-orange-500 list-none">
              Kategori
            </summary>
          </details>
          <details className="relative">
            <summary className="list-none cursor-pointer">
              <img
                src={ProfilAccount}
                alt="Profile"
                className="w-10 h-10 rounded-[10px] border-none"
              />
            </summary>
            <ul className="absolute md:right-0 mt-3 w-50 py-4 bg-white border rounded-br rounded-bl shadow-lg z-11">
              <li>
                <Link
                  to=""
                  className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
                >
                  Profil Saya
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
                >
                  Kelas Saya
                </Link>
              </li>
              <li>
                <Link
                  to=""
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

        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </header>

      {isOpen && (
        <div className="md:hidden absolute w-full top-18.5 bg-white shadow-lg z-11">
          <ul className="py-1 rounded-br rounded-bl bg-white shadow-lg z-1">
            <li>
              <Link
                to=""
                className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
              >
                Kategori
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
              >
                Profil Saya
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
              >
                Kelas Saya
              </Link>
            </li>
            <li>
              <Link
                to=""
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
      )}

      <main className="grow bg-[#fdf8f2] px-5 py-7 md:px-15 lg:px-30 lg:py-16">
        <div className="w-full relative overflow-hidden rounded-[10px] shadow-lg mx-auto text-white">
          <img
            src={Hero}
            alt="HeroBG"
            className="absolute w-full h-full object-cover top-0 left-0 brightness-[0.2] z-0"
          />
          <div className="relative px-5 py-9.25 z-10">
            <h1 className="font-poppins font-bold text-2xl text-center">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
              Interaktif!
            </h1>
            <p className="font-dm-sans font-medium text-sm text-center mb-6">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
              berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman Anda.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-1.75 py-2.5 md:px6.5 rounded-[10px] w-full sm:max-w-92.25 text-sm md:text-[16px] font-dm-sans font-regular transition xl:w-92 mx-auto flex items-center justify-center">
              Temukan Video Course untuk Dipelajari!
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-[#fdf8f2] px-6 py-4 md:px-30 md:py-16"></footer>
    </div>
  );
};

export default Home;
