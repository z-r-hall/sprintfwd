import React, { Component } from 'react';
import members from './mock-db/members';

export class Members extends Component {
  render() {
    return (
      <div className="Members">
      <table>
        <tr>
          <th>Members</th>
          <th>Team Name</th>
        </tr>
        {members.members.map((el, i) => {
          return (
            <tr key={i}>
                <td>{el.first_name} {el.last_name}</td>
                <td> {el.team.name}</td>
            </tr>
          );
        })}
      </table>
      </div>
    );
  }
}

export default Members;
