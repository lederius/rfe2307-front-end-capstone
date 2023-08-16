import React, {useState, useEffect} from 'react';
import Question from './Question.jsx';
import axios from 'axios';

const QuestionsList = (props) => {
  // console.log(props.questions);
  var questions = props.questions;
  var counter = props.counter;
  const [shown, setShown] = useState([]);

  const getShown = () => {
    if (questions.length <= 2) {
      setShown(questions);
    } else if (questions.length < counter) {
      setShown(questions);
    } else {
      var temp = questions.slice(0, counter);
      console.log('temp', temp);
      setShown(temp);
    }
  };

  useEffect(()=> {
    getShown();
  }, [questions]);
  useEffect(()=> {
    getShown();
  }, [counter]);
  return (
    <div>
      {shown.map((question, index) => {
        return <Question question={question} key={index}/>;
      })}

    </div>
  );

};

export default QuestionsList;