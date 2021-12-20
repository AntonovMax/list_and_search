import { useState } from 'react';
import './App.css';

import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './Redux/store';

import Menu from './Components/Menu/Menu';
import Table from './Components/Table/Table';

function App() {

  const users = useSelector(state => state.list)
  const [usersInArray, setUsersInArray] = useState(Object.entries(users))

  function selectHandler(event) {
    event.preventDefault()
    const regexp = new RegExp(event.target.string.value, 'gi')
    const selectUsers = Object.entries(users).filter(user => Object.values(user[1]).splice(0, 3).some(el => el.search(regexp) !== -1))
    setUsersInArray(selectUsers)
  }

  function getAllUsers() {
    setUsersInArray(Object.entries(users))
  }


  return (
    <div className="wrapper">
      <Menu selectHandler={selectHandler} getAllUsers={getAllUsers}/>
      <Table usersInArray={usersInArray} />
    </div>
  );
}

export default App;
