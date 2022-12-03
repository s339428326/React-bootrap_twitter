import logoIcon from "../../assets/icons/ac.svg";
import styles from "./Logo.module.scss";

const Logo = ({ title }) => {
  return (
    <div className={`${styles["logo"]}`}>
      <img src={logoIcon} alt="logo" />
      <h1>{title ? title : "未輸入"}</h1>
    </div>
  );
};

export default Logo;
