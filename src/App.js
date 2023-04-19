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
  const [team, setTeam] = useState('');

  return (
    <div className="App">
      <Nav
      setShowTodo={setShowTodo}
      setShowTeams={setShowTeams}
      setShowMembers={setShowMembers}
      setShowTeamDetails={setShowTeamDetails}
      />
      {showTeams && <Teams />}
      {showMembers && <Members 
      setShowMembers={setShowMembers}
      setShowTeamDetails={setShowTeamDetails}
      setTeam={setTeam} />}
      {showTodo && <Todo />}
      {showTeamDetails && <TeamDetails team={team} />}
    </div>
  );
}

export default App;
