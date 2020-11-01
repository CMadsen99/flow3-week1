import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonList from './PersonList';
import NewPerson from './NewPerson';
import {v1 as uuid} from 'uuid';

function LiftDemo() {
  const initialData = [
    { id: uuid(), name: "Per" },
    { id: uuid(), name: "Jens" },
    { id: uuid(), name: "Knud" }
  ]
  const [persons, setPersons] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: "", name: "" });
  console.log(persons)

  const addPerson = person => {
    if (person.id === "") { // id=-1 Indicates a new object
      person.id = uuid();
      persons.push(person);
    } else {//if id != "", it's an existing todo. Find it and add changes
      let personToEdit = persons.find(p => p.id === person.id);
      personToEdit.name = person.name;
    }
    setPersons([...persons]);
    setNewPerson({id:"", name:""})
  };

  
  
  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom:25 }}>
        State Lift Demo
      </h2>

      <div className="row">
        <div className="col-6 allTodos">
          <PersonList persons={persons} />
        </div>
        <div className="col-5 new-todo">
          <NewPerson
            addPerson={addPerson}
            nextPerson={newPerson}            
          />
        </div>
      </div>
    </div>
  );
}
export default LiftDemo;