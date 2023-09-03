import { ADD_TO_HISTORY } from "../action/historyAction";

// Reducer
const historyReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default historyReducer;
