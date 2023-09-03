import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import Redux Thunk
import dictionaryReducer from '../reducers/dictionaryReducer'; // Import your dictionary reducer
import historyReducer from '../reducers/historyReducer'; // Import your history reducer

// Combine reducers
const rootReducer = combineReducers({
  dictionary: dictionaryReducer,
  history: historyReducer,
});

// Create the Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
