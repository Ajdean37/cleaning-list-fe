import { combineReducers } from "redux";
import dailyChoresLists from "./dailyChoresListsReducer";

const rootReducer = combineReducers({

  dailyChoresLists,

});

export default rootReducer;