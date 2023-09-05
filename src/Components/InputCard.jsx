import React, { useState } from 'react';

function InputCard({ handleAddPerson }) {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');

  const onSubmit = () => {
    handleAddPerson({ name, photo });
    setName('');
    setPhoto('');
  };

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h3>Integrante a Registrar</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br/>
        <br/>
        <input
          type="text"
          placeholder="URL de la fotografía"
          value={photo}
          onChange={(event) => setPhoto(event.target.value)}
        />
        <br/>
        <br/>
        <button className="btn btn-primary" onClick={onSubmit}>
          Guardar
        </button>
      </div>
    </div>
  );
}

export default InputCard;
