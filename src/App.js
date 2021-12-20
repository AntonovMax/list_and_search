import { useState } from 'react';
import './App.css';
import Menu from './Components/Menu/Menu';
import Table from './Components/Table/Table';

function App() {
  const list = {
    "28936862-34bd-41d5-96c8-aa9da8da0e4f": {
      "firstName": "Иван",
      "lastName": "Иванов",
      "patronymic": "Иванович",
      "status": 1
    },
    "a18542f8-b157-1091-2d2f-1f22203be1fb": {
      "firstName": "Петр",
      "lastName": "Иванов",
      "patronymic": "Иванович",
      "status": 1
    },
    "a3a4eafa-f88d-4adf-ab67-eef9818af763": {
      "firstName": "Петр",
      "lastName": "Иванов",
      "patronymic": "Петрович",
      "status": 2
    },
    "67295cf2-90b5-4e0d-9201-667b53bac167": {
      "firstName": "Петр",
      "lastName": "Петров",
      "patronymic": "Иванович",
      "status": 1
    },
    "3cee500e-dbb5-464f-a1f5-7a2e7dc9a0fd": {
      "firstName": "Михаил",
      "lastName": "Иванов",
      "patronymic": "Иванович",
      "status": 1
    },
    "df6de2c7-8a0c-49ee-9b6d-13188c913d54": {
      "firstName": "Петр",
      "lastName": "Михайлов",
      "patronymic": "Иванович",
      "status": 1
    },
    "cece9b3a-5ac3-4233-93bd-f404ba7a225a": {
      "firstName": "Петр",
      "lastName": "Иванов",
      "patronymic": "Михайлович",
      "status": 2
    },
    "e46f69c6-daa1-4100-bd49-b83eb31c62cf": {
      "firstName": "Петр",
      "lastName": "Иетров",
      "patronymic": "Михайлович",
      "status": 2
    },
    "a848ec1e-4345-44c1-a033-5cd24a9a4797": {
      "firstName": "Петр",
      "lastName": "Иетров",
      "patronymic": "Михайлович",
      "status": 1
    }
  }

  function getArray() {
    const arr = []
    for (let id in list) {
      arr.push(list[id])
    }
    return arr
  }

  function selectHandler(event) {
    event.preventDefault()
    const regexp = new RegExp(event.target.string.value, 'gi')
    const selectUsers = Object.values(list).filter(user => Object.values(user).splice(0, 3).some(el => el.search(regexp) !== -1))
    setArray(selectUsers)
    // for (let user in list) {
    //   if(Object.values(list[user]).splice(0, 3).some(el => el.search(regexp) !== -1)) {
    //     result.push(list[user])
    //   } 
    // }
  }

  const [array, setArray] = useState(getArray())

  return (
    <div className="wrapper">
      <Menu selectHandler={selectHandler}/>
      <Table array={array}/>
    </div>
  );
}

export default App;
