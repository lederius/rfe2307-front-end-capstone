import React, {useState, useEffect} from "react";
import Answer from './Answer.jsx';
import axios from 'axios';
const AnswersList = (props) => {

  return (
    <div>
      {props.answers.map((answer, index) => {
        return <Answer answer={answer} key={index} />;
      })}
    </div>
  );
};

export default AnswersList;