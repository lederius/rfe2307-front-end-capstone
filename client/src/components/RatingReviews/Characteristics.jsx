import React from 'react';

const Characteristics = ({ chars }) => {

  const marker = (val) => {
    const left = Math.round((Number(val) / 5) * 100) - 8;
    return {
      left: `${left}%`,
    };
  };

  const bar = (data) => {
    return (
      <div className="char-bar mx-auto rounded-sm h-2 mb-4 relative" style={{ width: '100%' }}>
        <div className="marker-triangle" style={marker(data.value)}></div>
      </div>
    );
  };

  return (
    chars && (
      <div>
        {chars.Size && (
          <div>
            <p className='ml-1 mt-2 text-sm font-medium'>Size</p>
            <div>{bar(chars.Size)}</div>
          </div>
        )}
        {chars.Width && (
          <div>
            <p className='ml-1 text-sm font-medium'>Width</p>
            <div>{bar(chars.Width)}</div>
          </div>
        )}
        {chars.Comfort && (
          <div>
            <p className='ml-1 text-sm font-medium'>Comfort</p>
            <div>{bar(chars.Comfort)}</div>
          </div>
        )}
        {chars.Quality && (
          <div>
            <p className='ml-1 text-sm font-medium'>Quality</p>
            <div>{bar(chars.Quality)}</div>
          </div>
        )}
        {chars.Length && (
          <div>
            <p className='ml-1 text-sm font-medium'>Length</p>
            <div>{bar(chars.Length)}</div>
          </div>
        )}
        {chars.Fit && (
          <div>
            <p className='ml-1 text-sm font-medium'>Fit</p>
            <div>{bar(chars.Fit)}</div>
          </div>
        )}
      </div>
    )
  );
};

export default Characteristics;