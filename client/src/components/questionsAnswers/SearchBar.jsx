import React, { useState, useEffect } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');



  return (
    <div className="relative flex flex-row h-10 border-2 border-slate-500">
      <input className="w-full" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
      <button className="absolute right-0 bottom-1.5">&#128269;</button>
    </div>
  );
};

export default Search;