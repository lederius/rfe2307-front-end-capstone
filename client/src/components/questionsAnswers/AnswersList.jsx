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
  if (answers.length === 0) {
    return (
      <div className="flex justify-center">
        <p className="realtive m-24">Be the first to answer this question!</p>
      </div>
    );
  } else {
    return (
      <div className="outter">
        <div className="inner">
          {shown.map((answer, index) => {
            // console.log('this is an answer', answer);
            return <Answer answer={answer} key={index} />;
          })}
        </div>
      </div>

    );
  }

};

export default AnswersList;