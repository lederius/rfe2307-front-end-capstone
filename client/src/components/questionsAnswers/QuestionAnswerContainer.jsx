import React, {useState, useEffect} from 'react';
import QuestionsList from './QuestionsList.jsx';
import axios from 'axios';

const QuestionAnswerContainer = (props) => {
  const id = 37315;
  const [questions, setQuestions] = useState([]);


  const getQuestions = () => {
    // eslint-disable-next-line camelcase
    axios.get(`/qa/questions/${id}`, {params: {product_id: id}})
      .then((data) => {
        // console.log('productInfo', data.data.results);
        setQuestions(data.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };


  useEffect(() => {
    getQuestions();
  }, []);


  return (
    <div>
      <QuestionsList questions={questions}/>
      <div className="mt-5 space-x-5" >
        <button className="border border-gray-500">MORE ANSWERED QUESTIONS</button>
        <button className="border border-gray-500" charSet='utf-8'>ADD QUESTION &#10133;</button>
      </div>
    </div>

  );
};

export default QuestionAnswerContainer;