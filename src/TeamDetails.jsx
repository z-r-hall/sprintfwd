import React, { useState, useEffect } from 'react';
import members from './mock-db/members'

function TeamDetails({ setShowMembers, setShowTeamDetails, team }) {
  const [list, setList] = useState([]);
  useEffect(()=>{
    setList(members.members.filter(el => el.team.name === team));
  }, [team])
  return (
    <div className="Main">
      <table>
        <tr>
          <th>{team}</th>
        </tr>
        {list.map((el, i) => {
          return (
            <tr key={i}>
                <td>{el.first_name} {el.last_name}</td>
            </tr>
          );
        })}
      </table>
    </div>
  )
}

export default TeamDetails;