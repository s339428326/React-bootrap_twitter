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

const AdminPage = () => {
  const [adminLogin, setAdminLogin] = useState({
    adminId: "",
    adminPassword: "",
  });

  const handleInput = (keyName) => (currentValue) => {
    setAdminLogin({
      ...adminLogin,
      [keyName]: currentValue,
    });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xl={6} md={8}>
          <Logo title={"後台登入"} />
          <AuthInput
            value={adminLogin.adminId}
            onChange={handleInput("adminId")}
          />
          <AuthInput
            label="密碼"
            type="password"
            value={adminLogin.adminPassword}
            onChange={handleInput("adminPassword")}
          />
          <div className="mb-20">
            <MainButton>登入</MainButton>
          </div>
          <div className="d-flex justify-content-end">
            <Link to="/login">
              <MainLink>前台登入</MainLink>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPage;
