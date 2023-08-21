import React, { useState, useEffect } from 'react';

const SearchBar = ({questions, filtered, onSearch, sortQuestions, searching, setSearching}) => {
  const [query, setQuery] = useState('');
  const questionFiltered = sortQuestions(questions.filter((question, index)=> {
    return question.question_body.toLowerCase().includes(query.toLowerCase());
  }));

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    if (query.length > 2) {
      setSearching(true);
      onSearch(questionFiltered);
    } else {
      setSearching(false);
    }
  };

  return (
    <div>
      <form className="relative flex flex-row h-10 border-2 border-slate-500">
        <input onChange={(e) => {
          handleChange(e);
        }}className="w-full" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
        <button type="submit" className="absolute right-0 bottom-1.5">&#128269;</button>
      </form>
    </div>
  );
};

export default SearchBar;