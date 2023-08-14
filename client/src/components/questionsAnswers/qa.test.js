import React from 'react';
import { render, fireEvent, cleanup, screen, configure } from '@testing-library/react';
import QuestionsList from './QuestionsList.jsx';
import AnswerModal from './AnswerModal.jsx';
import '@testing-library/jest-dom/';

const exampleData = [
  {
    'question_id': 563551,
    'question_body': 'Blah blah blah',
    'question_date': '2022-01-07T00:00:00.000Z',
    'asker_name': 'Person Asking A Question',
    'question_helpfulness': 12,
    'reported': false,
    'answers': {
      '5992868': {
        'id': 5992868,
        'body': 'big cheese',
        'date': '2023-07-07T00:00:00.000Z',
        'answerer_name': 'no',
        'helpfulness': 0,
        'photos': [
          'http://tinyurl.com/zgs7z2s',
          'http://tinyurl.com/zgs7z2s',
          'http://tinyurl.com/zgs7z2s'
        ]
      }
    }
  }
];

afterEach(cleanup);

it('Renders the question to DOM', () => {
  const {container} = render(<QuestionsList questions={exampleData}/>);
});

it('Tests if button renders answerModal with question_body', () => {
  const {container} = render(<QuestionsList questions={exampleData}/>);
  const button = screen.getByRole('add-answer');
  fireEvent.click(button);
  expect(screen.getByText('Blah blah blah')).toBeTruthy();
});
