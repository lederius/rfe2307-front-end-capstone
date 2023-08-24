import React, {useState} from 'react';
import axios from 'axios';
import AddPhotoModal from './AddPhotoModal.jsx';
const AnswerModal = ({modal, setModal, questionbody, questionid}) => {

  const [addingPhotos, setAddingPhotos] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  // console.log('id', questionid);
  const sendFormData = (form) => {
    // eslint-disable-next-line camelcase
    axios.post(`/qa/questions/${questionid}/answers`, {params: {question_id: questionid}, formData: {form}})
      .then((res) => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="relative modal">
        <div onClick={toggleModal} className="w-100vw h-100vh top-0 left-0 right-0 bottom-0 fixed bg-neutral-600 opacity-70 z-10 "></div>
        <div className="fixed z-20 -top-4 mr-4 translate-y-1/4 translate-x-2/4 leading-6 bg-neutral-50 border-4 rounded max-h-3/4 w-2/4">
          <form role="answer-form" className="ml-2 flex flex-col" onSubmit={(e) => {
            e.preventDefault();
            var form = {
              // eslint-disable-next-line camelcase
              body: e.target[0].value,
              name: e.target[1].value,
              email: e.target[2].value,
              photos: ['https://cdn.drawception.com/drawings/KZvFKp2jX8.png']
            };
            sendFormData(form);
            toggleModal();
          }}>
            <p className="m-2 flex-shrink-0 relative mr-8">[Product Name]: {questionbody}</p>
            <textarea role="answer-form-body" maxLength="1000" required className="m-2 h-48 resize-none" placeholder="Your answer"></textarea>
            <input role="answer-form-name" maxLength="60" required className="m-2" placeholder="Example: jack543!"></input>
            <span className="m-2 text-xs">For privacy reasons, do not use your full name or email address</span>
            <input role="answer-form-email" maxLength="60" required type="email" className="m-2" placeholder="Example: jack@email.com"></input>
            <span className="m-2 text-xs">For authentication reasons, you will not be emailed</span>
            {!addingPhotos && <button className="bottom-2 left-2 m-1 mr-2 py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500" onClick={(e)=> {
              setAddingPhotos(!addingPhotos);
            }} type="button">Add Photos</button>}
            {addingPhotos && <AddPhotoModal/>}
            <button role="submit-answer" type="submit" className=" m-1 mr-2 py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500">Submit</button>
          </form>
          <button role="close-answer-modal" className="h-7 absolute top-1 right-1 px-2 m-1 py-[.688rem] inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white bg-red-500 hover:border-red-500 transition-all text-sm dark:border-gray-700 dark:hover:border-red-500" onClick={toggleModal}>
            X
          </button>
        </div>
      </div>
    </>
  );
};


export default AnswerModal;