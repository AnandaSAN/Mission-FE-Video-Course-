import { Link, useNavigate } from "react-router";
import Button from "../atom/Button";
import LogoMata from "../../assets/images/Mata.png";
import LogoGoogle from "../../assets/images/LogoGoogle.png";
import Inputfield from "../atom/InputField";
import Bendera from "../../assets/images/Indonesia.png";

const FormRegister = () => {
  const navigate = useNavigate();

  return (
    <form className="space-y-4">
      <div className="flex flex-col space-y-1">
        <label className="text-sm md:text-[16px] font-regular text-[#4A505C]">
          Nama Lengkap <span className="text-red-600">*</span>
        </label>
        <Inputfield type="text" placeholder="" />
      </div>

      <div className="flex flex-col space-y-1">
        <label className="text-sm md:text-[16px] font-regular text-[#4A505C]">
          E-Mail <span className="text-red-600">*</span>
        </label>
        <Inputfield type="email" placeholder="" />
      </div>

      <div className="flex flex-col space-y-1">
        <label
          htmlFor="phone"
          className="text-sm md:text-[16px] font-regular text-[#4A505C]"
        >
          No. Hp <span className="text-red-600">*</span>
        </label>

        <div className="flex items-center">
          <div className="w-12 h-12 bg-[#f0f0f0] flex items-center justify-center border border-[#3a35411f] rounded-l-md">
            <img src={Bendera} alt="Indonesia" className="w-6 h-6" />
          </div>
          <select
            name="kode"
            className="h-12 px-2 text-sm md:text-[16px] bg-white border border-[#3A35411F] rounded-r-lg focus:ring-1 focus:ring-zinc-800 outline-none"
            required
          >
            <option value="+62">+62</option>
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder=""
            className="flex-1 w-full h-12 px-3 ml-2 border border-[#3a35411f] rounded-md focus:ring-2 focus:ring-zinc-800 outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-1 relative">
        <label className="text-sm md:text-[16px] font-regular text-[#4A505C]">
          Kata Sandi <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <Inputfield type="password" placeholder="" />
          <img
            src={LogoMata}
            alt="mata"
            className="w-6 h-6 absolute right-3 top-1/2 -translate-y-1/2 hover:cursor-pointer"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-1 relative">
        <label className="text-sm md:text-[16px] font-regular text-[#4A505C]">
          Konfirmasi Kata Sandi <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <Inputfield type="password" placeholder="" />
          <img
            src={LogoMata}
            alt="mata"
            className="w-6 h-6 absolute right-3 top-1/2 -translate-y-1/2 hover:cursor-pointer"
          />
        </div>
      </div>

      <div className="text-right">
        <Link
          to="#"
          className="text-sm md:text-[16px] font-medium text-[#333333AD] hover:underline"
        >
          Lupa Password?
        </Link>
      </div>

      <Button variant="primary" onClick={() => navigate("/login")}>
        Daftar
      </Button>
      <Button variant="secondary" onClick={() => navigate("/login")}>
        Masuk
      </Button>
      <div className="flex items-center my-6">
        <div className="grow border-b border-[#ccc]" />
        <span className="mx-2 text-[#333333ad] text-sm md:text-[16px]">
          atau
        </span>
        <div className=" grow border-b border-[#ccc]" />
      </div>

      <Button variant="others">
        <img
          src={LogoGoogle}
          alt="google"
          className="w-5 h-5 mr-2 inline-block"
        />{" "}
        Masuk dengan Google
      </Button>
    </form>
  );
};

export default FormRegister;
