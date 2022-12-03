import { useState } from "react";
import AuthInput from "../../component/AuthInput/AuthInput";
import Logo from "../../component/Logo/Logo";
import MainButton from "../../component/MainButton/MainButton";

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
          <MainButton>登入</MainButton>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
