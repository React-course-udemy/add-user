import React, { useState } from "react";
import Button from "./Button";

import Classes from "../../Css/AddUser.module.css";
import Card from "../UI/Card";
const UserForm = ({addUserHandler}) => {
  const [name, setName] = useState(""),
    [age, setAge] = useState("");
  const ageHandler = (e) => {
    setAge(e.target.value);
  };
  const userNameHandler = (e) => {
    setName(e.target.value);
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    const userData = {
      name,
      age:+age,
    };
    addUserHandler(userData);
    setName("");
    setAge("");
  };
  return (
    <Card className={Classes.input}>
      <form onSubmit={SubmitHandler}>
        <label htmlFor="Username">Username</label>
        <input
          id="Username"
          type="text"
          value={name}
          onChange={userNameHandler}
        />
        <label htmlFor="Age">Age (Years)</label>
        <input id="Age" type="number" value={age} onChange={ageHandler} />
        <Button />
      </form>
    </Card>
  );
};

export default UserForm;
