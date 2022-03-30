/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-classes-per-file */
/* eslint-disable import/newline-after-import */
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
  constructor(text, id = String(Math.ceil((Math.random(new Date())) * 1000)), createdAt = new Date(), author = tweetCollection._user, comments = []) {
    this._id = id
    this.text = text;
    this._createdAt = createdAt;
    this._author = author;
    this.comments = comments;
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

  static maxTextLength = 280;

  static validate(tw) {
    if (typeof tw.id === 'string' && tw.text.length <= Tweet.maxTextLength
    && typeof tw.text === 'string' && toString.call(tw.createdAt) === '[object Date]'
    && typeof tw.author === 'string' && tw.comments instanceof Array) {
      return true;
    }
    return false;
  }
}

class Comment {
  constructor(text, id = String(Math.ceil((Math.random(new Date())) * 1000)), createdAt = new Date(), author = tweetCollection._user) {
    this._id = id;
    this.text = text;
    this._createdAt = createdAt;
    this._author = author;
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

  static maxTextLength = 280;

  static validate(com) {
    if (typeof com.id === 'string' && com.text.length <= Comment.maxTextLength
    && typeof com.text === 'string' && toString.call(com.createdAt) === '[object Date]'
    && typeof com.author === 'string') {
      return true;
    }
    return false;
  }
}

class TweetCollection {
  constructor(tws) {
    this._tws = new Set(tws);
    this._user = 'Гость';
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
      array = Array.from(this._tws);
    } else {
      for (let i = 0; i < filterConfig.hashtags.length; i += 1) {
        let twsArray = Array.from(this._tws);
        array = array.concat(twsArray
          .filter((twsArray) => twsArray.text
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
    for (let value of this._tws) {
      if (value.id === String(id)) {
        return value;
      }
      continue;
    }
    return false;
  }

  add(text) {
    if (this._user !== 'Гость') {
      const tweet = new Tweet(text);
      if (Tweet.validate(tweet) && tweet.author === tweetCollection._user) {
        this._tws.add(tweet);
        return true;
      }
    }
    return false;
  }

  edit(id, text) {
    const clone = this.get(id);
    if (text.length <= Tweet.maxTextLength
      && typeof text === 'string' && clone.id === String(id) 
      && Tweet.validate(clone) && clone.author === this._user) {
        clone.text = text;
        return true;
    }
    return false;
  }

  remove(id) {
    const deleteTweet = this.get(id);
    if (deleteTweet.id === String(id) && deleteTweet.author === this._user) {
      this._tws.delete(deleteTweet);
      return true;
    }
    return false;
  }

  addComment(id, text) {
    if (this._user !== 'Гость') {
      const comment = new Comment(text);
      if (this.get(id).id === String(id) && Comment.validate(comment)) {
        this.get(id).comments.push(comment);
        return true;
      }
    }
    return false;
  }

  addAll(tws) {
    const noValidArr = [];
    for (let i = 0; i < tws.length; i += 1) {
      if (!Tweet.validate(tws[i])) {
        noValidArr.push(tws[i]);
      }
      this._tws.add(tws[i]);
    }
    return noValidArr;
  }

  clear() {
    this._tws.clear();
  }
}

class HeaderView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(user) {
    const userName = document.getElementById(this.containerId);
    userName.textContent = user;
  }
}

class TweetFeedView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(tweets) {
    const tweetFeed = document.getElementById(this.containerId);
    const array = Array.from(tweets);
    array.sort((a, b) => b.createdAt - a.createdAt).forEach((item) => {
      const msg = document.createElement('div');
      msg.setAttribute('class', 'child');
      if(item.comments !== undefined && item.comments.length > 0) {
        msg.innerHTML = `<div class="title"><h2>${item.author} <h4 style="margin-top: 0.25rem;">${formatDate(item.createdAt)}</h4></h2></div> 
        <div class="text">${item.text}</div><div class="comments">${item.comments.length}</div>`;
      tweetFeed.appendChild(msg);
      } else {
        msg.innerHTML = `<div class="title"><h2>${item.author} <h4 style="margin-top: 0.25rem;">${formatDate(item.createdAt)}</h4></h2></div> 
        <div class="text">${item.text}</div>`;
        tweetFeed.appendChild(msg);
      }
    });
  }

  clear() {
    const child = document.querySelectorAll('.child');
    child.forEach((item) => item.remove());
  }
}

class FilterView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(author = '', date = '', text = '', hashtags = []) {
    const filters = document.getElementById(this.containerId);
    const authorInput = document.createElement('input');
    authorInput.setAttribute('class', 'filter-author');
    const dateData = document.createElement('input');
    dateData.setAttribute('type', 'date');
    dateData.setAttribute('class', 'filter-date');
    const textInput = document.createElement('input');
    textInput.setAttribute('class', 'filter-text');
    const hashtagsInput = document.createElement('input');
    hashtagsInput.setAttribute('class', 'filter-hashtag');
    authorInput.value = author;
    textInput.value = text;
    dateData.value = date;
    hashtagsInput.value = hashtags.join(' ');
    filters.appendChild(authorInput);
    filters.appendChild(dateData);
    filters.appendChild(textInput);
    filters.appendChild(hashtagsInput);
    }
}

class TweetView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(tweet) {
    const msg = document.getElementById(this.containerId);
    msg.setAttribute('class', 'tweet');
    msg.innerHTML = `<div class="title"><h2>${tweet.author} <h4 style="margin-top: 0.25rem;">${formatDate(tweet.createdAt)}</h4></h2></div>
    <div class="text">${tweet.text}</div>`;
  }
}

class CommentView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(comment) {
    const commentFeed = document.getElementById(this.containerId);
    comment.sort((a, b) => b.createdAt - a.createdAt).forEach((item) => {
      const msgCom = document.createElement('div');
      msgCom.setAttribute('class', 'comment');
      msgCom.innerHTML = `<div class="title"><h2>${item.author} <h4 style="margin-top: 0.25rem;">${formatDate(item.createdAt)}</h4></h2></div> 
      <div class="text">${item.text}</div>`;
      commentFeed.appendChild(msgCom);
    });
  }
}

// const headerView = new HeaderView('header-id');
// headerView.display('Алеся Брановицкая');

// const tweetFeedView = new TweetFeedView('tweet-feed-id');
// tweetFeedView.display(tweetCollection);

// const filterView = new FilterView('filters-id');
// filterView.display('Анджелина','2002-02-22', 'sum', ['#datamola','gg']);

// const tweetView = new TweetView('tweet-id');
// tweetView.display({
// id: '1',
// text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.
// Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,
// when an unknown printer took a galley of type #make #intro #datamola',
// createdAt: new Date('2022-02-16T03:30:00'),
// author: 'Алеся Брановицкая',
// comments: []})

function setCurrentUser(user) {
  headerView.display(user);
  tweetCollection.user = user;
}
function addTweet(text) {
  tweetCollection.add(text);
  tweetFeedView.clear();
  tweetFeedView.display(tweetCollection._tws);
}
function editTweet(id, text) {
  tweetFeedView.clear();
  tweetCollection.edit(id, text);
  tweetFeedView.display(tweetCollection._tws);
}
function removeTweet(id) {
  tweetCollection.remove(id);
  tweetFeedView.clear();
  tweetFeedView.display(tweetCollection._tws);
}
function getFeed(skip, top, filterConfig) {
  tweetFeedView.clear();
  const filter = tweetCollection.getPage(skip, top, filterConfig);
  tweetFeedView.display(filter);
}
function showTweet(id){
  const addTwit = document.querySelector('.right-block__add-twit');
  addTwit.remove();
  const chat = document.querySelector('.right-block__chat');
  chat.remove();
  const newTweet = tweetCollection.get(id);
  tweetView.display(newTweet);
  commentView.display(newTweet.comments);
}
function formatDate(date){
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  let tt = date.getHours();
  if (tt < 10) tt = '0' + tt;

  let m = date.getMinutes();
  if (m < 10) m = '0' + m;

  return dd + '.' + mm + '.' + yy + ' ' + tt + '.' + m;
}

// const tweetCollection = new TweetCollection(tweets);
// const headerView = new HeaderView('header-id');
// const tweetFeedView = new TweetFeedView('tweet-feed-id');
// const tweetView = new TweetView('tweet-id');
// const commentView = new CommentView('comment-id');
// setCurrentUser('Алеся Брановицкая');
// addTweet('text');
// editTweet(4, 'text FOO');
// removeTweet(1);
// getFeed(0, 4);
// getFeed(0, 10, { hashtags: ['#datamola'] });
// showTweet(10);

document.querySelector('.left-block__filters__btn-clear').addEventListener('click', () => {
  document.querySelector('.filter-author').value = '';
  document.querySelector('.filter-date').value = '';
  document.querySelector('.filter-text').value = '';
  document.querySelector('.filter-hashtag').value = '';
});


// const tweetCollection = new TweetCollection(tweets);
// const headerView = new HeaderView('header-id');
// const tweetFeedView = new TweetFeedView('tweet-feed-id');
// const tweetView = new TweetView('tweet-id');
// const commentView = new CommentView('comment-id');
// setCurrentUser('Алеся Брановицкая');
// getFeed();
