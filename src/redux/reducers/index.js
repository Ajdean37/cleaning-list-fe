import { combineReducers } from "redux";
import dailyChoresListItem from "./dailyChoresListItemsReducer";
import dailyChoresLists from "./dailyChoresListsReducer";


const rootReducer = combineReducers({

  dailyChoresLists,
  dailyChoresListItem,

});

export default rootReducer;