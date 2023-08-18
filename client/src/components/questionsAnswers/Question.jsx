import React, {useState} from 'react';
import AnswersList from './AnswersList.jsx';
import AnswerModal from './AnswerModal.jsx';
import axios from 'axios';
const Question = (props) => {
  var answersArray = Object.entries(props.question.answers).map(([key, answer]) => ({answer}));

  // console.log(answersArray);
  const sortAnswers = () => {
    // console.log(answersArray);
    // eslint-disable-next-line camelcase
    return answersArray.sort((a, b) => b.answer.helpfulness - a.answer.helpfulness);
  };

  const [answers, setAnswers] = useState(()=> {
    const initialState = sortAnswers();
    return initialState;
  });

  const [allAnswers, setAllAnswers] = useState(false);
  const [modal, setModal] = useState(false);
  const [helpfulness, setHelpfulness] = useState(Number(props.question.question_helpfulness));
  const [helpfulCheck, setHelpfulCheck] = useState(false);

  const toggleAllAnswers = (e) => {
    setAllAnswers(!allAnswers);
    if (e.target.innerText === 'More Answers') {
      e.target.innerText = 'Collapse';
    } else {
      e.target.innerText = 'More Answers';
    }
  };

  const setHelpful = (e) => {
    if (helpfulCheck === false) {
      var id = props.question.question_id;
      setHelpfulness(helpfulness + 1);
      axios.put(`/qa/questions/${props.question.question_id}/helpful`, {id})
        .then(() => {
          setHelpfulCheck(true);
          console.log('success');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      return;
    }
  };

  return (
    <div className="flex-1">
      <div className="flex flex-row justify-between">
        <div className="font-bold">
          <label>Q:</label> {props.question.question_body}
        </div>
        <div className="ml-40">
          <label className="text-xs">Helpful? </label>
          <button id={props.question.question_id} className="underline text-xs ml-1" onClick={(e)=>{
            setHelpful(e);
          }}>Yes </button>
          <span className="text-xs"> ({helpfulness})</span><span className="m-4 text-xs">|</span>
          <button role="add-answer" className="font-bold underline text-xs" onClick={(e)=>{
            setModal(!modal);
          }}>Add Answer</button>
        </div>
      </div>
      <div>
        {modal && (<AnswerModal modal={modal} setModal={setModal} questionid={props.question.question_id} questionbody={props.question.question_body}/>)}
      </div>
      <div className="h-3/6">
        <AnswersList answers={answers} allAnswers={allAnswers}/>
        {answers.length > 2 && <button onClick={(e) => toggleAllAnswers(e)} className="m-1 py-[.288rem] px-1 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all text-xs dark:border-gray-700 dark:hover:border-blue-500">More Answers</button>}
      </div>

    </div>
  );
};

export default Question;