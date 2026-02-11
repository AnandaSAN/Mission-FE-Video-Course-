import NavBar from "../components/molecules/NavBarAuth";
import FormRegister from "../components/molecules/FormRegister";
import AuthLayout from "../components/layout/AuthLayout";

const Register = () => {
  return (
    <>
      <NavBar />

      <AuthLayout
        title="Pendaftaran Akun"
        subtitle="Yuk, daftarkan akunmu sekarang juga!"
      >
        <FormRegister />
      </AuthLayout>
    </>
  );
};

export default Register;
