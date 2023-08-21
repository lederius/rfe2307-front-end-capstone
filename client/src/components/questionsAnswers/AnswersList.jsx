import React, {useState, useEffect} from 'react';
import Answer from './Answer.jsx';
import axios from 'axios';
const AnswersList = (props) => {
  var answers = Object.entries(props.answers);
  const [shown, setShown] = useState([]);

  const getShown = () => {
    if (props.allAnswers === false) {
      var temp = answers.slice(0, 2);
      setShown(temp);
    } else {
      setShown(answers);
    }
  };
  useEffect(()=> {
    getShown();
  }, []);

  useEffect(()=> {
    getShown();
  }, [props.allAnswers]);

  return (
    <div className="max-h-56 overflow-y-auto">
      {shown.map((answer, index) => {
        // console.log('this is an answer', answer);
        return <Answer answer={answer} key={index} />;
      })}
    </div>

  );
};

export default AnswersList;