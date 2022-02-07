import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../Modal/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import Classes from "../../Css/AddUser.module.css";


const UserForm = ({ addUserHandler }) => {
  const [name, setName] = useState(""),
    [age, setAge] = useState(""),
    [error, setError] = useState();
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
      age: +age,
    };
    if (name.trim().length === 0 || +age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(not empty values)",
      });
      return;
    }
    if (+age < 1) {
      setError({ title: "Invalid age", message: "Please enter a valid age" });
      return;
    }
    addUserHandler(userData);
    setName("");
    setAge("");
  };
  const errorHandler= () =>{
      setError(null);
  }
  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} errorHandler={errorHandler} />}

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
    </Wrapper>
  );
};

export default UserForm;
