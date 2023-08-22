const request = require('supertest');
const assert = require('assert');
require('dotenv').config();
import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import RatingsReviews from './RatingsReviews.jsx';
import ReviewsList from './ReviewsList.jsx';
import SingleReview from './SingleReview.jsx';
import StarBreakdown from './StarBreakdown.jsx';
import MetaRatings from './MetaRatings.jsx';

describe('API calls', () => {

  it('Should fetch correct reviews data based on product ID', () => {
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

    request(`${process.env.API_URL}`)
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

  it('Should fetch correct meta data based on product ID', () => {
    const expectedMetaData = {
      'product_id': '37312',
      'ratings': {
        '1': '19',
        '2': '13',
        '3': '9',
        '4': '6',
        '5': '13'
      },
      'recommended': {
        'false': '11',
        'true': '49'
      },
      'characteristics': {
        'Quality': {
          'id': 125035,
          'value': '3.2068965517241379'
        }
      }
    };

    request(`${process.env.API_URL}`)
      .get('/reviews/meta/?product_id=37312')
      .expect(200)
      .expect(res => {
        assert(res.body.results, expectedMetaData);
      })
      .set('Authorization', `${process.env.TOKEN}`)
      .end((err, res) => {
        if (err) {
          throw err;
        }
      });
  });

  it('Should include a successful put request', () => {
    request(`${process.env.API_URL}`)
      .put('/reviews/1280179/helpful')
      .expect(204)
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

  const reviews = [
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
      'review_id': 1280355,
      'rating': 1,
      'summary': 'this is a test',
      'recommend': false,
      'response': null,
      'body': 'this is a test',
      'date': '2023-08-09T00:00:00.000Z',
      'reviewer_name': 'test',
      'helpfulness': 2,
      'photos': [
        {
          'id': 2459068,
          'url': 'test.jpg'
        }
      ]
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
      'review_id': 1280355,
      'rating': 1,
      'summary': 'this is a test',
      'recommend': false,
      'response': null,
      'body': 'this is a test',
      'date': '2023-08-09T00:00:00.000Z',
      'reviewer_name': 'test',
      'helpfulness': 2,
      'photos': [
        {
          'id': 2459068,
          'url': 'test.jpg'
        }
      ]
    }
  ];

  const meta =
  {
    'product_id': '37312',
    'ratings': {
      '1': '19',
      '2': '13',
      '3': '9',
      '4': '6',
      '5': '13'
    },
    'recommended': {
      'false': '11',
      'true': '49'
    },
    'characteristics': {
      'Quality': {
        'id': 125035,
        'value': '3.2068965517241379'
      }
    }
  };

  const average = (ratings) => {
    let total = 0;
    let response = 0;
    for (let star in ratings) {
      total += (Number(ratings[star]) * Number(star));
      response += Number(ratings[star]);
    }
    const average = (total / response).toFixed(1);
    return parseFloat(average);
  };

  describe('MetaRatings tests', () => {

    it('Should render metaRatings', () => {
      render(<MetaRatings meta={meta} />);
      expect(screen.getByRole('meta')).toBeDefined();
    });

    it('Should calculate the average based on ratings', () => {
      const result = average(meta.ratings);
      expect(result).toBeCloseTo(2.7);
    });
  });

  describe('NewReview tests', () => {

    it('Should render reviews list when form is submitted / close the form', () => {
      render(<RatingsReviews />);
      expect(screen.getByRole('heading')).toBeDefined();
    });
  });

  describe('RatingsReviews tests', () => {

    it('Should render ratingsReviews', () => {
      render(<RatingsReviews />);
      expect(screen.getByRole('heading')).toBeDefined();
    });
  });

  describe('StarBreakdown tests', () => {

    it('Should render starBreakdown', () => {
      render(<StarBreakdown />);
      expect(screen.getByRole('stars')).toBeDefined();
    });
  });

  describe('ReviewsList tests', () => {

    it('Only new review button exists when product has 0 reviews', () => {
      render(<ReviewsList reviewList={[]} />);
      // check if more button false
      const more = screen.queryByText('MORE REVIEWS');
      expect(more).toBeNull();
      // check if add button truthy
      expect(screen.getByRole('add')).toBeDefined();
    });

    it('Renders total reviews header', () => {
      render(<ReviewsList reviewList={reviews} />);
      // use regex for strings on separate lines
      expect(screen.getByText(/2 reviews, sorted by/)).toBeTruthy();
    });

    it('Should increase review list by 2 when more button clicked', () => {
      render(<ReviewsList reviewList={reviews} />);
      const button = screen.getByRole('more');
      fireEvent.click(button);
      expect(screen.getByText(/4 reviews, sorted by/)).toBeTruthy();
    });

    it('New review form should render when add review button clicked', () => {
      render(<ReviewsList reviewList={reviews} />);
      const add = screen.getByRole('add');
      fireEvent.click(add);
      expect(screen.getByText('New Review')).toBeTruthy();
    });
  });

  describe('SingleReview tests', () => {

    it('Handleclick function called when helpful is clicked', () => {
      render(<SingleReview review={review[0]} />);
      const button = screen.getByRole('helpful');
      fireEvent.click(button);
      expect(screen.getByText(/Yes \(155\)/)).toBeTruthy();
    });
  });

});


