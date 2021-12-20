import React from 'react';

function Menu({ selectHandler }) {
  return (
    <div className='menu_wrapper'>
      <form onSubmit={selectHandler} className='menu'>
        <input type='text' name='string'></input>
        <button type='submit'>SEARCH</button>
      </form>
    </div>
  );
}

export default Menu;
