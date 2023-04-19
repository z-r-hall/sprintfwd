import React from 'react';
import members from './mock-db/members';

export function Members ({ setShowMembers, setShowTeamDetails, setTeam }) {
    function getDetails(e){
      setTeam(e.target.innerText);
      setShowTeamDetails(true);
      setShowMembers(false);
    }
    return (
      <div className="Main">
      <table>
        <tr>
          <th>Members</th>
          <th>Team Name</th>
        </tr>
        {members.members.map((el, i) => {
          return (
            <tr key={i}>
                <td>{el.first_name} {el.last_name}</td>
                <td className="link" onClick={getDetails} >{el.team.name}</td>
            </tr>
          );
        })}
      </table>
      </div>
    );
  }

export default Members;
