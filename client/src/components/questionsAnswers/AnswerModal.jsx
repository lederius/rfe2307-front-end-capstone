import React, {useState} from 'react';

const AnswerModal = ({modal, setModal}) => {
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="modal">
        <div onClick={setModal} className="w-100vw h-100vh top-0 left-0 right-0 bottom-0 fixed bg-neutral-600 opacity-70 "></div>
        <div className="absolute top-40% left-40% translate-y-2/4 translate-x-2/4 leading-6 bg-neutral-50 border-3 rounded w-96 h-96">
          <p>Form will go here</p>
          <button className="close-modal" onClick={toggleModal}>
            CLOSE
          </button>
        </div>
      </div>
    </>
  );
};


export default AnswerModal;