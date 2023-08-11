import React, {useState} from 'react';


const Question = (props) => {


  console.log(props.question);
  return (
    <div className="flex-1">

      <span><label>Q:</label> {props.question.question_body} </span>

      <label className="font-bold">Helpful? </label>

      <button className="underline" onClick={(e)=>{
        console.log('clicked helpful');
      }}>Yes </button>

      <span> ({props.question.question_helpfulness}) </span>

      <button className="font-bold underline" onClick={(e)=>{
        console.log('clicked add');
      }}> Add Answer</button>
    </div>
  );
};

export default Question;