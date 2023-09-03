import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { searchWord } from '../redux/action/dictionaryAction';
import { addToHistory } from '../redux/action/historyAction';
import WordDetails from './WordDetails';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  
  const handleSearch = () => {
    setClick(true);
    if (searchTerm.trim() !== '') {
      dispatch(searchWord(searchTerm)); // Dispatch the searchWord action

      // You can access the result directly from the Redux store
      // No need to use .unwrap() or .then()
      
      // Store search term in local history
      const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
      searchHistory.push(searchTerm);
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

      // Dispatch to add to Redux history
      dispatch(addToHistory(searchTerm));
    }
  };

  return (
    <div className="home">
      <div>
        <input
          type="text"
          placeholder="Search for a word"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {click === true && <WordDetails />}
    </div>
  );
};

export default Home;
