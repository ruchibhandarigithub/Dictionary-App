import axios from "axios";

// Define your action types
export const SEARCH_WORD_REQUEST = 'dictionary/searchWordRequest';
export const SEARCH_WORD_SUCCESS = 'dictionary/searchWordSuccess';
export const SEARCH_WORD_FAILURE = 'dictionary/searchWordFailure';

// Action creators
export const searchWordRequest = () => ({
  type: SEARCH_WORD_REQUEST,
});

export const searchWordSuccess = (data) => ({
  type: SEARCH_WORD_SUCCESS,
  payload: data,
});

export const searchWordFailure = (error) => ({
  type: SEARCH_WORD_FAILURE,
  payload: error,
});

// Async action creator
export const searchWord = (word) => {
  return (dispatch) => {
    dispatch(searchWordRequest());
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        dispatch(searchWordSuccess(response.data));
      })
      .catch((error) => {
        dispatch(searchWordFailure(error.message));
      });
  };
};
