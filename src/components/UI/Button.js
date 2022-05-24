import React from 'react';
import classes from "../../Css/Button.module.css"
const Button = ({children, onClick, type}) => {
    return (
        <div>
            <button className={classes.button}  type={type || 'button'}
      onClick={onClick}>{children}</button>
        </div>
    );
};

export default Button;