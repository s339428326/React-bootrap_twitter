//Component
import MainButton from "../MainButton/MainButton";
//React
import { Link } from "react-router-dom";
import { LogoIcon } from "../Icons/Icons";

const navBar = ({}) => {

}

const NavBar = ({ children }) => {
  return (
    <div className="row">
      <div className="col-3">
        <Link to="/home">
          <LogoIcon width={30} height={30} />
        </Link>
        {children}
        {/* <ul className="list-unstyled">
          <li className="d-flex gap-8">
            <p className="mb-0">首頁</p>
          </li>
          <li className="d-flex gap-8">
            <p className="mb-0">個人資料</p>
          </li>
          <li className="d-flex gap-8">
            <p className="mb-0">設定</p>
          </li>
        </ul> */}

        <MainButton>推文</MainButton>

        <Link to="/login">登出</Link>
      </div>
    </div>
  );
};

export default NavBar;
