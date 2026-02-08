import { Link, useNavigate } from "react-router";
import Button from "../atom/Button";
import LogoMata from "../../assets/images/Mata.png";
import LogoGoogle from "../../assets/images/LogoGoogle.png";
import Inputfield from "../atom/InputField";

const FormLogin = () => {
  const navigate = useNavigate();

  return (
    <form className="space-y-4">
      <div className="flex flex-col space-y-1">
        <label className="text-sm md:text-[16px] font-regular text-[#4A505C]">
          E-Mail <span className="text-red-600">*</span>
        </label>
        <Inputfield type="email" placeholder="" />
      </div>

      <div className="flex flex-col space-y-1 relative">
        <label className="text-sm md:text-[16px] font-regular text-[#4A505C]">
          Password <span className="text-red-600">*</span>
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

      <Button type="button" variant="primary" onClick={() => navigate("/")}>
        Masuk
      </Button>

      <Button
        type="button"
        variant="secondary"
        onClick={() => navigate("/register")}
      >
        Daftar
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

export default FormLogin;
