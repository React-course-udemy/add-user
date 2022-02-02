import React from 'react';
import classes from "../../Css/Button.module.css"
const Button = () => {
    return (
        <div>
            <button className={classes.button} type="submit">Add User</button>
        </div>
    );
};

export default Button;