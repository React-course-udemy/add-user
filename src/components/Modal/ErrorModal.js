import React from "react";
import reactDom from "react-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "../../Css/ErrorModal.module.css";

const ModalOverlay = ({ title, message, errorHandler }) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={errorHandler}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={errorHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = ({ errorHandler }) => {
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <ModalOverlay onClick={errorHandler} />,
        document.getElementById("modalOverlay_root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
