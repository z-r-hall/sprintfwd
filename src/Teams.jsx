import React from 'react';
import teams from './mock-db/teams'

function Teams() {
  return (
    <div className="Main">
      
      <table>
        <tr>
          <th>Teams</th>
          <th>Team Count</th>
        </tr>
        {teams.teams.map((el, i) => {
          return (
            <tr key={i}>
                <td>{el.name}</td>
                <td> {el.member_count}</td>
            </tr>
          );
        })}
      </table>

    </div>
  )
}

export default Teams