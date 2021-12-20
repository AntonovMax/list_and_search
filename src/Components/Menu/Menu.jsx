import React from 'react';

function Menu({ selectHandler, getAllUsers }) {
  return (
    <div className='menu_wrapper'>
      <form onSubmit={selectHandler} className='menu'>
        <input autofocus type='text' name='string'  autoComplete='off'/>
        <input type="submit" value="Найти" />
      </form>
      <input type="button" value="Все пользователи" onClick={getAllUsers} />
    </div>
  );
}

export default Menu;
