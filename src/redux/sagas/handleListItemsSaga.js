import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";


function* updateListItemIsComplete( action ) {

  try {
   
    let body = {is_complete: action.payload.is_complete}
    const response = yield axios.put(`http://localhost:5000/api/list-items/${action.payload.id}`, body);

    yield put( {type: 'UPDATE_ACTIVE_DAILY_CHORES_LIST_ITEM_IS_COMPLETE', payload: response.data} );

  }catch ( error ) {
    console.error(error);
  }
}

function* toggleAllIsComplete( action ) {

  try {
 
    let body = {is_complete: action.payload.is_complete}
    const response1 = yield axios.put(`http://localhost:5000/api/daily-chores-lists/${action.payload.dailyChoreListId}/list-items/toggle-all-is-complete`, body);

    const response2 = yield axios.get(`http://localhost:5000/api/daily-chores-lists/${action.payload.dailyChoreListId}`)
    yield put( {type: 'SET_ACTIVE_DAILY_CHORE_LIST', payload: response2.data} );

  }catch ( error ) {
    console.error(error);
  }
}

function* toggleResetAll( action ) {

  try {
 
    const response1 = yield axios.put(`http://localhost:5000/api/daily-chores-lists/list-items/toggle-all-reset`);
    const response2 = yield axios.get('http://localhost:5000/api/daily-chores-lists');

    yield put( {type: 'SET_ALL_DAILY_CHORES_LISTS', payload: response2.data} );

  }catch ( error ) {
    console.error(error);
  }
}


function* handleListItemSaga() {
  yield takeLatest('UPDATE_LIST_ITEM_IS_COMPLETE', updateListItemIsComplete );
  yield takeLatest('TOGGLE_ALL_IS_COMPLETE', toggleAllIsComplete );
  yield takeLatest('TOGGLE_RESET_ALL', toggleResetAll);
  
}



export default handleListItemSaga;