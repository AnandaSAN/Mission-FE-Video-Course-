import NavBar from "../components/layout/NavBar";
import FormRegister from "../components/molecules/FormRegister";

const Register = () => {
  return (
    <>
      <NavBar />

      <div className="bg-[#fdf8f2] flex justify-center items-center pt-10 pb-10">
        <div className="bg-white p-9 rounded-2xl border border-[#F1F1F1] w-full max-w-[320px] md:max-w-md font-dm-sans">
          <h2 className="text-center text-[24px] font-poppins font-semibold mb-2.5 md:text-[32px]">
            Pendaftaran Akun
          </h2>
          <p className="text-center text-[#333333ad] font-regular text-sm mb-6 md:text-[16px]">
            Yuk, daftarkan akunmu sekarang juga!
          </p>

          <FormRegister />
        </div>
      </div>
    </>
  );
};

export default Register;
