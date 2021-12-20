import React from 'react';

function Menu({ selectHandler, getAllUsers }) {
  return (
    <div className='menu_wrapper'>
      <form onSubmit={selectHandler} className='menu'>
        <input type='text' name='string'></input>
        <button type='submit'>SEARCH</button>
        <button type='button' onClick={getAllUsers}>GET ALL USERS</button>
      </form>
    </div>
  );
}

export default Menu;
