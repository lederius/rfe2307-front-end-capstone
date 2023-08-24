import React from 'react';
import { render, fireEvent, cleanup, screen, configure } from '@testing-library/react';
import QuestionAnswerContainer from './QuestionAnswerContainer.jsx';
import SearchBar from './SearchBar.jsx';
import QuestionsList from './QuestionsList.jsx';
import Question from './Question.jsx';
import AnswersList from './AnswersList.jsx';
import Answer from './Answer.jsx';
import AnswerModal from './AnswerModal.jsx';
import QuestionModal from './QuestionModal.jsx';
import '@testing-library/jest-dom/';
const request = require('supertest');
const assert = require('assert');
require('dotenv').config();


describe('API TESTING', () => {
  const productId = 37335;
  const expected =
  {
    "results": [
        {
            "question_id": 643081,
            "question_body": "another question",
            "question_date": "2022-09-05T00:00:00.000Z",
            "asker_name": "hi",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        }
    ]
  }

  request(`${process.env.API_URL}`)
      .get(`qa/questions/?product_id=${productId}`)
      .expect(200)
      .expect(res => {
        assert(res.body.results, expected);
      })
      .set('Authorization', `${process.env.TOKEN}`)
      .end((err, res) => {
        if (err) {
          throw err;
        }
      });
});


describe('DOM TESTING', () => {

  afterEach(cleanup);

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
          'answerer_name': 'answererName1',
          'helpfulness': 50,
          'photos': [
            'http://tinyurl.com/zgs7z2s',
            'http://tinyurl.com/zgs7z2s',
            'http://tinyurl.com/zgs7z2s'
          ]
        },
        '5992869': {
          'id': 5992869,
          'body': 'little cheese',
          'date': '2023-07-08T00:00:00.000Z',
          'answerer_name': 'answererName2',
          'helpfulness': 0,
          'photos': [
            'http://tinyurl.com/zgs7z2s',
            'http://tinyurl.com/zgs7z2s',
            'http://tinyurl.com/zgs7z2s'
          ]
        }
      }
    },
    {
      'question_id': 563552,
      'question_body': 'example question body 2',
      'question_date': '2022-01-07T00:00:00.000Z',
      'asker_name': 'QuestionerName',
      'question_helpfulness': 12,
      'reported': false,
      'answers': {
        '5992868': {
          'id': 5992868,
          'body': 'big cheese',
          'date': '2023-07-07T00:00:00.000Z',
          'answerer_name': 'answererName1',
          'helpfulness': 50,
          'photos': [
            'http://tinyurl.com/zgs7z2s',
            'http://tinyurl.com/zgs7z2s',
            'http://tinyurl.com/zgs7z2s'
          ]
        },
        '5992869': {
          'id': 5992869,
          'body': 'little cheese',
          'date': '2023-07-08T00:00:00.000Z',
          'answerer_name': 'answererName2',
          'helpfulness': 100,
          'photos': [
            'http://tinyurl.com/zgs7z2s',
            'http://tinyurl.com/zgs7z2s',
            'http://tinyurl.com/zgs7z2s'
          ]
        },
        '5992870': {
          'id': 5992870,
          'body': 'little stinky cheese',
          'date': '2023-07-08T00:00:00.000Z',
          'answerer_name': 'answererName3',
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

  const exampleQuestion = [
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
          'answerer_name': 'answererName1',
          'helpfulness': 50,
          'photos': [
            'http://tinyurl.com/zgs7z2s',
            'http://tinyurl.com/zgs7z2s',
            'http://tinyurl.com/zgs7z2s'
          ]
        }
      }
    }
  ];

  afterEach(cleanup)


  it('Renders the questions to DOM', () => {
    render(<QuestionsList questions={exampleData}/>);
  });

  it('Renders the QuestionAnswerContainer to DOM', () => {
    render(<QuestionAnswerContainer/>);
  });

  it('Renders the SearchBar component to DOM', () => {
    render(<QuestionAnswerContainer/>);
    const searchBar = screen.getByRole('search-bar');
    expect(searchBar).toBeTruthy();
  });

  it('Tests query value update', () => {
    render(<QuestionAnswerContainer productid={37335}/>);
    const searchBar = screen.getByRole('search-bar');
    const input = screen.getByRole('query-input');
    fireEvent.change(input, {target: {value: 'this is a cheesy test search'}});
    expect(input.value).toBe("this is a cheesy test search");
  });

  it('Renders a question to DOM with its answers', () => {
    render(<Question question={exampleData[0]}/>);
    expect(screen.getByRole('question')).toBeTruthy();
  });

  it('Renders the answers to DOM', () => {
    var answersArray = Object.entries(exampleData[0].answers).map(([key, answer]) => ({answer}));
    const sortAnswers = () => {
      return answersArray.sort((a, b) => b.answer.helpfulness - a.answer.helpfulness);
    };
    render(<AnswersList answers={sortAnswers()}/>);
    expect(screen.getByText('by answererName1, July 07, 2023')).toBeTruthy();
    expect(screen.getByText('by answererName2, July 08, 2023')).toBeTruthy();
  });

  it('More questions button should show if more than 2 answers for a question', () => {
    render(<Question question={exampleData[1]}/>);
    expect(screen.getByRole('answer-toggle-btn')).toBeTruthy();
  });

  it('Toggles more answers and changes inner text', () => {
    render(<Question question={exampleData[1]}/>);
    const toggleBtn = screen.getByRole('answer-toggle-btn');
    fireEvent.click(toggleBtn);
    expect(screen.findByText('Collapse')).toBeTruthy();
    fireEvent.click(toggleBtn);
    expect(screen.findByText('More answers')).toBeTruthy();
  });

  it('Increments helpfulness of questions on DOM', () => {
    render(<Question question={exampleData[1]}/>);
    expect(screen.findByText('12')).toBeTruthy();
    const toggleBtn = screen.getByRole('helpfulness');
    fireEvent.click(toggleBtn);
    expect(screen.findByText('13')).toBeTruthy();
  });

  it('Changes report value to reported for a question on DOM', () => {
    render(<Question question={exampleData[1]}/>);
    expect(screen.findByText('Report')).toBeTruthy();
    const toggleBtn = screen.getByRole('report-question');
    fireEvent.click(toggleBtn);
    expect(screen.findByText('Reported')).toBeTruthy();
  });

  it('Tests if button renders answerModal with question_body', () => {
    render(<QuestionsList questions={exampleData}/>);
    const button = screen.getAllByRole('add-answer');
    button.forEach((btn)=> {
      fireEvent.click(btn);
      expect(screen.getByText('[Product Name]: Blah blah blah')).toBeTruthy();
    })
  });

  it('Tests if answer modal closes when close button is pressed', () => {
    render(<QuestionsList questions={exampleData}/>);
    const openButton = screen.getAllByRole('add-answer');

    openButton.forEach((btn)=> {
      fireEvent.click(btn);
      const closeButton = screen.getByRole('close-answer-modal');
      fireEvent.click(closeButton);
    })
    expect(screen.queryByText('[Product Name]: Blah blah blah')).toBeFalsy();
  });

  it('Tests form data updates when changes are made by user', () => {
    render(<QuestionsList questions={exampleData}/>);
    const openButton = screen.getAllByRole('add-answer');
    openButton.forEach((btn)=> {
      fireEvent.click(btn);
      const body = screen.getAllByRole('answer-form-body');
      body.forEach((input)=> {
        fireEvent.change(input, {target: {value: 'this is a cheesy test body'}});
        expect(input.value).toBe("this is a cheesy test body");
      });
      const name = screen.getAllByRole('answer-form-name');
      name.forEach((input)=> {
        fireEvent.change(input, {target: {value: 'Test Cheese'}});
        expect(input.value).toBe("Test Cheese");
      });
      const email = screen.getAllByRole('answer-form-email');
      email.forEach((input)=> {
        fireEvent.change(input, {target: {value: 'testemail@test.com'}});
        expect(input.value).toBe("testemail@test.com");
      });
    })
  });

  // it('Tests adding answer to question', async () => {
  //   render(<QuestionsList questions={exampleQuestion}/>);
  //   const openButton = screen.getByRole('add-answer');
  //   await fireEvent.click(openButton);
  //   const body = screen.getByRole('answer-form-body');
  //   await fireEvent.change(body, {target: {value:'this is a cheesy test body'}});
  //   await expect(body.value).toBe("this is a cheesy test body");
  //   const name = screen.getByRole('answer-form-name');
  //   await fireEvent.change(name, {target: {value: 'Test Cheese'}});
  //   await expect(name.value).toBe("Test Cheese");
  //   const email = screen.getByRole('answer-form-email');
  //   await fireEvent.change(email, {target: {value: 'goodemail@gmail.com'}});
  //   await expect(email.value).toBe("goodemail@gmail.com");
  //   const submitBtn = screen.getByRole('submit-answer');
  //   await expect(fireEvent.click(submitBtn)).toBe(true);
  //   await expect(screen.getByText('this is a cheesy test body')).toBeTruthy();
  // });

  it('Increments helpfulness of answer on DOM', () => {
    var answersArray = Object.entries(exampleData[1].answers).map(([key, answer]) => ({answer}));
    const sortAnswers = () => {
      return answersArray.sort((a, b) => b.answer.helpfulness - a.answer.helpfulness);
    };
    var answers = Object.entries(sortAnswers());
    render(<Answer answer={answers[0]}/>);
    expect(screen.findByText('50')).toBeTruthy();
    const toggleBtn = screen.getByRole('helpfulness-answer');
    fireEvent.click(toggleBtn);
    expect(screen.findByText('51')).toBeTruthy();
  });

  it('Changes report value to reported for an answer on DOM', () => {
    var answersArray = Object.entries(exampleData[1].answers).map(([key, answer]) => ({answer}));
    var answers = Object.entries(answersArray);
    render(<Answer answer={answers[0]}/>);
    expect(screen.findByText('Report')).toBeTruthy();
    const toggleBtn = screen.getByRole('report-answer');
    fireEvent.click(toggleBtn);
    expect(screen.findByText('Reported')).toBeTruthy();
  });

  it('Tests if add question button renders questionModal with "Test Name"', async () => {
    const {container} = render(<QuestionAnswerContainer />);
    const button = screen.getByRole('add-question');
    fireEvent.click(button);
    await expect(screen.queryByText('About the TEST NAME')).toBeTruthy();
  });

  it('Tests if question modal closes when close button is pressed', async () => {
    const {container} = render(<QuestionAnswerContainer />);
    const openButton = screen.getByRole('add-question');
    fireEvent.click(openButton);
    const closeButton = screen.getByRole('close-question-modal');
    fireEvent.click(closeButton);
    await expect(screen.queryByRole("question-modal")).toBeFalsy();
  });
});