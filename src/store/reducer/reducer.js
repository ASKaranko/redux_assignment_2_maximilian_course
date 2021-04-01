import * as actionTypes from '../actions';

const initialState = {
	persons: []
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case(actionTypes.PERSON_ADD):
			const newPerson = {
				id: Math.random(), // not really unique but good enough here!
				name: 'Andrei',
				age: Math.floor( Math.random() * 40 )
			};
			return {
				...state,
				persons: state.persons.concat(newPerson)
			}
		case(actionTypes.PERSON_DELETE):
			const updatedPersons = state.persons.filter(person => person.id !== action.id)
			return {
				...state,
				persons: updatedPersons
			}
		default: return state;
	}
}

export default reducer;