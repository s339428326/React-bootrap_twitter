import AuthInput from "../../component/AuthInput/AuthInput";
import Logo from "../../component/Logo/Logo";
import MainButton from "../../component/MainButton/MainButton";
import MainLink from "../../component/MainLink/MainLink";
//
import { Link } from "react-router-dom";
import { useState } from "react";

const RegistPage = () => {
  const [regist, setRegiset] = useState({
    userId: "",
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleUserId = (currentValue) => {
    setRegiset({
      ...regist,
      userId: currentValue,
    });
  };

  const handleUsername = (currentValue) => {
    setRegiset({
      ...regist,
      username: currentValue,
    });
  };

  const handleEmail = (currentValue) => {
    setRegiset({
      ...regist,
      email: currentValue,
    });
  };

  const handlePassword = (currentValue) => {
    setRegiset({
      ...regist,
      password: currentValue,
    });
  };

  const handleRePassword = (currentValue) => {
    setRegiset({
      ...regist,
      rePassword: currentValue,
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-6">
          <Logo title="建立你的帳號" />
          <AuthInput value={regist.userId} onChange={handleUserId} />
          <AuthInput
            label="名稱"
            value={regist.username}
            onChange={handleUsername}
          />
          <AuthInput
            label="Email"
            type="email"
            value={regist.email}
            onChange={handleEmail}
          />
          <AuthInput
            label="密碼"
            type="password"
            value={regist.password}
            onChange={handlePassword}
          />
          <AuthInput
            label="密碼確認"
            type="password"
            value={regist.rePassword}
            onChange={handleRePassword}
          />

          <div className="mb-20">
            <MainButton>登入</MainButton>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/login">
              <MainLink>取消</MainLink>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistPage;
