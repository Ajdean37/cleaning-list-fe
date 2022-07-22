import axios from 'axios';
import { takeLatest, put } from "redux-saga/effects"

function* getAllDailyChoresLists( action ) {

  try {
    const response = yield axios.get('http://localhost:5000/api/daily-chores-lists');

    let reducerAction = {type: 'SET_ALL_DAILY_CHORES_LISTS', payload: response.data}
    console.log(response.data);
    yield put( reducerAction );

  }catch ( error ) {
    console.error(error);
  }
}

function* selectChoresById( action ) {


  try {
   
    const response = yield axios.get(`http://localhost:5000/api/daily-chores-lists/${action.payload.id}`);
    
    yield put( {type: 'SET_SELECTED_CHORES', payload: response.data} );

  }catch ( error ) {
    console.error(error);
  }
}

function* handleDailyChoresListSaga() {
  yield takeLatest('GET_ALL_DAILY_CHORES_LISTS', getAllDailyChoresLists );
  yield takeLatest('SELECT_LAUNCH_BY_ID', selectChoresById);
}

export default handleDailyChoresListSaga;

