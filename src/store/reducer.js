const initialState = {
  searchResults: [],
  searchString: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_SEARCH_ASYNC':
      return { ...state, searchResults: action.payload };
    case 'SAVE_SEARCH_STRING':
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
};
