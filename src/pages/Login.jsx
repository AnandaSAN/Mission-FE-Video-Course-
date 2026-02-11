import AuthLayout from "../components/layout/AuthLayout";
import NavBar from "../components/molecules/NavBarAuth";
import FormLogin from "../components/molecules/FormLogin";

const Login = () => {
  return (
    <>
      <NavBar />
      <AuthLayout
        title="Masuk ke Akun"
        subtitle="Yuk, lanjutin belajarmu di videobelajar."
      >
        <FormLogin />
      </AuthLayout>
    </>
  );
};

export default Login;
