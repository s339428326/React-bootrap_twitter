import Button from "react-bootstrap/Button";
import styles from "./MainButton.module.scss";

const MainButton = ({ children, onClick }) => {
  return (
    <Button
      className={`${styles["btn"]} text-white rounded-pill`}
      onClick={() => onClick()}
    >
      {children}
    </Button>
  );
};

export default MainButton;
