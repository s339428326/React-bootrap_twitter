//Component
import AuthInput from "../../component/AuthInput/AuthInput";
import Logo from "../../component/Logo/Logo";
import MainButton from "../../component/MainButton/MainButton";
import MainLink from "../../component/MainLink/MainLink";
//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//React
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [login, setLogin] = useState({
    userId: "",
    password: "",
  });

  const handleInput = (keyName) => (currentValue) => {
    setLogin({
      ...login,
      [keyName]: currentValue,
    });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xl={6} md={8}>
          <Logo title={"登入 Alphitter"} />
          <AuthInput value={login.userId} onChange={handleInput("userId")} />
          <AuthInput
            label="密碼"
            type="password"
            value={login.password}
            onChange={handleInput("password")}
          />
          <div className="mb-20">
            <MainButton>登入</MainButton>
          </div>
          <div className="d-flex gap-8 justify-content-end">
            <Link to="/register">
              <MainLink>註冊 Alphitter</MainLink>
            </Link>
            <Link to="/admin">
              <MainLink>後台登入</MainLink>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
