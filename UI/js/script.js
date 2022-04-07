/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-classes-per-file */
/* eslint-disable import/newline-after-import */
'use strict';

const loadTweets = document.querySelector('#right-block__chat__btn');
const btnLog = document.querySelector('.left-block__btn');
const tweets = [
  {
    id: '1',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span> <span class="hashtag">#datamola</span>',
    createdAt: new Date('2022-02-16T03:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      {
        id: '901',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-02-17T05:30:00'),
        author: 'Анджелина Джоли',
      },
      {
        id: '902',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-02-18T15:30:00'),
        author: 'Анджелина Джоли',
      },
      {
        id: '903',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-02-19T19:30:00'),
        author: 'Анджелина Джоли',
      }],
  },
  {
    id: '2',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#datamola</span>',
    createdAt: new Date('2022-02-21T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [
      {
        id: '904',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-02-22T17:30:00'),
        author: 'Алеся Брановицкая',
      }],
  },
  {
    id: '3',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-02-24T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: '4',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-02-25T03:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      {
        id: '905',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-02-27T05:30:00'),
        author: 'Анджелина Джоли',
      },
      {
        id: '906',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-02-28T15:30:00'),
        author: 'Анджелина Джоли',
      }],
  },
  {
    id: '5',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-03-01T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: '6',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-03-02T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: '7',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-03-03T03:30:00'),
    author: 'Алеся Брановицкая',
    comments: [],
  },
  {
    id: '8',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-03-04T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [
      {
        id: '907',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-03-05T05:30:00'),
        author: 'Алеся Брановицкая',
      },
      {
        id: '908',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-03-06T15:30:00'),
        author: 'Алеся Брановицкая',
      }],
  },
  {
    id: '9',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-03-07T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: '10',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-03-08T03:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      {
        id: '909',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-03-09T05:30:00'),
        author: 'Анджелина Джоли',
      },
      {
        id: '910',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-03-09T18:30:00'),
        author: 'Анджелина Джоли',
      }],
  },
  {
    id: '11',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-03-09T23:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      {
        id: '911',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-03-10T05:30:00'),
        author: 'Анджелина Джоли',
      },
      {
        id: '912',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-03-10T15:30:00'),
        author: 'Анджелина Джоли',
      },
      {
        id: '913',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-03-10T19:30:00'),
        author: 'Анджелина Джоли',
      }],
  },
  {
    id: '12',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-03-10T21:30:00'),
    author: 'Анджелина Джоли',
    comments: [
      {
        id: '914',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-03-10T22:30:00'),
        author: 'Алеся Брановицкая',
      }],
  },
  {
    id: '13',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-03-10T23:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: '14',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-03-11T03:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      {
        id: '915',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-03-11T05:30:00'),
        author: 'Анджелина Джоли',
      },
      {
        id: '916',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-03-11T08:30:00'),
        author: 'Анджелина Джоли',
      }],
  },
  {
    id: '15',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-03-11T11:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: '16',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-03-11T13:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: '17',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-03-11T14:30:00'),
    author: 'Алеся Брановицкая',
    comments: [],
  },
  {
    id: '18',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-03-12T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [
      {
        id: '917',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-03-12T05:30:00'),
        author: 'Алеся Брановицкая',
      },
      {
        id: '918',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-03-12T09:30:00'),
        author: 'Алеся Брановицкая',
      }],
  },
  {
    id: '19',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-03-12T12:30:00'),
    author: 'Анджелина Джоли',
    comments: [],
  },
  {
    id: '20',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
    createdAt: new Date('2022-03-13T09:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      {
        id: '919',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-03-13T12:30:00'),
        author: 'Анджелина Джоли',
      },
      {
        id: '920',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
        createdAt: new Date('2022-03-13T18:30:00'),
        author: 'Анджелина Джоли',
      }],
  },
];

class Tweet {
  constructor(text, id = String(Math.ceil((Math.random(new Date())) * 1000)), createdAt = new Date(), author = tweetCollection._user, comments = []) {
    this.id = id
    this.text = text;
    this.createdAt = createdAt;
    this.author = author;
    this.comments = comments;
  }

  // get id() {
  //   return this._id;
  // }

  // set id(id) {
  //   console.log('can\'t change', id);
  // }

  // get createdAt() {
  //   return this._createdAt;
  // }

  // set createdAt(createdAt) {
  //   console.log('can\'t change', createdAt);
  // }

  // get author() {
  //   return this.author;
  // }

  // set author(author) {
  //   console.log('can\'t change', author);
  // }

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
    this.id = id;
    this.text = text;
    this.createdAt = createdAt;
    this.author = author;
  }

  // get id() {
  //   return this._id;
  // }

  // set id(id) {
  //   console.log('can\'t change', id);
  // }

  // get createdAt() {
  //   return this._createdAt;
  // }

  // set createdAt(createdAt) {
  //   console.log('can\'t change', createdAt);
  // }

  // get author() {
  //   return this.author;
  // }

  // set author(author) {
  //   console.log('can\'t change', author);
  // }

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
  constructor() {
    // this._tws = new Set(tws);
    this._user = 'Гость';
    this.restore();
  }

  get user() {
    return this._user;
  }

  set user(user) {
    this._user = user;
  }

  save() {
    //localStorage.setItem('tws', JSON.stringify(this._tws));
    localStorage.setItem('tws', JSON.stringify(Array.from(this._tws)));
  }

  restore() {
    this._tws = new Set(JSON.parse(localStorage.getItem('tws')));
    this._tws.forEach((item) => {
      item.createdAt = new Date(item.createdAt);
      item.comments.forEach((item) => {
        item.createdAt = new Date(item.createdAt);
      })
    });
  }


  getPage(skip = 0, top = 10, filterConfig = {}) {
    let array = [];
    filterConfig.author = filterConfig.author ? filterConfig.author : '';
    filterConfig.dateFrom = filterConfig.dateFrom ? filterConfig.dateFrom : null;
    filterConfig.dateTo = filterConfig.dateTo ? filterConfig.dateTo : null;
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
        this.save();
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
        this.save();
        return true;
    }
    return false;
  }

  remove(id) {
    const deleteTweet = this.get(id);
    if (deleteTweet.id === String(id) && deleteTweet.author === this._user) {
      this._tws.delete(deleteTweet);
      this.save();
      return true;
    }
    return false;
  }

  addComment(id, text) {
    if (this._user !== 'Гость') {
      const comment = new Comment(text);
      if (this.get(id).id === String(id) && Comment.validate(comment)) {
        this.get(id).comments.push(comment);
        this.save();
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
      this.save();
    }
    return noValidArr;
  }

  clear() {
    this._tws.clear();
    this.save();
  }
}

class HeaderView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(user) {
    const userName = document.getElementById(this.containerId);
    const img = document.querySelector('.avatar');
    img.classList.toggle('avatar-img')
    if(localStorage.getItem(currentUser) === 'Гость') {
      img.setAttribute('class', 'avatar')
      button.innerHTML = `<h5>Версия 1.0</h5>`;
    }
    userName.textContent = user;
  }
}

class TweetFeedView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(tweets) {
    const addTweet = document.getElementById('add-tweet');
    addTweet.setAttribute('class', 'right-block__add-twit');
    addTweet.innerHTML = `<img src="assets/img/avatar_mini.png" alt="avatar">
                          <textarea cols="185" rows="5" maxlength="280" style="width: 100%;"
                          placeholder="О чем бы вы хотели рассказать?" class="right-block__add-twit-block"></textarea>
                          <textarea cols="185" rows="5" maxlength="280" style="width: 100%;" placeholder="Расскажите?"
                          class="right-block__add-twit-none"></textarea>
                          <button class="right-block__add-twit__btn"></button>`;
    const btn = document.querySelector('#right-block__chat__btn');
    btn.setAttribute('class', 'right-block__chat__btn');
    const tweetFeed = document.getElementById(this.containerId);
    tweetFeed.setAttribute('class', 'right-block__scroll-twit');
    const array = Array.from(tweets);
    array.sort((a, b) => b.createdAt - a.createdAt).forEach((item) => {
      const msg = document.createElement('div');
      if(item.comments !== undefined && item.comments.length > 0) {
        if(item.author === 'Анджелина Джоли'){
          msg.setAttribute('id', 'main-class');
          msg.setAttribute('class', 'jlo');
          msg.innerHTML = `<div class="id" style="font-size:0;">${item.id}</div><div class="title"><div><h2>${item.author}<h4 style="margin-top: 0.25rem;">${tweetsController.formatDate(item.createdAt)}</h4></h2></div><div id="svgs-jlo">
          <img src="assets/img/edit.svg" alt="edit" class="right-block__twit_edit">
          <img src="assets/img/delete.svg" alt="delete" class="right-block__twit_delete"></div></div><div class="text">${item.text}</div><div class="comments">${item.comments.length}</div>`;
          tweetFeed.appendChild(msg);
        } else {
          msg.setAttribute('id', 'main-class');
          msg.setAttribute('class', 'child');
          msg.innerHTML = `<div class="id" style="font-size:0;">${item.id}</div><div class="title"><div><h2>${item.author}<h4 style="margin-top: 0.25rem;">${tweetsController.formatDate(item.createdAt)}</h4></h2></div><div id="svgs">
          <img src="assets/img/edit.svg" alt="edit" class="right-block__twit_edit">
          <img src="assets/img/delete.svg" alt="delete" class="right-block__twit_delete"></div></div><div class="text">${item.text}</div><div class="comments">${item.comments.length}</div>`;
          tweetFeed.appendChild(msg);
        }
      } else {
        if(item.author === 'Анджелина Джоли'){
          msg.setAttribute('id', 'main-class');
          msg.setAttribute('class', 'jlo');
          msg.innerHTML = `<div class="id" style="font-size:0;">${item.id}</div><div class="title"><div><h2>${item.author} <h4 style="margin-top: 0.25rem;">${tweetsController.formatDate(item.createdAt)}</h4></h2></div><div id="svgs-jlo">
          <img src="assets/img/edit.svg" alt="edit" class="right-block__twit_edit">
          <img src="assets/img/delete.svg" alt="delete" class="right-block__twit_delete"></div></div><div class="text">${item.text}</div><div class="comments">${item.comments.length}</div>`;
          tweetFeed.appendChild(msg);
        } else {
          msg.setAttribute('id', 'main-class');
          msg.setAttribute('class', 'child');
          msg.innerHTML = `<div class="id" style="font-size:0;">${item.id}</div><div class="title"><div><h2>${item.author} <h4 style="margin-top: 0.25rem;">${tweetsController.formatDate(item.createdAt)}</h4></h2></div><div id="svgs">
          <img src="assets/img/edit.svg" alt="edit" class="right-block__twit_edit">
          <img src="assets/img/delete.svg" alt="delete" class="right-block__twit_delete"></div></div><div class="text">${item.text}</div><div class="comments">${item.comments.length}</div>`;
          tweetFeed.appendChild(msg);
        }
      }
    });
  }

  clear() {
    const child = document.querySelectorAll('.child');
    const jlo = document.querySelectorAll('.jlo');
    child.forEach((item) => item.remove());
    jlo.forEach((item) => item.remove());
  }
}

class FilterView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  static authorFil = document.createElement('input');
  static dateFFil = document.createElement('input');
  static dateTFil = document.createElement('input');
  static textFil = document.createElement('input');
  static hashtagsFil = document.createElement('input');

  display(author = '', dateF = '', dateT = '', text = '', hashtags = []) {
    const blockFilters = document.querySelector('.left-block__filters');
    blockFilters.innerHTML = `<h3>Фильтры</h3>
                              <div id="filters-id" class="left-block__filters"></div>
                              <div class="left-block__filters__btn">
                                <button class="left-block__filters__btn-clear">Сбросить</button>
                                <button class="left-block__filters__btn-apply">Применить</button>
                              </div>`;
    tweetsController.clearFilters();
    tweetsController.loaderFilters();
    const filters = document.getElementById(this.containerId);
    const authorV = FilterView.authorFil;
    const dateFV = FilterView.dateFFil;
    const dateTV = FilterView.dateTFil;
    const textV = FilterView.textFil;
    const hashtagsV = FilterView.hashtagsFil;
    if (authorV) {
      const authorInput = authorV;
      authorInput.setAttribute('class', 'filter-author');
      authorInput.setAttribute('placeholder', 'Имя автора');
      const dateFData = dateFV;
      dateFData.setAttribute('type', 'date');
      dateFData.setAttribute('class', 'filter-date-from');
      const dateTData = dateTV;
      dateTData.setAttribute('type', 'date');
      dateTData.setAttribute('class', 'filter-date-to');
      const textInput = textV;
      textInput.setAttribute('class', 'filter-text');
      textInput.setAttribute('placeholder', 'Текст');
      const hashtagsInput = hashtagsV;
      hashtagsInput.setAttribute('class', 'filter-hashtag');
      hashtagsInput.setAttribute('placeholder', 'Хештеги');
      authorInput.value = author;
      textInput.value = text;
      dateFData.value = dateF;
      dateTData.value = dateT;
      hashtagsInput.value = hashtags.join(' ');
      filters.append(authorInput);
      filters.append(dateFData);
      filters.append(dateTData);
      filters.append(textInput);
      filters.append(hashtagsInput);
    }
    else {
      authorInput.value = author;
      textInput.value = text;
      dateData.value = date;
      hashtagsInput.value = hashtags.join(' ');
    }
  }
}

class TweetView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(tweet) {
    const msg = document.getElementById(this.containerId);
    if(tweet.author === 'Анджелина Джоли'){
      msg.setAttribute('class', 'tweet-jlo');
      msg.innerHTML = `<div class="id" style="font-size:0;">${tweet.id}</div><div class="title"><div><h2>${tweet.author}<h4 style="margin-top: 0.25rem;">${tweetsController.formatDate(tweet.createdAt)}</h4></h2></div><div class="block-edit"><img src="assets/img/edit.svg" alt="edit" class="right-block__twit_edit">
      <img src="assets/img/delete.svg" alt="delete" class="right-block__twit_delete"></div></div>
      <div class="text">${tweet.text}</div>`;
    } else {
      msg.setAttribute('class', 'tweet');
      msg.innerHTML = `<div class="tweet-main"><div class="id" style="font-size:0;">${tweet.id}</div><div class="title"><div><h2>${tweet.author} <h4 style="margin-top: 0.25rem;">${tweetsController.formatDate(tweet.createdAt)}</h4></h2></div><div class="block-edit"><img src="assets/img/edit.svg" alt="edit" class="right-block__twit_edit">
      <img src="assets/img/delete.svg" alt="delete" class="right-block__twit_delete"></div></div>
      <div class="text">${tweet.text}</div>`;
      }
  }
}

class CommentView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(comment) {
    const commentFeed = document.getElementById(this.containerId);
    commentFeed.setAttribute('class', 'commentsV');
    comment.forEach((item) => {
      if(item.author === 'Анджелина Джоли'){
        const msgCom = document.createElement('div');
        msgCom.setAttribute('class', 'comment-jlo');
        msgCom.innerHTML = `<div class="title"><h2>${item.author} <h4 style="margin-top: 0.25rem;">${tweetsController.formatDate(item.createdAt)}</h4></h2></div> 
        <div class="text">${item.text}</div>`;
        commentFeed.appendChild(msgCom);
      } else {
        const msgCom = document.createElement('div');
        msgCom.setAttribute('class', 'comment');
        msgCom.innerHTML = `<div class="title"><h2>${item.author} <h4 style="margin-top: 0.25rem;">${tweetsController.formatDate(item.createdAt)}</h4></h2></div> 
        <div class="text">${item.text}</div>`;
        commentFeed.appendChild(msgCom);
      }
    });
  }

  clear() {
    const child = document.querySelectorAll('.comment');
    const jlo = document.querySelectorAll('.comment-jlo');
    child.forEach((item) => item.remove());
    jlo.forEach((item) => item.remove());
  }
}

class User {
  constructor(user) {
    this.user = user;
  }
}
class UserList {
  constructor() {
    // this.users = JSON.parse(local.getItem('userList'));['Алеся Брановицкая', 'Анджелина Джоли'];
    this.restore();
  }

  addUser(user) {
    this.users.push(user);
    this.save();
  }

  save() {
    localStorage.setItem('userList', JSON.stringify(this.users));
  }

  restore() {
    this.users = JSON.parse(localStorage.getItem('userList'));
  }
}

class TweetsController {
  constructor() {
    this.tweet = new Tweet();
    this.comment = new Comment();
    this.tweetCollection = new TweetCollection(tweetCollection._tws);
    this.headerView = new HeaderView('header-id');
    this.tweetFeedView = new TweetFeedView('tweet-feed-id');
    this.filterView = new FilterView('filters-id');
    this.tweetView = new TweetView('tweet-id');
    this.commentView = new CommentView('comment-id');
  }

  setCurrentUser(user) {
    this.headerView.display(user);
    tweetCollection.user = user;
  }

  addTweet(text) {
    tweetCollection.add(text);
    tweetFeedView.clear();
    tweetFeedView.display(tweetCollection._tws);
  }

  editTweet(id, text) {
    tweetCollection.edit(id, text);
    tweetFeedView.clear();
    tweetFeedView.display(tweetCollection._tws);
  }

  removeTweet(id) {
    tweetCollection.remove(id);
    tweetFeedView.clear();
    tweetFeedView.display(tweetCollection._tws);
    this.tweetCollection.remove(id);
    this.tweetFeedView.clear();
    this.tweetFeedView.display(tweetCollection._tws);
  }

  getFeed(skip, top, filterConfig) {
    const tweetView = document.querySelector('#tweet-id');
    tweetView.setAttribute('class', 'disappear');
    const commentView = document.querySelector('#comment-id');
    tweetView.setAttribute('class', 'disappear');
    commentView.setAttribute('class', 'disappear');
    const addComment = document.getElementById('add-comment');
    addComment.setAttribute('class', 'disappear');
    // tweetFeedView.clear();
    const filter = tweetCollection.getPage(skip, top, filterConfig);
    tweetFeedView.display(filter);
    return filter;
  }

  showTweet(id) {
    const addTweet = document.querySelector('#add-tweet');
    addTweet.setAttribute('class', 'disappear');
    const chat = document.querySelector('.right-block__scroll-twit');
    chat.setAttribute('class', 'disappear');
    const btn = document.querySelector('.right-block__chat__btn');
    btn.setAttribute('class', 'disappear');
    const newTweet = tweetCollection.get(id);
    tweetView.display(newTweet);
    commentView.display(newTweet.comments);
    const addComment = document.getElementById('add-comment');
    addComment.setAttribute('class', 'right-block__add-comment');
    addComment.innerHTML = `<img src="assets/img/avatar_25.png" alt="avatar">
                            <textarea cols="155" rows="1" maxlength="280" style="width: 100%;" placeholder="Написать комментарий"
                            class="right-block__add-comment__block"></textarea>
                            <button class="right-block__add-comment__btn"></button>`;
  }

  formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = `0${dd}`;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = `0${mm}`;
    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = `0${yy}`;
    let tt = date.getHours();
    if (tt < 10) tt = `0${tt}`;
    let m = date.getMinutes();
    if (m < 10) m = `0${m}`;
    return `${dd}.${mm}.${yy} ${tt}.${m}`;
  }

  loaderFilters() {
    document.querySelector('.left-block__filters__btn-apply').addEventListener('click', () => {
      const author = document.querySelector('.filter-author').value;
      const dateFrom = document.querySelector('.filter-date-from').value;
      const dateTo = document.querySelector('.filter-date-to').value;
      const text  = document.querySelector('.filter-text').value;
      const hashtags = document.querySelector('.filter-hashtag').value;
      const filterConfig = {};
      filterConfig.author = author;
      filterConfig.dateFrom = dateFrom;
      filterConfig.dateTo = dateTo;
      filterConfig.text = text;
      let re = /\s* \s*/;
      filterConfig.hashtags = hashtags.split(re);
      tweetFeedView.clear()
      const filter = tweetCollection.getPage(0, 10, filterConfig);
      if (filter.length === 0) {
        // alert('По вашему запросу ничего не найдено. Измените условия поиска');
        const rightBlock = document.querySelector('.right-block__chat');
        const newBlock =  document.createElement('div');
        newBlock.setAttribute('class', 'new-block');
        newBlock.innerHTML = `<div>
        <p>По вашему запросу ничего не найдено. Измените условия поиска</p>
        <button class="btn-main">Назад</button>
        </div>`;
        rightBlock.prepend(newBlock);
        const btnMain = document.querySelector('.btn-main');
        btnMain.addEventListener('click', () => document.location.href = './index.html')
      } else {
        tweetFeedView.display(filter);
      }
    });
  }

  clearFilters() {
    document.querySelector('.left-block__filters__btn-clear').addEventListener('click', () => {
      document.querySelector('.filter-author').value = '';
      document.querySelector('.filter-date-from').value = '';
      document.querySelector('.filter-date-to').value = '';
      document.querySelector('.filter-text').value = '';
      document.querySelector('.filter-hashtag').value = '';
    });
  }

  addNewTweet() {
    const btnAddTweet = document.querySelector('.right-block__add-twit');
    btnAddTweet.addEventListener('click', (event) => {
      if(event.target.classList.contains('right-block__add-twit__btn')) {
        let textArea = document.querySelector('.right-block__add-twit-block'); 
        let text = textArea.value;
        let highlighted = text.replace(/(#\w+)/g, '<span class="hashtag">$1</span>');
        this.innerHTML = highlighted;
        tweetsController.addTweet(highlighted);
        textArea.value = '';
      } 
    })
  }

  addComment() {
    const btnAddComment = document.querySelector('.right-block__add-comment');
    btnAddComment.addEventListener('click', (event) => {
      if(event.target.classList.contains('right-block__add-comment__btn')) {
      let textArea = document.querySelector('.right-block__add-comment__block'); 
      const text = textArea.value;
      const id = document.querySelector('.id').textContent;
      tweetsController.tweetCollection.addComment(id, text);
      tweetsController.commentView.clear();
      const tweet = tweetsController.tweetCollection.get(id);
      tweetsController.commentView.display(tweet.comments);
      textArea.value = '';
      }
    });
  }
  // loadFilters() {
  //   document.querySelector('.left-block__filters__btn-clear').addEventListener('click', () => {
  //     const author = document.querySelector('.filter-author').value;
  //     const date = document.querySelector('.filter-date').value;
  //     const text  = document.querySelector('.filter-text').value;
  //     const hashtags = (document.querySelector('.filter-hashtag').value).split(',');
  //     filterConfig = filterConfig.push(hashtags).push(text).push(date).push(author)
  //     tweetsController.getFeed(skip = 0, top = 10, filterConfig = {})
  //   });
  // }

  // update() {
  //   this.tweetCollection = tweetCollection._tws;
  //   const tweets = Array.from(this.tweetCollection);
  //   localStorage.setItem('tws', JSON.stringify(this.tweetCollection));
  // }

  registration(user) {
    const userList = new UserList();
    userList.addUser(user);
  }

  login(user) {
    this.tweetCollection.user = user;
  }

  //и другие функции 
}

//BTNs
loadTweets.addEventListener('click', loaderTweets);

function check(){
  console.log(JSON.parse(localStorage.getItem('tws')).length)
  const mainBlock = document.querySelectorAll('#main-class');
  if(mainBlock.length === JSON.parse(localStorage.getItem('tws')).length) {
    loadTweets.setAttribute('disabled', true);
    loadTweets.setAttribute('style', 'color: grey; box-shadow: none;cursor-pointer: none;');
  }
}

function loaderTweets() {
  check()
  const tweetsController = new TweetsController();
  const mainBlock = document.querySelectorAll('#main-class');
  tweetsController.getFeed(mainBlock.length,10);
  // if (tweetsController.getFeed(mainBlock.length,10).length === 0) {
  //     loadTweets.setAttribute('disabled', true);
  //   }
  // deleteBtn();
  if(currentUser === 'Гость') {
    const addTweet = document.getElementById('add-tweet');
    const addComment = document.getElementById('comment-id');
    addComment.setAttribute('class', 'disappear');
    addTweet.setAttribute('class', 'disappear');
  }
  // redirectTweet();
}

btnLog.addEventListener('click', loaderPages);

function loaderPages(event) {
  if(event.target === document.querySelector('.header__btn-main')) {
    document.location.href = './login.html';
  } else {
    document.location.href = './logup.html';
  }
}

const tweetCollection = new TweetCollection();
const tweetView = new TweetView('tweet-id');
const commentView = new CommentView('comment-id');
const tweetFeedView = new TweetFeedView('tweet-feed-id');

//LOCAL STORAGE
function createLocalStorage() {
  const realUsers = ['Алеся Брановицкая', 'Анджелина Джоли'];
  if(localStorage.getItem('userList') === null && localStorage.getItem('tws') === null && localStorage.getItem('currentUser') === null){
    localStorage.setItem('currentUser', JSON.stringify('Гость'));
    localStorage.setItem('userList', JSON.stringify(realUsers));
    localStorage.setItem('tws', JSON.stringify(tweets));
  }
}

createLocalStorage();
const tweetsController = new TweetsController();
const filter = tweetCollection.getPage();
tweetsController.tweetFeedView.display(filter);
tweetsController.filterView.display();
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
tweetsController.setCurrentUser(currentUser);
tweetsController.login(currentUser);
if (currentUser !== 'Гость') {
  // const userList = new UserList();
  // userList.addUser(currentUser);
  const button = document.querySelector('.left-block__footer');
    button.setAttribute('id', 'logout-btn')
    button.innerHTML = `<button class="left-block__footer__btn">
                          Выйти
                        </button>
                        <h5>Версия 1.0</h5>`;
    button.addEventListener('click', () => {
      document.location.href = './index.html';
      localStorage.setItem('currentUser', JSON.stringify('Гость'));
      logGuest();
    })
  // deleteBtn();
  tweetsController.addNewTweet();
  // const btnS = document.querySelector('.left-block__btn');
  //btnS.setAttribute('class', 'disappear');
  // const img = document.querySelector('.avatar');
  // img.setAttribute('class', 'avatar-img');
} else {
  logGuest();
}
  // redirectTweet();

  function deleteBtn() {
    tweetCollection._tws.forEach((item) => {
      if (item.author !== currentUser) {
        const edit = document.querySelectorAll('#svgs');
        const del = document.querySelectorAll('#svgs-jlo');
        edit.forEach((item) => item.setAttribute('class', 'disappear'));
        del.forEach((item) => item.setAttribute('class', 'disappear'));
      }
    })
  } 

  function deleteBtnTweet() {
    tweetCollection._tws.forEach((item) => {
      if (item.author !== currentUser) {
        const edit = document.querySelectorAll('.block-edit');
        edit.forEach((item) => item.setAttribute('class', 'disappear'));
      }
    })
  } 

// function redirectTweet() {
  document.querySelectorAll('#main-class').forEach((item) => item.addEventListener('click', (event) => {
    // document.location.href = './index.html';
    //а сюда подргузить уже showTweet(id);
    const id = item.firstChild.textContent;
    if(!event.target.classList.contains('right-block__twit_edit') && !event.target.classList.contains('right-block__twit_delete')) {
      tweetsController.showTweet(id);
      if (currentUser === 'Гость') {
        const addComment = document.querySelector('#add-comment');
        addComment.setAttribute('class', 'disappear');
        const edit = document.querySelector('.right-block__twit_edit');
        const del = document.querySelector('.right-block__twit_delete');
        edit.setAttribute('class', 'disappear');
        del.setAttribute('class', 'disappear');
      } else {
        // tweetsController.addNewTweet();
        // deleteBtnTweet()
        tweetsController.addComment();
        const btnS = document.querySelector('.left-block__btn');
        btnS.innerHTML = `<button class="tweet__btn-main header__btn">
                            Главная
                          </button>`;
        btnS.addEventListener('click', () => {
          document.location.href = './index.html';
        })
      }
    } else if (event.target.classList.contains('right-block__twit_edit')) {
      const textArea = document.querySelector('.right-block__add-twit-block');
      textArea.setAttribute('class', 'disappear');
      const textBtn = document.querySelector('.right-block__add-twit__btn');
      textBtn.setAttribute('class', 'disappear');
      const addTweet = document.querySelector('.right-block__add-twit');        
      const newText = document.createElement('textarea');
      newText.setAttribute('class', 'right-block__add-twit-block');
      newText.setAttribute('cols', '185');
      newText.setAttribute('rows', '5');
      newText.setAttribute('maxlength', '280');        
      newText.setAttribute('style', 'width: 100%;');
      addTweet.appendChild(newText);
      const textNewBtn = document.createElement('button');
      textNewBtn.setAttribute('class', 'right-block__add-twit__btn');
      addTweet.appendChild(textNewBtn);        
      const text = document.querySelector('.text').textContent;  
      newText.value = text;
      textNewBtn.addEventListener('click', edit);
      function edit() {
        const sendText = newText.value;
        tweetsController.editTweet(id, sendText);
        tweetFeedView.clear();
        tweetsController.getFeed();
      }
    } else if (event.target.classList.contains('right-block__twit_delete')) {
        // if (confirm("Вы действительно хотите удалить твит?")) {
        //   tweetsController.removeTweet(id);
        // }
        const div = document.createElement('div');
        div.innerHTML = `<div id="my_modal" class="modal">
                          <div class="modal_content">
                            <span class="close_modal_window">×</span>
                            <p class="modal-text">Вы действительно хотите удалить твит?</p>
                            <button class="btn-cancel">Отменить</button>
                            <button class="btn-delete">Удалить</button>
                          </div>
                        </div>`;
        document.body.appendChild(div);
        const modal = document.getElementById('my_modal');
        modal.style.display = 'block';
        const span = document.getElementsByClassName('close_modal_window')[0];
        span.addEventListener('click', () => {
          modal.style.display = 'none';
        });
        window.addEventListener('click', (event) => {
          if (event.target == modal) {
              modal.style.display = 'none';
          }
        });
        const btnDelete = document.querySelector('.btn-delete');
        btnDelete.addEventListener('click', (event) => {
          tweetsController.removeTweet(id);
          modal.style.display = 'none';
        });
        const btnCancel = document.querySelector('.btn-cancel');
        btnCancel.addEventListener('click', (event) => {
          modal.style.display = 'none';
        });
      }
    })
  )
// }

function logGuest() {
  const addTweet = document.getElementById('add-tweet');
  const addComment = document.getElementById('comment-id');
  addComment.setAttribute('class', 'disappear');
  addTweet.setAttribute('class', 'disappear');
  const edit = document.querySelectorAll('#svgs');
  const del = document.querySelectorAll('#svgs-jlo');
  edit.forEach((item) => item.setAttribute('class', 'disappear'));
  del.forEach((item) => item.setAttribute('class', 'disappear'));
  const btnS = document.querySelector('.left-block__btn');
  btnS.innerHTML = `<button class="header__btn header__btn-main">
    Войти
  </button>
  <button class="header__btn header__btn-reg">
    Регистрация
  </button>`;
  const button = document.querySelector('.left-block__footer');
  button.innerHTML = `<h5>Версия 1.0</h5>`;
  const img = document.querySelector('.avatar');
  img.setAttribute('class', 'avatar')
}

{/* <img src="assets/img/edit.svg" alt="edit" class="right-block__twit_edit">
<img src="assets/img/delete.svg" alt="delete" class="right-block__twit_delete"> */}



// Check
// const tweetCollection = new TweetCollection(tweets);
// const headerView = new HeaderView('header-id');
// const tweetFeedView = new TweetFeedView('tweet-feed-id');
// const tweetView = new TweetView('tweet-id');
// const commentView = new CommentView('comment-id');
// const filterView = new FilterView('filters-id');
// setCurrentUser('Алеся Брановицкая');
// getFeed();

// addTweet('text');
// editTweet(4, 'text FOO');
// removeTweet(1);
// getFeed(0, 4);
// getFeed(0, 10, { hashtags: ['#datamola'] });
// showTweet(10);

// const filterView = new FilterView('filters-id');
// filterView.display('Анджелина','2002-02-22', 'sum', ['#datamola','gg']);
// addNewTweet();
