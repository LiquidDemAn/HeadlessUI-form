import logo from "assets/logo.svg";
import close from "assets/close.svg";

const Header = () => {
  return (
    <div className="flex w-full fixed justify-between items-center px-22 pt-11 ">
      <div className="flex gap-4 items-center">
        <img src={logo} alt="logo" />
        <h1 className="raleway text-base font-bold">COMPANY NAME</h1>
      </div>
      <img className="cursor-pointer" src={close} alt="close" />
    </div>
  );
};

export default Header;
