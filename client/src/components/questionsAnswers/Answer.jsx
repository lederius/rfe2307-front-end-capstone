import React, {useState, useEffect} from 'react';
import moment from 'moment';
const Answer = (props) => {
  // console.log(props.answer);
  var answer = props.answer[1].answer;
  var id = answer.id;
  // console.log('answer', answer);
  if (props === undefined) {
    return (
      <></>
    );
  } else {
    return (
      <div className="mt-1">
        <p ><label className="font-bold" >A:</label> {answer.body} </p>
        <div className="flex flex-auto w-124 text-xs text-gray-500 relative left-10"><p className="w-250">by {answer.answerer_name}, {moment.utc(answer.date).format('MMMM DD, YYYY')} </p><span className="text-xs flex-none w-4 ml-4">|</span><label className="mr-1">Helpful?</label>

          <button className="underline text-xs" onClick={(e)=>{
            console.log('clicked helpful');
          }}>Yes</button>

          <span className="text-xs">({answer.helpfulness})</span><span className="text-xs flex-none w-4 ml-4">|</span><button className="underline" onClick={(e)=>{
            console.log('clicked report');
          }}>Report </button></div>
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