import {
    SEARCH_WORD_REQUEST,
    SEARCH_WORD_SUCCESS,
    SEARCH_WORD_FAILURE,
  } from "../action/dictionaryAction";
  
  // Define your initial state
  const initialState = {
    wordData: null,
    loading: false,
    error: null,
  };
  
  // Reducer
  const dictionaryReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_WORD_REQUEST:
        return { ...state, loading: true, error: null };
      case SEARCH_WORD_SUCCESS:
        return { ...state, loading: false, wordData: action.payload, error: null };
      case SEARCH_WORD_FAILURE:
        return { ...state, loading: false, wordData: null, error: action.payload };
      default:
        return state;
    }
  };
  
  export default dictionaryReducer;
  