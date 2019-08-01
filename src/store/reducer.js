const initialState = {
  searchResults: [],
  resultsInDisplay: [],
  searchString: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_SEARCH_ASYNC':
      return {
        ...state,
        searchResults: action.payload.data,
        resultsInDisplay: action.payload.data.slice(0, 10),
        searchString: action.payload.searchString,
      };
    case 'UPDATE_RESULTS_IN_DISPLAY':
      return {
        ...state, resultsInDisplay: [...state.resultsInDisplay, action.payload]
      }
    default:
      return state;
  }
};
