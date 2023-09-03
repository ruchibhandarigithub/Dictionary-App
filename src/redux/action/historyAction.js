// Define your action type
export const ADD_TO_HISTORY = 'history/addToHistory';

// Action creator
export const addToHistory = (word) => ({
  type: ADD_TO_HISTORY,
  payload: word,
});
