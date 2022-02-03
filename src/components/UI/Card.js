import React from "react";
import Classes from '../../Css/Card.module.css'

const Card = ({ children ,className}) => {
  return <div className={`${Classes.card} ${className}`}>{children}</div>;
};

export default Card;
