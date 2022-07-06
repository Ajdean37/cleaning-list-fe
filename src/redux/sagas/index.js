import { all } from "redux-saga/effects";
import handleDailyChoresListSaga from "./handleDailyChoresListSaga";

export default function* rootSaga() {
  yield all ([
    handleDailyChoresListSaga(),
  ]);
}

