import AuthInput from "../../component/AuthInput/AuthInput";
import Logo from "../../component/Logo/Logo";
import MainButton from "../../component/MainButton/MainButton";
import MainLink from "../../component/MainLink/MainLink";
//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//React
import { Link } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const [register, setRegister] = useState({
    userId: "",
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleInput = (keyName) => (currentValue) => {
    setRegister({
      ...register,
      [keyName]: currentValue,
    });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} xl={6}>
          <Logo title="建立你的帳號" />
          <AuthInput value={register.userId} onChange={handleInput("userId")} />
          <AuthInput
            label="名稱"
            value={register.username}
            onChange={handleInput("username")}
          />
          <AuthInput
            label="Email"
            type="email"
            value={register.email}
            onChange={handleInput("email")}
          />
          <AuthInput
            label="密碼"
            type="password"
            value={register.password}
            onChange={handleInput("password")}
          />
          <AuthInput
            label="密碼確認"
            type="password"
            value={register.rePassword}
            onChange={handleInput("rePassword")}
          />
          <div className="mb-20">
            <MainButton>登入</MainButton>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/login">
              <MainLink>取消</MainLink>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
