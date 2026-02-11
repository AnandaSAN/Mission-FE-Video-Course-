import Hero from "../assets/images/HeroBG.jpg";
import NewsLetter from "../assets/images/NewsLetter.jpg";

import ProfilCard1 from "../assets/images/ProfilCard1.png";
import ProfilCard2 from "../assets/images/ProfilCard2.png";
import ProfilCard3 from "../assets/images/ProfilCard3.png";
import ProfilCard4 from "../assets/images/ProfilCard4.png";
import ProfilCard5 from "../assets/images/ProfilCard5.png";
import ProfilCard6 from "../assets/images/ProfilCard6.png";
import ProfilCard7 from "../assets/images/ProfilCard7.png";
import ProfilCard8 from "../assets/images/ProfilCard8.png";

import ImgCard1 from "../assets/images/ImgCard1.jpg";
import ImgCard2 from "../assets/images/ImgCard2.jpg";
import ImgCard3 from "../assets/images/ImgCard3.jpg";
import ImgCard4 from "../assets/images/ImgCard4.jpg";
import ImgCard5 from "../assets/images/ImgCard5.jpg";
import ImgCard6 from "../assets/images/ImgCard6.jpg";
import ImgCard7 from "../assets/images/ImgCard7.jpg";
import ImgCard8 from "../assets/images/ImgCard8.jpg";
import ImgCard9 from "../assets/images/ImgCard9.jpg";

import { useState } from "react";
import Card from "../components/molecules/Card";
import MainLayout from "../components/layout/MainLayout";

const content = [
  { id: 1, category: "Pemasaran", img: ImgCard1, profil: ProfilCard1 },
  { id: 2, category: "Bisnis", img: ImgCard2, profil: ProfilCard2 },
  { id: 3, category: "Design", img: ImgCard3, profil: ProfilCard3 },
  { id: 4, category: "Design", img: ImgCard4, profil: ProfilCard4 },
  { id: 5, category: "Pengembangan Diri", img: ImgCard5, profil: ProfilCard5 },
  { id: 6, category: "Pengembangan Diri", img: ImgCard6, profil: ProfilCard6 },
  { id: 7, category: "Pengembangan Diri", img: ImgCard7, profil: ProfilCard7 },
  { id: 8, category: "Pemasaran", img: ImgCard8, profil: ProfilCard8 },
  { id: 9, category: "Pemasaran", img: ImgCard9, profil: ProfilCard3 },
];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  return (
    <MainLayout>
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
            <button className="bg-green-500 hover:bg-green-600 text-white px-1.75 py-2.5 md:px6.5 rounded-[10px] w-full sm:max-w-92.25 text-sm md:text-[16px] font-dm-sans font-regular transition xl:w-92 mx-auto flex items-center justify-center cursor-pointer">
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
              {[
                "Semua",
                "Pemasaran",
                "Bisnis",
                "Design",
                "Pengembangan Diri",
              ].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`py-3 pr-9 text-sm font-medium transition ${activeCategory === cat ? "text-[#f64920] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-13 after:border-b-[6px] after:border-[#f64920] after:rounded-[10px]" : "text-gray-800 hover:text-[#f64920]"}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 md:space-y-2">
          {content.filter(item => activeCategory === "Semua" ? true : item.category === activeCategory).map(item => <Card key={item.id} item={item} />)}
          {/* {content.map((item) => (
            <Card key={item.id} item={item} />
          ))} */}
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
              <button className="bg-[#FFBD3A] px-19.5 py-2 rounded-[10px] transition text-[16px] font-dm-sans font-bold hover:bg-[#ffb835] md:absolute md:px-5 md:py-1 md:right-2 md:bottom-1/2 md:translate-y-1/2 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default Home;
