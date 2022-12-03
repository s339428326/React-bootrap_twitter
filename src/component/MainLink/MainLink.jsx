import React from "react";
import Button from "react-bootstrap/Button";

const MainLink = ({ children, onClick }) => {
  return (
    <Button className="text-info" variant="link" onClick={() => onClick()}>
      {children}
    </Button>
  );
};

export default MainLink;
