/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */
/* eslint-disable no-setter-return */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint max-classes-per-file: ["error", 3] */
/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

const tweets = [
  {
    id: '1',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro #datamola',
    createdAt: new Date('2022-02-16T03:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      {
        id: '901',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-02-17T05:30:00'),
        author: 'Анджелина Джоли',
      },
      {
        id: '902',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-02-18T15:30:00'),
        author: 'Анджелина Джоли',
      },
      {
        id: '903',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-02-19T19:30:00'),
        author: 'Анджелина Джоли',
      }],
  },
  {
    id: '2',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #datamola',
    createdAt: new Date('2022-02-21T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [
      {
        id: '904',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-02-22T17:30:00'),
        author: 'Алеся Брановицкая',
      }],
  },
  {
    id: '3',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-02-24T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: 3,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-02-24T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: '4',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-02-25T03:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      {
        id: '905',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-02-27T05:30:00'),
        author: 'Анджелина Джоли',
      },
      {
        id: '906',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-02-28T15:30:00'),
        author: 'Анджелина Джоли',
      }],
  },
  {
    id: '5',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-01T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: '6',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-02T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: '7',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-03T03:30:00'),
    author: 'Алеся Брановицкая',
    comments: [],
  },
  {
    id: '8',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-04T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [
      {
        id: '907',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-05T05:30:00'),
        author: 'Алеся Брановицкая',
      },
      {
        id: '908',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-06T15:30:00'),
        author: 'Алеся Брановицкая',
      }],
  },
  {
    id: '9',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-07T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: '10',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-08T03:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      {
        id: '909',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-09T05:30:00'),
        author: 'Анджелина Джоли',
      },
      {
        id: '910',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-09T18:30:00'),
        author: 'Анджелина Джоли',
      }],
  },
  {
    id: '11',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-09T23:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      {
        id: '911',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-10T05:30:00'),
        author: 'Анджелина Джоли',
      },
      {
        id: '912',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-10T15:30:00'),
        author: 'Анджелина Джоли',
      },
      {
        id: '913',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-10T19:30:00'),
        author: 'Анджелина Джоли',
      }],
  },
  {
    id: '12',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-10T21:30:00'),
    author: 'Анджелина Джоли',
    comments: [
      {
        id: '914',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-10T22:30:00'),
        author: 'Алеся Брановицкая',
      }],
  },
  {
    id: '13',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-10T23:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: '14',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-11T03:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      {
        id: '915',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-11T05:30:00'),
        author: 'Анджелина Джоли',
      },
      {
        id: '916',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-11T08:30:00'),
        author: 'Анджелина Джоли',
      }],
  },
  {
    id: '15',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-11T11:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: '16',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-11T13:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: '17',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-11T14:30:00'),
    author: 'Алеся Брановицкая',
    comments: [],
  },
  {
    id: '18',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-12T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [
      {
        id: '917',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-12T05:30:00'),
        author: 'Алеся Брановицкая',
      },
      {
        id: '918',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-12T09:30:00'),
        author: 'Алеся Брановицкая',
      }],
  },
  {
    id: '19',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-12T12:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: '20',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-13T09:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      {
        id: '919',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-13T12:30:00'),
        author: 'Анджелина Джоли',
      },
      {
        id: '920',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-13T18:30:00'),
        author: 'Анджелина Джоли',
      }],
  },
];

class Tweet {
  constructor(id, text, createdAt, author, comments) {
    this._id = String((Math.ceil((Math.random(new Date(0))) * 1000)) + id);
    this.text = text;
    this._createdAt = new Date(0);
    this._author = tweetCollection._user;
    this.comments = [];
  }

  get id() {
    return this._id;
  }

  set id(id) {
    console.log('can\'t change', id);
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(createdAt) {
    console.log('can\'t change', createdAt);
  }

  get author() {
    return this._author;
  }

  set author(author) {
    console.log('can\'t change', author);
  }

  static maxTextLength() {
    return 280;
  }

  static validate(tw) {
    if (typeof tw.id === 'string' && tw.text.length <= Tweet.maxTextLength()
    && typeof tw.text === 'string' && toString.call(tw.createdAt) === '[object Date]'
    && typeof tw.author === 'string' && tw.comments instanceof Array) {
      return true;
    }
    return false;
  }
}

// const tweet = new Tweet('1', '2', new Date(), 'Алеся Брановицкая', []);
// console.log(tweet);
// tweet.id = 5;
// tweet.createdAt = 5;
// tweet.author = 5;
// console.log(tweet.id, tweet.createdAt, tweet.author);
// console.log(Tweet.validate({
//   id: '1',
//   text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro #datamola',
//   createdAt: new Date('2022-02-16T03:30:00'),
//   author: 'Алеся Брановицкая',
//   comments: [
//     {
//       id: '901',
//       text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//       createdAt: new Date('2022-02-17T05:30:00'),
//       author: 'Анджелина Джоли',
//     },
//     {
//       id: '902',
//       text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//       createdAt: new Date('2022-02-18T15:30:00'),
//       author: 'Анджелина Джоли',
//     },
//     {
//       id: '903',
//       text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//       createdAt: new Date('2022-02-19T19:30:00'),
//       author: 'Анджелина Джоли',
//     }],
// }));

class Comment {
  constructor(id, text, createdAt, author) {
    this._id = String((Math.ceil((Math.random(new Date(0))) * 1000)) + id);
    this.text = text;
    this._createdAt = new Date(0);
    this._author = tweetCollection._user;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    console.log('can\'t change', id);
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(createdAt) {
    console.log('can\'t change', createdAt);
  }

  get author() {
    return this._author;
  }

  set author(author) {
    console.log('can\'t change', author);
  }

  static maxTextLength() {
    return 280;
  }

  static validate(com) {
    if (typeof com.id === 'string' && com.text.length <= 280
    && typeof com.text === 'string' && toString.call(com.createdAt) === '[object Date]'
    && typeof com.author === 'string') {
      return true;
    }
    return false;
  }
}

// const comment = new Comment('1', '2', new Date('2022-02-19T19:30:00'), 'Alesya');
// comment.id = 5;
// comment.createdAt = 5;
// comment.author = 5;
// console.log(comment.id, comment.createdAt, comment.author);
// console.log(Comment.validate({
//   id: '904',
//   text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//   createdAt: new Date('2022-02-22T17:30:00'),
//   author: 'Алеся Брановицкая',
// }));
class TweetCollection {
  constructor(tws) {
    this._tws = new Set(tws);
    this._user = 'Алеся Брановицкая';
  }

  get user() {
    return this._user;
  }

  set user(user) {
    this._user = user;
  }

  getPage(skip = 0, top = 10, filterConfig = {}) {
    let array = [];
    filterConfig.author = filterConfig.author ? filterConfig.author : '';
    filterConfig.dateFrom = filterConfig.dateFrom ? new Date(filterConfig.dateFrom) : null;
    filterConfig.dateTo = filterConfig.dateTo ? new Date(filterConfig.dateTo) : null;
    filterConfig.text = filterConfig.text ? filterConfig.text : '';
    if (filterConfig.hashtags === undefined) {
      array = tweets;
    } else {
      for (let i = 0; i < filterConfig.hashtags.length; i += 1) {
        array = array.concat(tweets
          .filter((tweets) => tweets.text
            .toLowerCase().indexOf(filterConfig.hashtags[i].toLowerCase()) !== -1));
      }
    }
    return array
      .filter((array) => array.author
        .toLowerCase().indexOf(filterConfig.author.toLowerCase()) !== -1)
      .filter(({ createdAt }) => !((filterConfig.dateFrom && filterConfig.dateFrom > createdAt)
      || (filterConfig.dateTo && filterConfig.dateTo < createdAt)))
      .filter((array) => array.text.toLowerCase().indexOf(filterConfig.text.toLowerCase()) !== -1)
      .sort((a, b) => b.createdAt - a.createdAt)
      .slice(skip, skip + top);
  }

  get(id) {
    return tweets.find((tweet) => tweet.id === String(id));
  }

  add(text) {
    const tweet = new Tweet('5', text, new Date(), this._user, []);
    if (Tweet.validate(tweet) && tweet.author === tweetCollection._user) {
      this._tws.add(tweet);
      return true;
    }
    return false;
  }

  edit(id, text) {
    const clone = tweets[id - 1];
    clone.text = text;
    if (this.get(id).id === String(id) && Tweet.validate(clone) && clone.author === this._user) {
      this._tws[id - 1] = clone;
      return true;
    }
    return false;
  }

  remove(id) {
    if (this.get(id).id === String(id) && tweets[id - 1].author === this._user) {
      this._tws.delete(tweets[id - 1]);
      return true;
    }
    return false;
  }

  addComment(id, text) {
    const comment = new Comment(id, text, new Date(), this._author);
    if (this.get(id).id === String(id) && Comment.validate(comment)) {
      tweets[id - 1].comments.push(comment);
      return true;
    }
    return false;
  }

  addAll(tws) {
    const noValidArr = [];
    const validArr = [];
    for (let i = 0; i < tws.length; i += 1) {
      if (!Tweet.validate(tws[i])) {
        noValidArr.push(tws[i]);
      }
      validArr.push(tws[i]);
    }
    this._tws = new Set(validArr);
    return noValidArr;
    // валидаия, вернуть массив не прошедший проверку
  }

  clear() {
    this._tws.clear();
  }
}

// const tweetCollection = new TweetCollection();
// console.log(tweetCollection);
// tweetCollection.addAll(tweets);
// console.log(tweetCollection.getPage(0, 10));
// console.log(tweetCollection.getPage(0, 10, { hashtags: ['#datamola'] }));
// console.log(tweetCollection.get(20));
// console.log(tweetCollection.add('hello'), tweetCollection);
// console.log(tweetCollection.edit(4, 'text'), tweetCollection);
// console.log(tweetCollection.remove(1), tweetCollection);
// console.log(tweetCollection.addComment(5, 'hello'), tweetCollection);
// tweetCollection.clear();
