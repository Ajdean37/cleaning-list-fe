// an array of objects
const dailyChoresListsReducer = (state= [], action) => {

  switch (action.type) {
    case 'SET_ALL_DAILY_CHORES_LISTS':
      return action.payload;

    case 'UNSET_ALL_DAILY_CHORES_LISTS':
      return [];

    default:
      return state;
  }
}

export default dailyChoresListsReducer;