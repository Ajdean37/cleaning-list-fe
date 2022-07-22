const dailyChoresListItemReducer = (state= [], action) => {

  switch (action.type) {
    case 'SET_SELECTED_CHORES':
      return action.payload;

    case 'UNSET_SELECTED_CHORES':
      return [];

    case 'RESET_SELECTED_CHORES':
      return [];

    default:
      return state;
  }
}

export default dailyChoresListItemReducer;