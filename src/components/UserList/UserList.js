import React from "react";
import Card from "../UI/Card";
import classes from "../../Css/UserList.module.css"
const UserList = ({ users }) => {
  return (
    <Card className= {classes.users}>
      <ul>
        {users.map((el, i) => (
          <li key={i}>
            {el.name} ({el.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
