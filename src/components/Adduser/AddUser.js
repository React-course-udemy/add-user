import React,{useState} from 'react';
import Button from './Button';

import Classes from "../../Css/AddUser.module.css"
const UserForm = () => {
    const [name, setName] =useState(""),
    [age, setAge ]=useState();
const ageHandler =(e) =>{
    setAge(e.target.value);

}
const userNameHandler=(e) =>{
    setName(e.target.value);
}
    const SubmitHandler= (e)=>{
        e.preventDefault();
        const expenseData = {
            name: name,
            age: age,
          };
        console.log(expenseData);
    }
    return (
        <form className={Classes.input} onSubmit={SubmitHandler}>
            <label htmlFor="Username">Username</label>
            <input  id="Username" type="text"  value={name} onChange={userNameHandler}/>
            <label htmlFor="Age">Age (Years)</label>
            <input id="Age" type="number" value={age} onChange={ageHandler}/>
            <Button/>
        </form>
    );
};

export default UserForm;