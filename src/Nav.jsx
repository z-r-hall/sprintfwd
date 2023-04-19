import React from 'react'

function Nav({ setShowMembers, setShowTeams, setShowTodo, setShowTeamDetails }) {
  function goToPage(e){
    switch(e.target.innerText){
      case 'Members': 
        setShowMembers(true);
        setShowTeams(false);
        setShowTodo(false);
        setShowTeamDetails(false);
        break;
      case 'Teams':
        setShowMembers(false);
        setShowTeams(true);
        setShowTodo(false);
        setShowTeamDetails(false);
        break;
      case 'To-do':
        setShowMembers(false);
        setShowTeams(false);
        setShowTodo(true);
        setShowTeamDetails(false);
        break;
      default:
        break;
    }
  }
  return (
    <div className='Nav'>
      <h1>Hello SprintFWD</h1>
      <div className='nav-links'>
      <span onClick={goToPage} className='link'>Members</span>
      <span onClick={goToPage} className='link'>Teams</span>
      <span onClick={goToPage} className='link'>To-do</span>
      </div>
    </div>
  )
}

export default Nav