import { Link } from "react-router";
import LogoImage from "../../assets/images/LogoBelajar.png";

function Logo(props) {
  return (
    <Link to="/">
      <img src={LogoImage} alt="logo" className={"h-10 w-auto " + props.className} />
    </Link>
  );
}
export default Logo;
