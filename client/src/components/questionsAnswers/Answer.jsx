import React, {useState, useEffect} from 'react';
import moment from 'moment';
const Answer = (props) => {
  var answerid = Object.keys(props.answer);
  var answerObj = props.answer[answerid];
  console.log(answerObj);

  //fake picture data for testing
  if (answerObj.photos.length === 0) {
    answerObj.photos.push('http://tinyurl.com/zgs7z2s');
    answerObj.photos.push('http://tinyurl.com/zgs7z2s');
    answerObj.photos.push('http://tinyurl.com/zgs7z2s');
  }

  return (
    <div>
      <p ><label className="font-bold" >A:</label> {answerObj.body} </p>
      <p className="text-xs ml-5" >by {answerObj.answerer_name}, {moment.utc(answerObj.date).format('MMMM DD, YYYY')}<span className="m-4 text-xs">|</span><label>Helpful? </label>

        <button className="underline text-xs m-1" onClick={(e)=>{
          console.log('clicked helpful');
        }}>Yes</button>

        <span className="text-xs">({answerObj.helpfulness})</span><span className="m-4 text-xs">|</span><button className="underline" onClick={(e)=>{
          console.log('clicked report');
        }}>Report </button></p>

      <div className="mt-4 flex flex-row h-28 w-42 space-x-3">
        {answerObj.photos.map((photo, index) => {
          return <img className="" src={photo} key={index}></img>;
        })}
      </div>
    </div>
  );
};

export default Answer;