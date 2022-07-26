import { combineReducers } from "redux";
import activeDailyChoreList from "./activeDailyChoreListReducer";
import dailyChoresLists from "./dailyChoresListsReducer";


const rootReducer = combineReducers({

  dailyChoresLists,
  activeDailyChoreList,

});

export default rootReducer;