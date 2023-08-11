import React, {useState, useEffect} from 'react';
import Question from './Question.jsx';
import axios from 'axios';

const QuestionsList = () => {

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
      <h2 className="text-2xl font-bold">QuestionsList Component</h2>
      {questions.map((question, index) => {
        return <Question question={question} key={index}/>;
      })}

    </div>
  );
};

export default QuestionsList;