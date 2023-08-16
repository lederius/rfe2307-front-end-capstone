import React, {useState, useEffect} from 'react';
import Answer from './Answer.jsx';
import axios from 'axios';
const AnswersList = (props) => {
  // console.log('current answers', props.answers);
  var answers = Object.entries(props.answers);
  // console.log('answers array', answers);


  return (
    <div>
      {answers.map((answer, index) => {
        // console.log('this is an answer', answer);
        return <Answer answer={answer} key={index} />;
      })}
    </div>
  );
};

export default AnswersList;