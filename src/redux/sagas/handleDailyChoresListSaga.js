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

function* handleDailyChoresListSaga() {
  yield takeLatest('GET_ALL_DAILY_CHORES_LISTS', getAllDailyChoresLists );
}

export default handleDailyChoresListSaga;

