import React, {useState} from 'react';
import AnswersList from './AnswersList.jsx';

const Question = (props) => {

  const [answers, setAnswers] = useState([props.question.answers]);
  // console.log(props.question.question_id);

  return (
    <div className="flex-1">

      <span className="font-bold"><label>Q:</label> {props.question.question_body} </span>
      <label >Helpful? </label>
      <button className="underline" onClick={(e)=>{
        console.log('clicked helpful');
      }}>Yes </button>
      <span> ({props.question.question_helpfulness}) </span>
      <button className="font-bold underline" onClick={(e)=>{
        console.log('clicked add');
      }}> Add Answer</button>
      <div>
        <AnswersList answers={answers}/>
      </div>
    </div>
  );
};

export default Question;