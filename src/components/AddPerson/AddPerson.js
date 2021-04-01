import React, {useState} from 'react';

import './AddPerson.css';

const addPerson = (props) => {
  const initialState = {
    name: '',
    age: 0,
  };

  const [state, setState] = useState(initialState);

  const nameChangedHandler = (event) => {
    setState({
      ...state,
      name: event.target.value,
    });
  };

  const ageChangedHandler = (event) => {
    setState({
      ...state,
      age: event.target.value,
    });
  };

  return (
      <div className="AddPerson">
        <input
            type="text"
            placeholder="Name"
            onChange={nameChangedHandler}
            value={state.name}
        />
        <input
            type="number"
            placeholder="Age"
            onChange={ageChangedHandler}
            value={state.age}
        />
        <button onClick={() => props.personAdded(state.name, state.age)}>Add Person</button>
      </div>
  );
}

export default addPerson;