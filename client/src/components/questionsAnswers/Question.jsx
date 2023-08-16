import React, {useState} from 'react';
import AnswersList from './AnswersList.jsx';
import AnswerModal from './AnswerModal.jsx';
const Question = (props) => {
  var answersArray = Object.entries(props.question.answers).map(([key, answer]) => (
    {answer}));
  const sortAnswers = () => {
    console.log(answersArray);
    // eslint-disable-next-line camelcase
    return answersArray.sort(({helpfulness: a}, {helpfulness: b}) => b - a);
  };

  const [answers, setAnswers] = useState(()=> {
    const initialState = sortAnswers();
    return initialState;
  });
  const [modal, setModal] = useState(false);
  // console.log('product name and question body', props.question);





  return (
    <div className="flex-1">
      <div className="flex flex-row justify-between">
        <div className="font-bold">
          <label>Q:</label> {props.question.question_body}
        </div>
        <div className="ml-40">
          <label className="text-xs">Helpful? </label>
          <button className="underline text-xs ml-1" onClick={(e)=>{
            console.log('clicked helpful');
          }}>Yes </button>
          <span className="text-xs"> ({props.question.question_helpfulness})</span><span className="m-4 text-xs">|</span>
          <button role="add-answer" className="font-bold underline text-xs" onClick={(e)=>{
            setModal(!modal);
          }}>Add Answer</button>
        </div>
      </div>

      <div>
        {modal && (<AnswerModal modal={modal} setModal={setModal} questionbody={props.question.question_body}/>)}
      </div>
      <div>
        <AnswersList answers={answers} answerCounter={props.answerCounter} setAnswerCounter={props.setAnswerCounter}/>
      </div>
    </div>
  );
};

export default Question;