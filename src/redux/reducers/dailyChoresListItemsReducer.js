const dailyChoresListItemReducer = (state= [], action) => {

  switch (action.type) {
    case 'SET_ALL_CHORES_LISTS_ITEMS':
      return action.payload;

    case 'UNSET_ALL_CHORES_LISTS_ITEMS':
      return [];

    default:
      return state;
  }
}

export default dailyChoresListItemReducer;