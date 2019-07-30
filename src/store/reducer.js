const initialState = {
  searchResults: [],
  searchString: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_SEARCH_ASYNC':
      return {
        ...state,
        searchResults: action.payload.data,
        searchString: action.payload.searchString,
      };
    default:
      return state;
  }
};
