import React, {useState, useEffect} from 'react';
import Question from './Question.jsx';
import axios from 'axios';

const QuestionsList = (props) => {

  return (
    <div>
      {props.questions.map((question, index) => {
        return <Question question={question} key={index}/>;
      })}

    </div>
  );

};

export default QuestionsList;