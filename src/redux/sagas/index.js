import { all } from "redux-saga/effects";
import handleDailyChoresListSaga from "./handleDailyChoresListSaga";
import handleListItemSaga from "./handleListItemsSaga";


export default function* rootSaga() {
  yield all ([
    handleDailyChoresListSaga(),
    handleListItemSaga(),
  ]);
}

