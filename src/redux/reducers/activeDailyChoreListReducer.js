let initialState = {
  day: {},
  room: {},
  list_items: []
};

const activeDailyChoreListReducer = (state=initialState, action) => {

  switch (action.type) {
    case 'SET_ACTIVE_DAILY_CHORE_LIST':
      return action.payload;

    case 'UNSET_ACTIVE_DAILY_CHORE_LIST':
      return initialState;

    case 'UPDATE_ACTIVE_DAILY_CHORES_LIST_ITEM_IS_COMPLETE':
      let newListItems = [...state.list_items]
      for (const item of newListItems) {
        if (item.id === action.payload.id) {
          item.is_complete = action.payload.is_complete;
        }
      }

      let newState = {
        ...state, 
        list_items: newListItems,
      }
      return newState;

    default:
      return state;
  }
}

export default activeDailyChoreListReducer;