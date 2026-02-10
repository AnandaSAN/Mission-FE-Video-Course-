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
import Footer from "../components/layout/Footer";

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
      <header className="bg-white shadow-[20px_10px_40px_rgba(62,67,74,0.31)] relative w-full h-18.5 border border-[#3A35411F] md:shadow-none px-6 py-4 md:px-15 lg:px-30 lg:py-3 flex justify-between items-center z-11">
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
            <ul className="absolute md:right-0 mt-3 w-50 py-4 bg-white border rounded-br-[10px] rounded-bl-[10px] border-[#3A35411F] shadow-lg z-11">
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
      </header>

      <main className="grow bg-[#fdf8f2] px-5 py-7 md:px-15 lg:px-30 lg:py-16">
        <div className="w-full relative overflow-hidden rounded-[10px] shadow-lg mx-auto text-white">
          <img
            src={Hero}
            alt="HeroBG"
            className="absolute w-full h-full object-cover top-0 left-0 brightness-[0.2] z-0"
          />
          <div className="relative px-5 py-9.25 lg:px-35 lg:pt-20.5 lg:pb-16 xl:py-25 z-10">
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

        <div className="mt-6 md:mt-16">
          <div>
            <h1 className="font-poppins font-semibold text-2xl text-[#222325]">
              Koleksi Video Pembelajaran Unggulan
            </h1>
            <p className="mt-2.5 font-dm-sans font-medium text-sm text-[#333333AD]">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>
          <div className="mt-6 md:mt-8">
            <ul className="flex flex-nowrap whitespace-nowrap gap-1.5 overflow-x-auto hide-scrollbar">
              <li className="relative py-3 pr-9 text-sm font-dm-sans font-medium text-[#f64920]  after:content-[''] after:absolute after:left-0 after:rounded-[10px] after:w-13 after:border-b-[6px] after:border-[#f64920] after:bottom-0">
                <a href="#">Semua Kelas</a>
              </li>
              <li className="py-3 pr-9 text-sm font-medium text-gray-800 hover:text-[#f64920]">
                <a href="#">Pemasaran</a>
              </li>
              <li className="py-3 pr-9 text-sm font-medium text-gray-800 hover:text-[#f64920]">
                <a href="#">Design</a>
              </li>
              <li className="py-3 pr-9 text-sm font-medium text-gray-800 hover:text-[#f64920]">
                <a href="#">Pengembangan Diri</a>
              </li>
              <li className="py-3 pr-9 text-sm font-medium text-gray-800 hover:text-[#f64920]">
                <a href="#">Bisnis</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 md:space-y-2">
          {content.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white border border-gray-200 rounded-xl p-4 w-full max-w-112.5 mx-auto shadow-md transition hover:shadow-lg"
            >
              <div className="flex sm:hidden gap-3">
                <img
                  src={item.img}
                  alt="Content"
                  className="w-25 h-25 rounded-lg object-cover shrink-0"
                />
                <div className="flex flex-col justify-center gap-2">
                  <p className="font-poppins font-semibold text-[16px] text-[#222325]">
                    Big 4 Auditor Financial Analyst
                  </p>
                  <div className="flex items-center gap-2">
                    <img
                      src={item.profil}
                      alt="profile"
                      className="w-9 h-9 rounded-[10px] object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="font-dm-sans font-medium text-sm text-[#222325]">
                        Jenna Ortega
                      </span>
                      <p className="font-dm-sans font-normal text-[12px] text-[#333333AD]">
                        Senior Accountant
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex flex-col gap-4">
                <img
                  src={item.img}
                  alt="content"
                  className="w-full h-45 object-cover rounded-[10px]"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-poppins font-semibold text-[18px] text-[#222325]">
                    Big 4 Auditor Financial Analyst
                  </p>
                  <p className="font-dm-sans font-medium text-[16px] text-[#333333AD]">
                    Mulai transformasi dengan instruktur profesional, harga yang
                    terjangkau, dan ...
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <img
                    src={item.profil}
                    alt="profile"
                    className="w-10 h-10 rounded-[10px]"
                  />
                  <div>
                    <p className="font-dm-sans font-medium text-[16px] text-[#222325]">
                      Jenna Ortega
                    </p>
                    <p className="font-dm-sans font-normal text-sm text-[#333333AD]">
                      Senior Accountant di{" "}
                      <span className="font-bold">Gojek</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-2">
                  <img src={Rating} alt="rating" className="w-20 md:w-22.5" />
                  <p className="text-xs md:text-sm text-gray-500 underline">
                    3.5 (86)
                  </p>
                </div>
                <div className="text-base md:text-lg font-bold text-green-500">
                  Rp 300K
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-full max-w-7xl overflow-hidden rounded-[10px] text-white shadow-lg mx-auto px-5 py-12 my-10 md:px-15 lg:px-30 xl:px-85 lg:py-23">
          <img
            src={NewsLetter}
            alt="newsbege"
            className="absolute  object-cover w-full h-full left-0 top-0 brightness-[0.2] z-0"
          />
          <div className="relative z-10 flex flex-col items-center text-center gap-1">
            <p className="font-dm-sans font-medium text-[16px] text-[#C1C2C4] tracking-wide">
              NEWSLETTER
            </p>
            <h1 className="font-poppins font-semibold text-2xl">
              Mau Belajar Lebih Banyak?
            </h1>
            <p className="mt-1.5 font-dm-sans font-normal text-sm text-[#F4F5FA] tracking-wide">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik harisenin.com
            </p>

            <div className="w-full max-w-md flex flex-col gap-4 overflow-hidden mt-8 md:relative">
              <input
                type="text"
                placeholder="Masukkan Emailmu"
                className="pr-2 pl-3 py-2.5 text-center bg-white text-[#333333AD] font-dm-sans font-normal text-sm rounded-[10px] focus:outline-none md:text-left md:pr-35 xl:pr-34 xl:h-10"
              />
              <button className="bg-[#FFBD3A] px-19.5 py-2 rounded-[10px] transition text-[16px] font-dm-sans font-bold hover:bg-[#ffb835] md:absolute md:px-5 md:py-1 md:right-2 md:bottom-1/2 md:translate-y-1/2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
