import React, {useState, useEffect} from 'react';
import Answer from './Answer.jsx';
import axios from 'axios';
const AnswersList = (props) => {
  var answers = Object.entries(props.answers);
  var counter = props.answerCounter;
  const [shown, setShown] = useState([]);

  const getShown = () => {
    if (answers.length <= 2) {
      setShown(answers);
    } else if (answers.length < counter) {
      setShown(answers);
    } else {
      var temp = answers.slice(0, counter);
      setShown(temp);
    }
  };
  useEffect(()=> {
    getShown();
  }, []);

  useEffect(()=> {
    getShown();
  }, [counter]);

  return (
    <div>
      {shown.map((answer, index) => {
        // console.log('this is an answer', answer);
        return <Answer answer={answer} key={index} />;
      })}
    </div>
  );
};

export default AnswersList;