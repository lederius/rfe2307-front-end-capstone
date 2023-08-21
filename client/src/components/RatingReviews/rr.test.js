const request = require('supertest');
const assert = require('assert');
require('dotenv').config();
import React from 'react';
import { render, fireEvent, cleanup, screen, configure } from '@testing-library/react';
import ReviewsList from './ReviewsList.jsx';
import SingleReview from './SingleReview.jsx';

describe('API calls', () => {

  it ('Should fetch correct reviews data based on product ID', () => {
    const expectedData = [
      {
        'review_id': 1280180,
        'rating': 5,
        'summary': 'squidward test review',
        'recommend': true,
        'response': null,
        'body': 'just a test haha',
        'date': '2023-06-26T00:00:00.000Z',
        'reviewer_name': 'squid',
        'helpfulness': 29,
        'photos': [
          {
            'id': 2459025,
            'url': 'https://static.wikia.nocookie.net/spongebob/images/4/4f/The_Two_Faces_of_Squidward_075.png'
          },
          {
            'id': 2459026,
            'url': 'https://static.wikia.nocookie.net/spongebob/images/9/96/The_Two_Faces_of_Squidward_174.png'
          }
        ]
      },
      {
        'review_id': 1135534,
        'rating': 2,
        'summary': 'is this working??',
        'recommend': true,
        'response': null,
        'body': 'test 111111',
        'date': '2022-02-11T00:00:00.000Z',
        'reviewer_name': 'oliver6666',
        'helpfulness': 17,
        'photos': []
      },
      {
        'review_id': 1135535,
        'rating': 2,
        'summary': 'is this working??',
        'recommend': true,
        'response': null,
        'body': 'test 111111',
        'date': '2022-02-11T00:00:00.000Z',
        'reviewer_name': 'oliver7777',
        'helpfulness': 4,
        'photos': []
      },
      {
        'review_id': 1280179,
        'rating': 5,
        'summary': 'squidward test review',
        'recommend': true,
        'response': null,
        'body': 'just a test haha',
        'date': '2023-06-26T00:00:00.000Z',
        'reviewer_name': 'squid',
        'helpfulness': 2,
        'photos': [
          {
            'id': 2459023,
            'url': 'https://static.wikia.nocookie.net/spongebob/images/9/96/The_Two_Faces_of_Squidward_174.png'
          },
          {
            'id': 2459024,
            'url': 'https://static.wikia.nocookie.net/spongebob/images/4/4f/The_Two_Faces_of_Squidward_075.png'
          }
        ]
      },
      {
        'review_id': 1275436,
        'rating': 5,
        'summary': 'Chester B Arthur',
        'recommend': true,
        'response': null,
        'body': ' let boom = characteristicCreater(); let boom = characteristicCreater();',
        'date': '2022-07-15T00:00:00.000Z',
        'reviewer_name': 'johnbarleycorn',
        'helpfulness': 0,
        'photos': []
      }
    ];

    request('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe')
      .get('/reviews/?product_id=37312')
      .expect(200)
      .expect(res => {
        assert(res.body.results, expectedData);
      })
      .set('Authorization', `${process.env.TOKEN}`)
      .end((err, res) => {
        if (err) {
          throw err;
        }
      });
  });

});

describe('DOM Testing', () => {

  afterEach(cleanup);

  const review = [
    {
      'review_id': 1280318,
      'rating': 3,
      'summary': 'Thog dont caare',
      'recommend': false,
      'response': null,
      'body': 'Thog dont caare',
      'date': '2023-07-07T00:00:00.000Z',
      'reviewer_name': 'Thog',
      'helpfulness': 154,
      'photos': []
    }
  ];

  // it ('Helpful amount should increment when clicked', () => {
  //   render(<SingleReview reviewList={review}/>);
  //   const button = screen.getByRole('helpful');
  //   fireEvent.click(button);

  //   assert(screen.getByText('Yes (155)'), true);
  // });

  it ('Only new review button exists when product has 0 reviews', () => {
    render(<ReviewsList />);
    // check if more button false
    const more = screen.queryByText('More Reviews');
    expect(more).toBeNull();
    // check if add button truthy
    assert.ok(screen.getByRole('add'));
  });

});