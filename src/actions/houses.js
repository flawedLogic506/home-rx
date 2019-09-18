import db from '../db';

export const housesInitialLoad = () => (dispatch, getState) => {
  console.log(db.houses);
}