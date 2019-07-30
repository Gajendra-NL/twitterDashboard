const initialState = {
  searchResults: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_SEARCH_ASYNC':
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};
