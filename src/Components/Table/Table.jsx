import React from 'react';

function Table({ array }) {
  return (
    <div className='table'>
      <div key='row' className='row'>
        <div>Firstname</div>
        <div>Lastname</div>
        <div>Patronymic</div>
        <div>Status</div>
      </div>
      {array.map((el, index) => {
        return <div key={index} className='row'>
          {/* {`${el.firstName} ${el.lastName} ${el.patronymic} ${el.status}`} */}
          <div>{el.firstName}</div>
          <div>{el.lastName}</div>
          <div>{el.patronymic}</div>
          <div>{el.status === 1 ? 'ожидает' : 'в работе'}</div>
        </div>
      })}
    </div>
  );
}

export default Table;
