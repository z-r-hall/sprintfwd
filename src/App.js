import { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Teams from './Teams';
import Members from './Members';
import Todo from './Todo';

function App() {
  const [showTodo, setShowTodo] = useState(false);
  const [showTeams, setShowTeams] = useState(false);
  const [showMembers, setShowMembers] = useState(false);

  return (
    <div className="App">
      <Nav
      setShowTodo={setShowTodo}
      setShowTeams={setShowTeams}
      setShowMembers={setShowMembers} 
      />
      {showTeams && <Teams />}
      {showMembers && <Members />}
      {showTodo && <Todo />}
    </div>
  );
}

export default App;
