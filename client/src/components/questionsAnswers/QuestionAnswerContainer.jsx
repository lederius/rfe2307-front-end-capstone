import React, {useState, useEffect} from 'react';
import QuestionsList from './QuestionsList.jsx';
import QuestionModal from './QuestionModal.jsx';
import axios from 'axios';

const QuestionAnswerContainer = (props) => {
  const id = 37323;
  const [questions, setQuestions] = useState([]);
  const [modal, setModal] = useState(false);



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
    <div className="absolute">
      <h3 className="text-2xl font-bold">Questions & Answers</h3>
      {console.log(questions)}
      <QuestionsList questions={questions}/>
      <div className="mt-5 space-x-5" >
        <button className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500">MORE ANSWERED QUESTIONS</button>
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