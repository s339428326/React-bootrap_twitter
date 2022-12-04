import Button from "react-bootstrap/Button";

const MainLink = ({ children, onClick }) => {
  return (
    <Button className="text-info p-0" variant="link" onClick={() => onClick()}>
      {children}
    </Button>
  );
};

export default MainLink;
