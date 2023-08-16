import React, {useState, useEffect} from 'react';
import QuestionsList from './QuestionsList.jsx';
import QuestionModal from './QuestionModal.jsx';
import axios from 'axios';

const QuestionAnswerContainer = (props) => {
  const id = 37323;
  const [questions, setQuestions] = useState([]);
  const [modal, setModal] = useState(false);
  const [counter, setCounter] = useState(2);


  const incrementCounter = () => {
    setCounter(counter + 2);

  };

  const sortQuestions = (data) => {
    // eslint-disable-next-line camelcase
    return data.sort(({question_helpfulness: a}, {question_helpfulness: b}) => b - a);
  };

  const getQuestions = () => {
    // eslint-disable-next-line camelcase
    axios.get(`/qa/questions/${id}`, {params: {product_id: id}})
      .then((data) => {
        // console.log('productInfo', data.data.results);
        var sorted = sortQuestions(data.data.results);
        return sorted;
      })
      .then((sorted)=> {
        setQuestions(sorted);
      })
      .catch(err => {
        console.log(err);
      });
  };



  useEffect(() => {
    getQuestions();
  }, []);


  return (
    <div className="absolute">
      <h3 className="text-2xl font-bold">Questions & Answers</h3>
      {console.log(questions)}
      <QuestionsList questions={questions} counter={counter}/>
      <div className="mt-5 space-x-5" >
        {counter < questions.length && <button className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500" onClick={(e)=> {
          incrementCounter();
        }}>MORE ANSWERED QUESTIONS</button>}
        <button role="add-question" className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500" charSet='utf-8' onClick={(e)=>{
          setModal(!modal);
        }}>ADD QUESTION &#10133;</button>
        <div>
          {modal && (<QuestionModal modal={modal} setModal={setModal}/>)}
        </div>
      </div>
    </div>

  );
};

export default QuestionAnswerContainer;