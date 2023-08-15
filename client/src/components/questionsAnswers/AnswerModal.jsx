import React, {useState} from 'react';

const AnswerModal = ({modal, setModal, questionbody}) => {
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="modal">
        <div onClick={setModal} className="w-100vw h-100vh top-0 left-0 right-0 bottom-0 fixed bg-neutral-600 opacity-70 "></div>
        <div className="absolute inset-x-1/4 translate-y-1/4 translate-x-2/4 leading-6 bg-neutral-50 border-4 rounded w-96 h-124">
          <form className="flex flex-col">
            <label className="mt-2 ml-2">[Product Name]: {questionbody}</label>
            <textarea className="m-2 h-48" placeholder="Your answer"></textarea>
            <input className="m-2" placeholder="Example: jack543!"></input>
            <span className="m-2 text-xs">For privacy reasons, do not use your full name or email address</span>
            <input className="m-2" placeholder="Example: jack@email.com"></input>
            <span className="m-2 text-xs">For authentication reasons, you will not be emailed</span>
            <button className="bottom-2 left-2 m-1 py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500" onClick={(e)=> {
              console.log('adding photos!');
            }} type="button">Add Photos</button>
            <button className=" m-1 py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500">Submit</button>
          </form>
          <button className="h-7 absolute top-2 right-2 px-2 m-1 py-[.688rem] inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white bg-red-500 hover:border-red-500 transition-all text-sm dark:border-gray-700 dark:hover:border-red-500" onClick={toggleModal}>
            X
          </button>
        </div>
      </div>
    </>
  );
};


export default AnswerModal;