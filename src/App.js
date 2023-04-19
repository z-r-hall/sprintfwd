import { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Teams from './Teams';
import Members from './Members';
import Todo from './Todo';
import TeamDetails from './TeamDetails';

function App() {
  const [showTodo, setShowTodo] = useState(false);
  const [showTeams, setShowTeams] = useState(false);
  const [showMembers, setShowMembers] = useState(false);
  const [showTeamDetails, setShowTeamDetails] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [team, setTeam] = useState('');

  return (
    <div className="App">
      <Nav
      setShowTodo={setShowTodo}
      setShowTeams={setShowTeams}
      setShowMembers={setShowMembers}
      setShowTeamDetails={setShowTeamDetails}
      setShowWelcome={setShowWelcome}
      />
      {showTeams && <Teams />}
      {showMembers && <Members 
      setShowMembers={setShowMembers}
      setShowTeamDetails={setShowTeamDetails}
      setTeam={setTeam} />}
      {showTodo && <Todo />}
      {showTeamDetails && <TeamDetails team={team} />}
      {showWelcome && <div><h2>Welcome!</h2><div>Choose a tab above to get started.</div><br/><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></div>}
    </div>
  );
}

export default App;
