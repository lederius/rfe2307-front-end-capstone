import React, {useState, useEffect} from 'react';
import moment from 'moment';
const Answer = (props) => {
  var answer = props.answer[1];
  var id = answer.id;
  // console.log('id', id, 'answer', answer);
  if (props === undefined) {
    return (
      <></>
    );
  } else {
    return (
      <div>
        <p ><label className="font-bold" >A:</label> {answer.body} </p>
        <p className="text-xs ml-5" >by {answer.answerer_name}, {moment.utc(answer.date).format('MMMM DD, YYYY')}<span className="m-4 text-xs">|</span><label>Helpful? </label>

          <button className="underline text-xs m-1" onClick={(e)=>{
            console.log('clicked helpful');
          }}>Yes</button>

          <span className="text-xs">({answer.helpfulness})</span><span className="m-4 text-xs">|</span><button className="underline" onClick={(e)=>{
            console.log('clicked report');
          }}>Report </button></p>
        {answer.photos.length > 0 &&
          <div className="ml-10 mt-4 flex flex-row h-28 w-42 space-x-3">
            {answer.photos.map((photo, index) => {
              return <img className="" src={photo} key={index}></img>;
            })}
          </div>}
      </div>
    );
  }

};

export default Answer;