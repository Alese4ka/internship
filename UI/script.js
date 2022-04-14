'use strict';

let login;
let password;
let token;
// console.log(login)
// console.log(password)

// const tweets = [
//   {
//     id: '1',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span> <span class="hashtag">#datamola</span>',
//     createdAt: new Date('2022-02-16T03:30:00'),
//     author: 'Алеся Брановицкая',
//     comments: [
//       {
//         id: '901',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-02-17T05:30:00'),
//         author: 'Анджелина Джоли',
//       },
//       {
//         id: '902',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-02-18T15:30:00'),
//         author: 'Анджелина Джоли',
//       },
//       {
//         id: '903',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-02-19T19:30:00'),
//         author: 'Анджелина Джоли',
//       }],
//   },
//   {
//     id: '2',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#datamola</span>',
//     createdAt: new Date('2022-02-21T03:30:00'),
//     author: 'Анджелина Джоли',
//     comments: [
//       {
//         id: '904',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-02-22T17:30:00'),
//         author: 'Алеся Брановицкая',
//       }],
//   },
//   {
//     id: '3',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-02-24T03:30:00'),
//     author: 'Анджелина Джоли',
//     comments: [],
//   },
//   {
//     id: '4',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-02-25T03:30:00'),
//     author: 'Алеся Брановицкая',
//     comments: [
//       {
//         id: '905',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-02-27T05:30:00'),
//         author: 'Анджелина Джоли',
//       },
//       {
//         id: '906',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-02-28T15:30:00'),
//         author: 'Анджелина Джоли',
//       }],
//   },
//   {
//     id: '5',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-03-01T03:30:00'),
//     author: 'Анджелина Джоли',
//     comments: [],
//   },
//   {
//     id: '6',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-03-02T03:30:00'),
//     author: 'Анджелина Джоли',
//     comments: [],
//   },
//   {
//     id: '7',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-03-03T03:30:00'),
//     author: 'Алеся Брановицкая',
//     comments: [],
//   },
//   {
//     id: '8',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-03-04T03:30:00'),
//     author: 'Анджелина Джоли',
//     comments: [
//       {
//         id: '907',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-03-05T05:30:00'),
//         author: 'Алеся Брановицкая',
//       },
//       {
//         id: '908',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-03-06T15:30:00'),
//         author: 'Алеся Брановицкая',
//       }],
//   },
//   {
//     id: '9',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-03-07T03:30:00'),
//     author: 'Анджелина Джоли',
//     comments: [],
//   },
//   {
//     id: '10',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-03-08T03:30:00'),
//     author: 'Алеся Брановицкая',
//     comments: [
//       {
//         id: '909',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-03-09T05:30:00'),
//         author: 'Анджелина Джоли',
//       },
//       {
//         id: '910',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-03-09T18:30:00'),
//         author: 'Анджелина Джоли',
//       }],
//   },
//   {
//     id: '11',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-03-09T23:30:00'),
//     author: 'Алеся Брановицкая',
//     comments: [
//       {
//         id: '911',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-03-10T05:30:00'),
//         author: 'Анджелина Джоли',
//       },
//       {
//         id: '912',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-03-10T15:30:00'),
//         author: 'Анджелина Джоли',
//       },
//       {
//         id: '913',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-03-10T19:30:00'),
//         author: 'Анджелина Джоли',
//       }],
//   },
//   {
//     id: '12',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-03-10T21:30:00'),
//     author: 'Анджелина Джоли',
//     comments: [
//       {
//         id: '914',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-03-10T22:30:00'),
//         author: 'Алеся Брановицкая',
//       }],
//   },
//   {
//     id: '13',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-03-10T23:30:00'),
//     author: 'Анджелина Джоли',
//     comments: [],
//   },
//   {
//     id: '14',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-03-11T03:30:00'),
//     author: 'Алеся Брановицкая',
//     comments: [
//       {
//         id: '915',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-03-11T05:30:00'),
//         author: 'Анджелина Джоли',
//       },
//       {
//         id: '916',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-03-11T08:30:00'),
//         author: 'Анджелина Джоли',
//       }],
//   },
//   {
//     id: '15',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-03-11T11:30:00'),
//     author: 'Анджелина Джоли',
//     comments: [],
//   },
//   {
//     id: '16',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-03-11T13:30:00'),
//     author: 'Анджелина Джоли',
//     comments: [],
//   },
//   {
//     id: '17',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-03-11T14:30:00'),
//     author: 'Алеся Брановицкая',
//     comments: [],
//   },
//   {
//     id: '18',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-03-12T03:30:00'),
//     author: 'Анджелина Джоли',
//     comments: [
//       {
//         id: '917',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-03-12T05:30:00'),
//         author: 'Алеся Брановицкая',
//       },
//       {
//         id: '918',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-03-12T09:30:00'),
//         author: 'Алеся Брановицкая',
//       }],
//   },
//   {
//     id: '19',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-03-12T12:30:00'),
//     author: 'Анджелина Джоли',
//     comments: [],
//   },
//   {
//     id: '20',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type <span class="hashtag">#make</span> <span class="hashtag">#intro</span>',
//     createdAt: new Date('2022-03-13T09:30:00'),
//     author: 'Алеся Брановицкая',
//     comments: [
//       {
//         id: '919',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-03-13T12:30:00'),
//         author: 'Анджелина Джоли',
//       },
//       {
//         id: '920',
//         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
//         createdAt: new Date('2022-03-13T18:30:00'),
//         author: 'Анджелина Джоли',
//       }],
//   },
// ];

class Tweet {
  constructor(text, id = String(Math.ceil((Math.random(new Date())) * 1000)+1000), createdAt = new Date(), author = tweetsController.tweetCollection._user, comments = []) {
    this.id = id
    this.text = text;
    this.createdAt = createdAt;
    this.author = author;
    this.comments = comments;
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
  constructor(text, id = String(Math.ceil((Math.random(new Date())) * 1000)), createdAt = new Date(), author = tweetsController.tweetCollection._user) {
    this.id = id;
    this.text = text;
    this.createdAt = createdAt;
    this.author = author;
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
  constructor() {
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
      if (Tweet.validate(tweet) && tweet.author === tweetsController.tweetCollection._user) {
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
      && Tweet.validate(clone) && clone.author === tweetsController.tweetCollection._user) {
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
    if (currentUser === 'Гость') {
      img.setAttribute('id', 'avatar-guest');
    } else if (currentUser === 'Анджелина Джоли') {
      img.setAttribute('id', 'avatar-jlo');
    } else if (currentUser === 'Алеся Брановицкая') {
      img.setAttribute('id', 'avatar-bra');
    } else {
      img.setAttribute('id', 'avatar-img');
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
    if (currentUser === 'Анджелина Джоли') {
      addTweet.innerHTML = `<img src="assets/img/avatar_mini_jo.svg" alt="avatar">
                          <textarea cols="185" rows="5" maxlength="280" style="width: 100%;"
                          placeholder="О чем бы вы хотели рассказать?" class="right-block__add-twit-block"></textarea>
                          <textarea cols="185" rows="5" maxlength="280" style="width: 100%;" placeholder="Расскажите?"
                          class="right-block__add-twit-none"></textarea>
                          <button class="right-block__add-twit__btn"></button>`;
    } else if (currentUser === 'Алеся Брановицкая') {
      addTweet.innerHTML = `<img src="assets/img/avatar_mini.png" alt="avatar">
                          <textarea cols="185" rows="5" maxlength="280" style="width: 100%;"
                          placeholder="О чем бы вы хотели рассказать?" class="right-block__add-twit-block"></textarea>
                          <textarea cols="185" rows="5" maxlength="280" style="width: 100%;" placeholder="Расскажите?"
                          class="right-block__add-twit-none"></textarea>
                          <button class="right-block__add-twit__btn"></button>`;
    } else {
      addTweet.innerHTML = `<img src="assets/img/user_mini.svg" alt="avatar">
                          <textarea cols="185" rows="5" maxlength="280" style="width: 100%;"
                          placeholder="О чем бы вы хотели рассказать?" class="right-block__add-twit-block"></textarea>
                          <textarea cols="185" rows="5" maxlength="280" style="width: 100%;" placeholder="Расскажите?"
                          class="right-block__add-twit-none"></textarea>
                          <button class="right-block__add-twit__btn"></button>`;
    }
    const btn = document.querySelector('#right-block__chat__btn');
    btn.setAttribute('class', 'right-block__chat__btn');
    const tweetFeed = document.getElementById(this.containerId);
    tweetFeed.setAttribute('class', 'right-block__scroll-twit');
    const array = Array.from(tweets);
    array.sort((a, b) => b.createdAt - a.createdAt).forEach((item) => {
      const msg = document.createElement('div');
      if (item.author === currentUser) {
        msg.setAttribute('id', 'main-class');
        msg.setAttribute('class', 'user');
        msg.innerHTML = `<div class="id" style="font-size:0;">${item.id}</div><div class="title"><div><h2>${item.author}<h4 style="margin-top: 0.25rem;">${tweetsController.formatDate(item.createdAt)}</h4></h2></div><div id="svg-edit">
        <img src="assets/img/edit.svg" alt="edit" class="right-block__twit_edit">
        <img src="assets/img/delete.svg" alt="delete" class="right-block__twit_delete"></div></div><div class="text">${item.text}</div><div class="comments">${item.comments.length}</div>`;
        tweetFeed.appendChild(msg);
        if (item.author === 'Анджелина Джоли'){
          msg.setAttribute('class', 'jlo');
        } else if (item.author === 'Алеся Брановицкая') {
          msg.setAttribute('class', 'child');
        }
      } else {
        msg.setAttribute('id', 'main-class');
        msg.setAttribute('class', 'user');
        msg.innerHTML = `<div class="id" style="font-size:0;">${item.id}</div><div class="title"><div><h2>${item.author}<h4 style="margin-top: 0.25rem;">${tweetsController.formatDate(item.createdAt)}</h4></h2></div></div><div class="text">${item.text}</div><div class="comments">${item.comments.length}</div>`;
        tweetFeed.appendChild(msg);
        if (item.author === 'Анджелина Джоли'){
          msg.setAttribute('class', 'jlo');
        } else if (item.author === 'Алеся Брановицкая') {
          msg.setAttribute('class', 'child');
        }
      }
    });
  }

  clear() {
    const child = document.querySelectorAll('#main-class');
    child.forEach((item) => item.remove());
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
      msg.innerHTML = `<div class="id" style="font-size:0;">${tweet.id}</div><div class="title"><div><h2>${tweet.author}<h4 style="margin-top: 0.25rem;">${tweetsController.formatDate(tweet.createdAt)}</h4></h2></div></div>
      <div class="text">${tweet.text}</div>`;
      if (tweet.author === 'Анджелина Джоли'){
        msg.setAttribute('class', 'tweet-jlo');
      } else if (tweet.author === 'Алеся Брановицкая') {
        msg.setAttribute('class', 'tweet-child');
      } else {
        msg.setAttribute('class', 'tweet');
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
      if (item.author === 'Анджелина Джоли'){
        const msgCom = document.createElement('div');
        msgCom.setAttribute('class', 'comment-jlo');
        msgCom.innerHTML = `<div class="title"><h2>${item.author} <h4 style="margin-top: 0.25rem;">${tweetsController.formatDate(item.createdAt)}</h4></h2></div> 
        <div class="text">${item.text}</div>`;
        commentFeed.appendChild(msgCom);
      } else if (item.author === 'Алеся Брановицкая') {
        const msgCom = document.createElement('div');
        msgCom.setAttribute('class', 'comment');
        msgCom.innerHTML = `<div class="title"><h2>${item.author} <h4 style="margin-top: 0.25rem;">${tweetsController.formatDate(item.createdAt)}</h4></h2></div> 
        <div class="text">${item.text}</div>`;
        commentFeed.appendChild(msgCom);
      } else {
        const msgCom = document.createElement('div');
        msgCom.setAttribute('class', 'user-comment');
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

class UserList {
  constructor() {
    this.restore();
  }

  addUser(user) {
    if(this.users.some((item) => item !== user)){
      this.users.push(user);
      this.save();
    }
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
    // this.tweetCollection = new TweetCollection();
    this.headerView = new HeaderView('header-id');
    this.tweetFeedView = new TweetFeedView('tweet-feed-id');
    this.filterView = new FilterView('filters-id');
    this.tweetView = new TweetView('tweet-id');
    this.commentView = new CommentView('comment-id');
  }

  setCurrentUser(user) {
    this.headerView.display(user);
    tweetFeedApiService.user = user;
  }

  login(user) {
    tweetFeedApiService.user = user;
  }

  addTweet(text) {
    this.tweetCollection.add(text);
    this.tweetFeedView.clear();
    const filter = this.tweetCollection.getPage();
    this.tweetFeedView.display(filter);
  }

  editTweet(id, text) {
    this.tweetCollection.edit(id, text);
    this.tweetFeedView.clear();
    this.tweetFeedView.display(this.tweetCollection._tws);
  }

  removeTweet(id) {
    this.tweetCollection.remove(id);
    this.tweetFeedView.clear();
    this.tweetFeedView.display(this.tweetCollection._tws);
  }

  getFeed(skip, top, filterConfig) {
    const tweetView = document.querySelector('#tweet-id');
    tweetView.setAttribute('class', 'disappear');
    const commentView = document.querySelector('#comment-id');
    tweetView.setAttribute('class', 'disappear');
    commentView.setAttribute('class', 'disappear');
    const addComment = document.getElementById('add-comment');
    addComment.setAttribute('class', 'disappear');
    this.wrapperForGetTweets(skip, top, filterConfig);
  }

  async wrapperForGetTweets(skip, top, filterConfig) {
    let arrayString = await tweetFeedApiService.get();
    const arrayTweets = JSON.parse(arrayString);
    arrayTweets.forEach((item) => {
      item.createdAt = new Date(item.createdAt);
      item.comments.forEach((item) => {
        item.createdAt = new Date(item.createdAt);
      })
    });
    const filter = getPage(skip, top, filterConfig);
    this.tweetFeedView.display(filter);
    function getPage(skip = 0, top = 10, filterConfig = {}) {
      let array = [];
      filterConfig.author = filterConfig.author ? filterConfig.author : '';
      filterConfig.dateFrom = filterConfig.dateFrom ? filterConfig.dateFrom : null;
      filterConfig.dateTo = filterConfig.dateTo ? filterConfig.dateTo : null;
      filterConfig.text = filterConfig.text ? filterConfig.text : '';
      if (filterConfig.hashtags === undefined) {
        array = arrayTweets;
      } else {
        for (let i = 0; i < filterConfig.hashtags.length; i += 1) {
          let twsArray = arrayTweets;
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
  }

  showTweet(id) {
    wrapperForGetTweet(id);
    async function wrapperForGetTweet(id) {
      let arrayString = await tweetFeedApiService.get();
      const arrayTweets = JSON.parse(arrayString);
      arrayTweets.forEach((item) => {
        item.createdAt = new Date(item.createdAt);
        item.comments.forEach((item) => {
          item.createdAt = new Date(item.createdAt);
        })
      });
      const newTweet = get(id);
      tweetsController.tweetView.display(newTweet);
      tweetsController.commentView.display(newTweet.comments);
      function get(id) {
        for (let value of arrayTweets) {
          if (value.id === String(id)) {
            return value;
          }
          continue;
        }
        return false;
      }
    }
    const tweetView = document.querySelector('#tweet-id');
    tweetView.classList.toggle('disappear');
    const filtersBlock = document.querySelector('.left-block__filters');
    filtersBlock.setAttribute('class', 'index');
    const addTweet = document.querySelector('#add-tweet');
    addTweet.setAttribute('class', 'disappear');
    const chat = document.querySelector('.right-block__scroll-twit');
    chat.setAttribute('class', 'disappear');
    const btn = document.querySelector('.right-block__chat__btn');
    btn.setAttribute('class', 'disappear');
    const addComment = document.getElementById('add-comment');
    addComment.setAttribute('class', 'right-block__add-comment');
    if (currentUser === 'Анджелина Джоли') {
      addComment.innerHTML = `<img src="assets/img/jlo-comment.svg" alt="avatar">
                            <textarea cols="155" rows="1" maxlength="280" style="width: 100%;" placeholder="Написать комментарий"
                            class="right-block__add-comment__block"></textarea>
                            <button class="right-block__add-comment__btn"></button>`;
    } else if (currentUser === 'Алеся Брановицкая') {
      addComment.innerHTML = `<img src="assets/img/avatar_25.png" alt="avatar">
                            <textarea cols="155" rows="1" maxlength="280" style="width: 100%;" placeholder="Написать комментарий"
                            class="right-block__add-comment__block"></textarea>
                            <button class="right-block__add-comment__btn"></button>`;
    } else {
      addComment.innerHTML = `<img src="assets/img/user-comment.svg" alt="avatar">
                            <textarea cols="155" rows="1" maxlength="280" style="width: 100%;" placeholder="Написать комментарий"
                            class="right-block__add-comment__block"></textarea>
                            <button class="right-block__add-comment__btn"></button>`;
    }
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
      filterConfig.dateFrom = new Date(dateFrom);
      filterConfig.dateTo = new Date(dateTo);
      filterConfig.text = text;
      let re = /\s* \s*/;
      filterConfig.hashtags = hashtags.split(re);
      this.tweetFeedView.clear();
      const filter = this.wrapperForGetTweets(0, 10, filterConfig);
      const mainBlock = document.querySelectorAll('#main-class');
      if (mainBlock.length === 0) {
        const rightBlock = document.querySelector('.right-block__chat');
        const newBlock =  document.createElement('div');
        newBlock.setAttribute('class', 'new-block-guest');
        newBlock.innerHTML = `<div>
        <p>По вашему запросу ничего не найдено. Измените условия поиска</p>
        <button class="btn-main">Назад</button>
        </div>`;
        rightBlock.prepend(newBlock);
        const loadTweets = document.querySelector('#right-block__chat__btn'); 
        loadTweets.setAttribute('class', 'disappear');
        const btnMain = document.querySelector('.btn-main');
        btnMain.addEventListener('click', () => {
          pageMain();
          tweetsController.wrapperForGetTweets(0, 10, filterConfig);
          renderMainUsers();
          currentUser = JSON.parse(localStorage.getItem('currentUser'));
          tweetsController.setCurrentUser(currentUser);
        });
        if (currentUser === 'Гость') {
          const addTweet = document.getElementById('add-tweet');
          addTweet.setAttribute('class', 'disappear');
          const btnMain = document.querySelector('.btn-main');
          btnMain.addEventListener('click', () => {
            pageMain();
            tweetsController.getFeed();
            renderMainGuest();
            currentUser = JSON.parse(localStorage.getItem('currentUser'));
            tweetsController.setCurrentUser(currentUser);
          });
        }
      } else {
        this.tweetFeedView.display(filter);
        if (currentUser === 'Гость') {
          const addTweet = document.getElementById('add-tweet');
          addTweet.setAttribute('class', 'disappear');
        }
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
      if (document.querySelector('.new-block-guest')) {
        document.querySelector('.right-block__chat').removeChild(document.querySelector('.new-block-guest'));
      }
      this.tweetFeedView.clear();
      this.getFeed();
      if(currentUser === 'Гость') {
        const addTweet = document.getElementById('add-tweet');
        const addComment = document.getElementById('comment-id');
        addComment.setAttribute('class', 'disappear');
        addTweet.setAttribute('class', 'disappear');
      }
    });
  }

  addNewTweet() {
    let textArea = document.querySelector('.right-block__add-twit-block'); 
    let text = textArea.value;
    let highlighted = text.replace(/(#\w+)/g, '<span class="hashtag">$1</span>');
    text = highlighted;
    textArea.value = '';
    tweetFeedApiService.postTweet(highlighted);
  }

  addComment() {
    const btnAddComment = document.querySelector('.right-block__add-comment');
    btnAddComment.addEventListener('click', (event) => {
      if(event.target.classList.contains('right-block__add-comment__btn')) {
        let textArea = document.querySelector('.right-block__add-comment__block'); 
        const text = textArea.value;
        const id = document.querySelector('.id').textContent;
        this.tweetCollection.addComment(id, text);
        this.commentView.clear();
        const tweet = this.tweetCollection.get(id);
        this.commentView.display(tweet.comments);
        textArea.value = '';
      }
    });
  }
}

const url = 'https://jslabapi.datamola.com/';
class TweetFeedApiService {
  constructor(url, user) {
    this.address = url;
    this.user = user;
  }

  get() {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
      
    return fetch("https://jslabapi.datamola.com/tweet?count=100", requestOptions)
      .then(response => response.text())
      .then(result => {
        return result;
      })
      .catch(error => console.log('error', error));
  }

  postLogin(login, password) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "login": login,
      "password": password
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://jslabapi.datamola.com/login", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      token = JSON.parse(result);
      if (token.statusCode !== 403) {
        pageMain();
        tweetsController.getFeed();
        localStorage.setItem('token', JSON.stringify(token.token));
        localStorage.setItem('currentUser', JSON.stringify(login));
        tweetsController.setCurrentUser(login);
        tweetsController.login(login);
        renderMainUsers();
      } else {
        const nameInp = document.querySelector('.form__name');
        nameInp.style.border = '0.125rem solid #ff8d8d';
        const newP = document.querySelector('#new-p');
        newP.classList.toggle('disappear');
        return;
      }
    })
    .catch(error => console.log(error));
  }

  postTweet(text) {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${JSON.parse(localStorage.getItem('token'))}`);
    myHeaders.append("Content-Type", "application/json");
  
    let raw = JSON.stringify({
      "text": text
    });
  
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch("https://jslabapi.datamola.com/tweet", requestOptions)
      .then(response => response.text())
      .then(result => {
        tweetsController.tweetFeedView.clear();
        tweetsController.getFeed();
      })
      .catch(error => console.log('error', error));
  }

  put() {

  }

  delete() {

  }
}

function createLocalStorage() {
  const realUsers = ['Алеся Брановицкая', 'Анджелина Джоли'];
  if (localStorage.getItem('userList') === null && localStorage.getItem('tws') === null && localStorage.getItem('currentUser') === null){
    localStorage.setItem('currentUser', JSON.stringify('Гость'));
    // localStorage.setItem('userList', JSON.stringify(realUsers));
    // localStorage.setItem('tws', JSON.stringify(tweets));
  }
}

createLocalStorage();
const tweetsController = new TweetsController();
const tweetFeedApiService = new TweetFeedApiService(url);
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
tweetsController.setCurrentUser(currentUser);
// tweetsController.filterView.display();
if (currentUser !== 'Гость') {
  renderMainUsers();
} else {
  renderMainGuest();
}

document.addEventListener('click', (event) => {
  if (event.target.closest('#main-class')) {
    if (event.target.classList.contains('comments')) {
      const id = event.target.parentNode.querySelector('.id').textContent;
      tweetsController.showTweet(id);
      if (currentUser === 'Гость') {
        const addComment = document.querySelector('#add-comment');
        addComment.setAttribute('class', 'disappear');
        const btnS = document.querySelector('.left-block__btn');
        const mainBtn = document.createElement('button');
        mainBtn.setAttribute('class', 'tweet__btn-main-guest header__btn')
        mainBtn.innerHTML = 'Главная';
        btnS.append(mainBtn);
        mainBtn.addEventListener('click', () => {
          pageMain();
          tweetsController.getFeed();
          renderMainGuest();
          currentUser = JSON.parse(localStorage.getItem('currentUser'));
          tweetsController.setCurrentUser(currentUser);
        });
      } else {
        tweetsController.addComment();
        const btnS = document.querySelector('.left-block__btn');
        const mainBtn = document.createElement('button');
        mainBtn.setAttribute('class', 'tweet__btn-main header__btn')
        mainBtn.innerHTML = 'Главная';
        btnS.append(mainBtn);
        mainBtn.addEventListener('click', () => {
          pageMain();
          tweetsController.getFeed();
          renderMainUsers();
          currentUser = JSON.parse(localStorage.getItem('currentUser'));
          tweetsController.setCurrentUser(currentUser);
          const addTweet = document.getElementById('add-tweet');
          addTweet.style.display = 'flex';
        });
      }
    } else if (event.target.classList.contains('right-block__twit_edit')) {
      const id = event.target.parentNode.previousSibling.parentNode.previousSibling.textContent;
      console.log('iii')
      const textArea = document.querySelector('.right-block__add-twit-block');
      textArea.setAttribute('class', 'disappear');
      const textBtn = document.querySelector('.right-block__add-twit__btn');
      textBtn.setAttribute('class', 'disappear');
      const addTweet = document.querySelector('.right-block__add-twit');        
      const newTextArea = document.createElement('textarea');
      newTextArea.setAttribute('class', 'right-block__edit-twit-block');
      newTextArea.setAttribute('cols', '185');
      newTextArea.setAttribute('rows', '5');
      newTextArea.setAttribute('maxlength', '280');        
      newTextArea.setAttribute('style', 'width: 100%;');
      addTweet.appendChild(newTextArea);
      const textNewBtn = document.createElement('button');
      textNewBtn.setAttribute('class', 'right-block__edit-twit__btn');
      addTweet.appendChild(textNewBtn);        
      const text = event.target.parentNode.parentNode.parentNode.querySelector('.text').textContent;  
      newTextArea.value = text;
      textNewBtn.addEventListener('click', () => {
        console.log('send')
        const sendText = newTextArea.value;
        console.log(sendText, id)
        tweetsController.editTweet(id, sendText);
      });
    } else if (event.target.classList.contains('right-block__twit_delete')) {
      const id = event.target.parentNode.previousSibling.parentNode.previousSibling.textContent;
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
      btnDelete.addEventListener('click', () => {
        tweetsController.removeTweet(id);
        modal.style.display = 'none';
      });
      const btnCancel = document.querySelector('.btn-cancel');
      btnCancel.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
  } else if (event.target === document.querySelector('.header__btn-main')) {
    pageLogIn();
  } else if (event.target === document.querySelector('.header__btn-reg')) {
    pageLogUp();
  } else if (event.target === document.querySelector('#right-block__chat__btn')) {
    const mainBlock = document.querySelectorAll('#main-class');
    console.log(mainBlock.length) 
    const loadTweets = document.querySelector('#right-block__chat__btn'); 
    tweetsController.getFeed(mainBlock.length, 10);
    if (currentUser === 'Гость') {
      const addTweet = document.getElementById('add-tweet');
      const addComment = document.getElementById('comment-id');
      addComment.setAttribute('class', 'disappear');
      addTweet.setAttribute('class', 'disappear');
    }
    const countTweets = document.querySelectorAll('#main-class');
    compareLengths();
    async function compareLengths() {
      let arrayString = await tweetFeedApiService.get(); 
      let arrayTweets = JSON.parse(arrayString);
      if (arrayTweets.length === countTweets.length) {
        loadTweets.setAttribute('disabled', true);
        loadTweets.setAttribute('style', 'color: grey; box-shadow: none;cursor-pointer: none;');
      } 
    }
  } else if (event.target === document.querySelector('.right-block__add-twit__btn')) { 
    tweetsController.addNewTweet();
  } else if(event.target.closest('.first') || event.target.closest('.second')) {
    const firstPas = document.querySelector('.first');
    firstPas.style.border = '0.125rem solid #6e9485';
    const secondPas = document.querySelector('.second');
    secondPas.style.border = '0.125rem solid #6e9485';
    if(!document.querySelector('.disappear')){
      const newP = document.querySelector('#new-p');
      newP.classList.toggle('disappear')
    }
  } else if(event.target.closest('.form__name')) {
    const firstPas = document.querySelector('.form__name');
    firstPas.style.border = '0.125rem solid #6e9485';
    if(!document.querySelector('.disappear')){
      const newP = document.querySelector('#new-p');
      newP.classList.toggle('disappear')
    }
  }
});

function pageMain() {
  const head = document.getElementsByTagName('head')[0];
    head.innerHTML = `<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/reset.css">
    <link rel="stylesheet" href="assets/css/index.css">
    <title>Main</title>`;
    document.body.innerHTML = `<div class="wrapper">
    <main>
      <section class="left-block">
        <div class="left-block__wrapper">
          <div class="left-block__head">
            <div class="left-block__head__mobile">
              <img src="assets/img/logo_mobile.svg" alt="logo">
              <img src="assets/img/exit_mobile.svg" alt="exit">
            </div>
            <img class="avatar">
            <div id="header-id"></div>
          </div>
          <div class="left-block__btn">
          </div>
          <div class="left-block__filters">
          </div>
          <div class="left-block__footer">
            <h5>Версия 1.0</h5>
          </div>
        </div>
      </section>
      <section class="right-block">
        <header>
          <img src="assets/img/logo_.svg" alt="logotype" class="right-block__img">
        </header>
        <div id="tweet-id">
        </div>
        <article id="add-tweet">
        </article>
        <div id="comment-id"></div>
        <section class="right-block__chat">
          <div class="right-block__chat__filters">
            <input type="checkbox" />
            <span><img src="assets/img/filters_mobile.svg" alt="filters"></span>
            <span><img src="assets/img/filters_mobile.svg" alt="filters"></span>
            <table class="collapsible" id="collapsible1">
              <tr>
                <td>
                  <input type="text" class="left-block__filters__text" placeholder="По имени">
                </td>
              </tr>
              <tr>
                <td>
                  <input type="date" class="left-block__filters__date" placeholder="По дате">
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" class="left-block__filters__text" placeholder="По тексту">
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" class="left-block__filters__text" placeholder="По хештегу">
                </td>
              </tr>
              <tr>
                <td>
                  <div class="left-block__filters__btn">
                    <button class="left-block__filters__btn-clear">Сбросить</button>
                    <button class="left-block__filters__btn-apply">Применить</button>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div id="tweet-feed-id" class="right-block__scroll-twit">
          </div>
          <button id="right-block__chat__btn" class="right-block__chat__btn">Загрузить еще</button>
        </section>
        <article id="add-comment">
        </article>
        <footer>
          <h5 class="footer__mobile">Версия 1.0</h5>
          <h5>© Алеся Брановицкая</h5>
          <a href="mailto:alesun4ik@gmail.com">alesun4ik@gmail.com</a>
        </footer>
      </section>
    </main>`;
}

function pageLogIn() {
  const head = document.getElementsByTagName('head')[0];
    head.innerHTML = `<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/reset.css">
    <link rel="stylesheet" href="assets/css/login.css">
    <title>Log in</title>`;
    document.body.innerHTML = `<div class="wrapper">
    <header class="header__desktop">
      <img src="assets/img/logo_.svg" alt="logotype">
      <div>
        <button class="header__btn header__btn-main">
          Главная
        </button>
        <button class="header__btn header__btn-reg">
          Регистрация
        </button>
      </div>
    </header>
    <header class="header__mobile">
      <img src="assets/img/logo_mobile.svg" alt="logo" class="header__mobile__logo">
      <div>
        <button class="header__btn header__btn-main header__mobile__btn">
          Главная
        </button>
        <button class="header__btn header__btn-reg">
          Регистрация
        </button>
      </div>
    </header>
    <main>
      <h1>Войти</h1>
      <form onsubmit="redirectLogIn();return false">
        <input type="text" required placeholder="Введите имя" class="form__name">
        <p id="new-p" class="disappear">Неверное имя</p>
        <input type="password" required placeholder="Введите пароль" class="form__password">
        <input class="form__btn log" type="submit" value="Войти">
      </form>
    </main>

    <footer>
      <h5>Версия 1.0</h5>
      <h5 class="footer__copyright">© Алеся Брановицкая</h5>
      <a href="mailto:alesun4ik@gmail.com">alesun4ik@gmail.com</a>
    </footer>
  </div>`;
  const mainBtn = document.querySelector('.header__btn-main');
  const regBtn = document.querySelector('.header__btn-reg');
  mainBtn.addEventListener('click', () => {
    pageMain();
    tweetsController.getFeed();
    renderMainGuest();
  });
  regBtn.addEventListener('click', () => {
    pageLogUp();
  });
}

function pageLogUp() {
  const head = document.getElementsByTagName('head')[0];
  head.innerHTML = `<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="assets/css/reset.css">
  <link rel="stylesheet" href="assets/css/logup.css">
  <title>Log up</title>`;
  document.body.innerHTML = `<div class="wrapper">
  <header class="header__desktop">
    <img src="assets/img/logo_.svg" alt="logotype">
    <div>
      <button class="header__btn header__btn-main">
        Главная
      </button>
      <button class="header__btn header__btn-log">
        Войти
      </button>
    </div>
  </header>
  <header class="header__mobile">
    <img src="assets/img/logo_mobile.svg" alt="logo" class="header__mobile__logo">
    <div>
      <button class="header__btn header__btn-main">
        Главная
      </button>
      <button class="header__btn header__btn-log">
        Войти
      </button>
    </div>
  </header>
  <main>
    <h1>Зарегистрироваться</h1>
    <form onsubmit="redirectLogUp();return false">
      <input type="text" required placeholder="Введите имя" class="form__name">
      <input type="password" required placeholder="Введите пароль" class="form__password first">
      <input type="password" required placeholder="Подтвердите пароль" class="form__password second">
      <p id="new-p" class="disappear">Пароли не совпадают</p>
      <input class="form__btn" type="submit" value="Войти">
    </form>
  </main>

  <footer>
    <h5>Версия 1.0</h5>
    <h5 class="footer__copyright">© Алеся Брановицкая</h5>
    <a href="mailto:alesun4ik@gmail.com">alesun4ik@gmail.com</a>
  </footer>
  </div>`;
  const mainBtn = document.querySelector('.header__btn-main');
  const logBtn = document.querySelector('.header__btn-log');
  mainBtn.addEventListener('click', () => {
    pageMain();
    tweetsController.getFeed();
    renderMainGuest();
  });
  logBtn.addEventListener('click', () => {
    pageLogIn();
  });
}



function redirectLogIn() {
  const name = document.querySelector('.form__name');
  // const userList = JSON.parse(localStorage.getItem('userList'));
  login = name.value;
  const passwordInput = document.querySelector('.form__password');
  password = passwordInput.value;
  tweetFeedApiService.postLogin(login, password);
}

function redirectLogUp() {
  if (document.querySelector('.first').value !== document.querySelector('.second').value) {
    const firstPas = document.querySelector('.first');
    firstPas.style.border = '0.125rem solid #ff8d8d';
    const secondPas = document.querySelector('.second');
    secondPas.style.border = '0.125rem solid #ff8d8d';
    const newP = document.querySelector('#new-p');
    newP.classList.toggle('disappear');
    return;
  }
  const name = document.querySelector('.form__name');
  const userList = JSON.parse(localStorage.getItem('userList'));
  userList.push(name.value);
  localStorage.setItem('userList', JSON.stringify(userList));
  pageMain();
  tweetsController.getFeed();
  renderMainUsers();
  localStorage.setItem('currentUser', JSON.stringify(name.value));
  tweetsController.setCurrentUser(name.value);
  tweetsController.registration(name.value);
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  tweetsController.setCurrentUser(currentUser);
  tweetsController.tweetFeedView.clear();
  const filter =  tweetsController.tweetCollection.getPage();
  tweetsController.tweetFeedView.display(filter);
}

function renderMainUsers() {
  const img = document.querySelector('.avatar');
  if (currentUser === 'Гость') {
    img.setAttribute('id', 'avatar-guest');
  } else if (currentUser === 'Анджелина Джоли') {
    img.setAttribute('id', 'avatar-jlo');
  } else if (currentUser === 'Алеся Брановицкая') {
    img.setAttribute('id', 'avatar-bra');
  } else {
    img.setAttribute('id', 'avatar-img');
  }
  tweetsController.getFeed();
  tweetsController.filterView.display();
  const blockScroll = document.querySelector('.right-block__scroll-twit');
  blockScroll.setAttribute('style', 'height: 50vh;');
  const button = document.querySelector('.left-block__footer');
  button.setAttribute('id', 'logout-btn');
  button.innerHTML = `<button class="left-block__footer__btn">
                            Выйти
                          </button>
                          <h5>Версия 1.0</h5>`;
  button.addEventListener('click', () => {
    localStorage.setItem('currentUser', JSON.stringify('Гость'));
    tweetsController.filterView.display();
    pageMain(); 
    tweetsController.getFeed();
    renderMainGuest();
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    tweetsController.setCurrentUser(currentUser); 
    // tweetsController.tweetFeedView.clear();
    // const filter =  tweetsController.tweetCollection.getPage();
    // tweetsController.tweetFeedView.display(filter);
    const addTweet = document.getElementById('add-tweet');
    const addComment = document.getElementById('comment-id');
    addComment.setAttribute('class', 'disappear');
    addTweet.setAttribute('class', 'disappear');
    });
}

function renderMainGuest() {
  const img = document.querySelector('.avatar');
  if (currentUser === 'Гость') {
    img.setAttribute('id', 'avatar-guest');
  } else if (currentUser === 'Анджелина Джоли') {
    img.setAttribute('id', 'avatar-jlo');
  } else if (currentUser === 'Алеся Брановицкая') {
    img.setAttribute('id', 'avatar-bra');
  } else {
    img.setAttribute('id', 'avatar-img');
  }
  tweetsController.getFeed();
  tweetsController.filterView.display();
  const addTweet = document.getElementById('add-tweet');
  addTweet.style.display = "none";
  const addComment = document.getElementById('comment-id');
  addComment.setAttribute('class', 'disappear');
  const btnS = document.querySelector('.left-block__btn');
  btnS.innerHTML = `<button class="header__btn header__btn-main">
    Войти
  </button>
  <button class="header__btn header__btn-reg">
    Регистрация
  </button>`;
  const button = document.querySelector('.left-block__footer');
  button.innerHTML = `<h5>Версия 1.0</h5>`;
  const blockScroll = document.querySelector('.right-block__scroll-twit');
  blockScroll.setAttribute('style', 'height: 100vh;');
}