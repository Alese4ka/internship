/* eslint-disable max-classes-per-file */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';
class UserList {
  constructor() {
    this.users = ['Алеся Брановицкая', 'Анджелина Джоли'];
  }

  addUser(user) {
    this.users.push(user);
  }
}

class TweetsController {
  constructor() {
    this.tweet = new Tweet();
    this.comment = new Comment();
    this.tweetCollection = new TweetCollection();
    this.headerView = new HeaderView();
    this.tweetFeedView = new TweetFeedView();
    this.filterView = new FilterView();
    this.tweetView = new TweetView();
    this.commentView = new CommentView();
  }

  setCurrentUser(user) {
    this.headerView.display(user);
    this.tweetCollection.user = user;
  }

  addTweet(text) {
    this.tweetCollection.add(text);
    this.tweetFeedView.clear();
    this.tweetFeedView.display(this.tweetCollection._tws);
  }

  editTweet(id, text) {
    this.tweetFeedView.clear();
    this.tweetCollection.edit(id, text);
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
    tweetFeedView.clear();
    const filter = tweetCollection.getPage(skip, top, filterConfig);
    tweetFeedView.display(filter);
  }

  showTweet(id) {
    const addTweet = document.querySelector('.right-block__add-twit');
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

  clearFilters() {
    document.querySelector('.left-block__filters__btn-clear').addEventListener('click', () => {
      document.querySelector('.filter-author').value = '';
      document.querySelector('.filter-date').value = '';
      document.querySelector('.filter-text').value = '';
      document.querySelector('.filter-hashtag').value = '';
    });
  }

  registration() {

  }

  login() {

  }

  //и другие функции 
}

const tweetsController = new TweetsController();
console.log(tweetsController);
