import './App.css'
import { useState } from 'react'
import InputCard from './Components/InputCard';
import PersonCard from './Components/PersonCard';
import TeamsList from './Components/TeamsList';

function App() {
  const [people, setPeople] = useState([]);
  const [teams, setTeams] = useState([]);

  const handleAddPerson = (person) => {
    setPeople([...people, person]);
  };

  const handleAddToTeam = (person) => {
    if (teams.length % 3 === 0 && teams.length !== 0) {
      alert('El máximo por equipo son 3 Integrantes. Comenzando un nuevo equipo.');
    }
    setTeams([...teams, person]);
  };

  return (
    <div className="container">
      <InputCard handleAddPerson={handleAddPerson} />
      <div className="d-flex flex-wrap mt-5 justify-content-center">
        {people.map((person, index) => (
          <PersonCard key={index} person={person} handleAddToTeam={handleAddToTeam} />
        ))}
      </div>
      <TeamsList teams={teams} />
    </div>
  );
}

export default App;