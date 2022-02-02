import React from 'react';
import Button from './Button';

import Classes from "../Css/AddUser.module.css"
const UserForm = () => {
    return (
        <form className={Classes.input}>
            <label>Username</label>
            <input  type="text" />
            <label>Age (Years)</label>
            <input type="number" />
            <Button/>
        </form>
    );
};

export default UserForm;