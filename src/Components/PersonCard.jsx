import React from 'react';

function PersonCard({ person, handleAddToTeam }) {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={person.photo} className="card-img-top" alt={person.name} />
      <div className="card-body">
        <h5 className="card-title">{person.name}</h5>
        <button className="btn btn-secondary" onClick={() => handleAddToTeam(person)}>
          Agregar al Equipo
        </button>
      </div>
    </div>
  );
}

export default PersonCard;
