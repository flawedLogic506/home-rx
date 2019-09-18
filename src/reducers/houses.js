import db from '../db';
const housesInitialState = db.houses;

export default (state = housesInitialState, action) => {
  switch(action.type) {
    case 'INITIAL_SETUP':
      return;
    default: 
      return state;
  }
}