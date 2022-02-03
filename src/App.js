
import { useState } from 'react/cjs/react.development';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';


function App() {
  const[users , setUsers]=useState([{name: "Bassant", age:18}]);
  const addUserHandler =(userData)=>{
  }
  return (
    <div className="App">
      <AddUser addUserHandler={addUserHandler}/>
      <UserList list={users}/>
    </div>
  );
}

export default App;
