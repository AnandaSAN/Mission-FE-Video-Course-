import Footer from "../molecules/Footer";
import NavBarMain from "../molecules/NavBarMain";

const MainLayout = ({ children }) => {

  return (
    <div className="min-h-screen flex flex-col">
      <NavBarMain />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
