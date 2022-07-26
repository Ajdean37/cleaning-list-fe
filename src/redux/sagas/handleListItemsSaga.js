import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";


function* updateListItemIsComplete( action ) {

  try {
   
    let body = {is_complete: action.payload.is_complete}
    const response = yield axios.put(`http://localhost:5000/api/list-items/${action.payload.id}`, body);

    console.log(response.data);

    yield put( {type: 'UPDATE_ACTIVE_DAILY_CHORES_LIST_ITEM_IS_COMPLETE', payload: response.data} );

  }catch ( error ) {
    console.error(error);
  }
}


function* handleListItemSaga() {
  yield takeLatest('UPDATE_LIST_ITEM_IS_COMPLETE', updateListItemIsComplete );
}

export default handleListItemSaga;