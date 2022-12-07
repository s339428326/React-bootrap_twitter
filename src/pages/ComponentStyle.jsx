//Component
import MainButton from "../component/MainButton/MainButton";
import AuthInput from "../component/AuthInput/AuthInput";
import MainLink from "../component/MainLink/MainLink";
import Logo from "../component/Logo/Logo";
import NavBar from "../component/NavBar/NavBar";
//React-Bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//scss
import styles from "../pages/ComponentStyle.module.scss";
//Icons
import {
  HomeIcon,
  LogoIcon,
  LogoOutIcon,
  SettingIcon,
} from "../component/Icons/Icons";
//react
import { useState } from "react";
import { Link } from "react-router-dom";

const ComponentStyle = () => {
  /*Example handle AuthInput */
  //InputValue length text Count
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //handler Value
  const handleInput = (currentValue) => {
    setUsername(currentValue);
  };
  const handlePssword = (currentValue) => {
    setPassword(currentValue);
  };

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div className="container">
      <h1 className="mt-4">元件列表</h1>
      <div className="border mb-4 p-4">
        <h5>Logo</h5>
        <Logo title={"建立你的帳號"} />
      </div>
      <div className="border mb-4 p-4">
        <h5>Button</h5>
        <MainButton>Test</MainButton>
        <Link to={"/test"}>
          <MainLink>Test</MainLink>
        </Link>
      </div>
      <div className="border mb-4 p-4">
        <h5 className="mb-3">AuthInput</h5>
        <div className="row">
          <div className="col col-3">
            <AuthInput value={username} onChange={handleInput} />
            {/* 當error有值會有錯誤樣式 */}
            <AuthInput
              label={"密碼"}
              type={"password"}
              value={password}
              onChange={handlePssword}
              error={"錯誤！"}
            />
          </div>
        </div>
      </div>
      <div className="border mb-4 p-4">
        <h5>Icons</h5>
        <div className="d-flex gap-8">
          <LogoIcon width={40} height={40} />
          <HomeIcon width={40} height={40} />
          <SettingIcon width={40} height={40} />
          <LogoOutIcon width={40} height={40} />
        </div>
      </div>
      <div className="border mb-4 p-4">
        <NavBar />
      </div>
      <div className="border mb-4 p-4">
        <Button className="text-white" variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          {/* bsPrefix 他會重新設置react-bootstrap css 樣式 */}
          <Modal.Header closeButton bsPrefix={`${styles["modal-header"]}`}>
            {/* <Modal.Title>Modal title</Modal.Title> */}
          </Modal.Header>
          <Modal.Body className="d-flex flex-column align-items-center">
            <div>
              <img src="https://fakeimg.pl/300/" alt="" />
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ab
            atque, mollitia odit voluptatibus expedita dignissimos minus illo
            recusandae, deserunt placeat et quos perferendis non hic asperiores
            a commodi nulla.
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default ComponentStyle;
