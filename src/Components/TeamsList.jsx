import React from 'react';

function TeamsList({ teams }) {
  return (
    <div className="mt-5">
      <h3>Equipos</h3>
      <ul>
        {teams.map((member, index) => (
          <li key={index}>
            Equipo {Math.floor(index / 3) + 1}: {member.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamsList;
