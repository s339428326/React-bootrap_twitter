//Component
import AuthInput from "../../component/AuthInput/AuthInput";
import Logo from "../../component/Logo/Logo";
import MainButton from "../../component/MainButton/MainButton";
import MainLink from "../../component/MainLink/MainLink";
//React
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [login, setLogin] = useState({
    userId: "",
    password: "",
  });

  const handleUserId = (currentValue) => {
    setLogin({
      ...login,
      userId: currentValue,
    });
  };

  const handlePassword = (currentValue) => {
    setLogin({
      ...login,
      password: currentValue,
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-6">
          <Logo title={"登入 Alphitter"} />
          <AuthInput value={login.userId} onChange={handleUserId} />
          <AuthInput
            label="密碼"
            type="password"
            value={login.password}
            onChange={handlePassword}
          />
          <div className="mb-20">
            <MainButton>登入</MainButton>
          </div>
          <div className="d-flex gap-8 justify-content-end">
            <Link to="/regist">
              <MainLink>註冊 Alphitter</MainLink>
            </Link>
            <Link to="/adminLogin">
              <MainLink>後台登入</MainLink>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
