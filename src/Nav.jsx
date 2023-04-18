import React from 'react'

function Nav({ setShowMembers, setShowTeams, setShowTodo }) {
  function goToPage(e){
    switch(e.target.innerText){
      case 'Members': 
        setShowMembers(true);
        setShowTeams(false);
        setShowTodo(false);
        break;
      case 'Teams':
        setShowMembers(false);
        setShowTeams(true);
        setShowTodo(false);
        break;
      case 'To-do':
        setShowMembers(false);
        setShowTeams(false);
        setShowTodo(true);
        break;
      default:
        break;
    }
  }
  return (
    <div className='Nav'>
      <h1>Hello SprintFWD</h1>
      <div className='nav-links'>
      <span onClick={goToPage} className='members-link'>Members</span>
      <span onClick={goToPage} className='teams-link'>Teams</span>
      <span onClick={goToPage} className='todo-link'>To-do</span>
      </div>
    </div>
  )
}

export default Nav