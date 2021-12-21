import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Table({ usersInArray }) {

  const dispatch = useDispatch()

  return (
    <div className='table' onChange={(event) => dispatch({ type: 'CHANGE_STATUS', payload: {id: event.target.id, status: Number(event.target.value) }  })}>
      <div key='row' className='row border_pink'>
        <div>Имя</div>
        <div>Фамилия</div>
        <div>Отчество</div>
        <div>Статус заказа</div>
      </div>
      {usersInArray.map((el) => {
        return <div key={el[0]} className='row border_grey'>
          <div>{el[1].firstName}</div>
          <div>{el[1].lastName}</div>
          <div>{el[1].patronymic}</div>
          <select name="" id={el[0]} defaultValue={el[1].status} >
            <option value='1'>Ожидает</option>
            <option value='2'>В работе</option>
          </select>
        </div>
      })}
    </div>
  );
}

export default Table;
