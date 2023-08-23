import React from 'react';

const StarBreakdown = ({ ratings, total }) => {
  // pass in percentage here and generate bar
  // next make every star a button that results in a filter when clicked

  const bar = (val) => {
    return (
      <div key={val[0]}>
        <button>{val[0]} Stars</button>
        <div className="w-full bg-slate-200 rounded-full h-2.5 mb-4 dark:bg-slate-300">
          <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style={{ width: `${(val[1] / total) * 100}%` }}></div>
        </div>
      </div>
    );
  };

  return (
    <div role='stars'>
      {ratings && Object.entries(ratings).reverse().map(star => bar(star))}
    </div>
  );
};

export default StarBreakdown;