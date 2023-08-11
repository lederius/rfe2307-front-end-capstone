import React, {useState} from 'react';
import Question from './Question.jsx';
const QuestionsList = () => {
  return (
    <div>
      QuestionsList Component
      <Question/>
      <Question/>
      <Question/>
    </div>
  );
};

export default QuestionsList;