'use strict';

const url = 'https://jslabapi.datamola.com/';
let login;
let password;
let log;
let pass;
let filterConfig;
let main;

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
    const tweetView = document.querySelector('#tweet-id');
    tweetView.setAttribute('class', 'disappear');
    const commentView = document.querySelector('#comment-id');
    tweetView.setAttribute('class', 'disappear');
    commentView.setAttribute('class', 'disappear');
    const addComment = document.getElementById('add-comment');
    addComment.setAttribute('class', 'disappear');
    addTweet.innerHTML = `<img src="assets/img/user_mini.svg" alt="avatar">
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
      if (item.author === currentUser) {
        msg.setAttribute('id', 'main-class');
        msg.setAttribute('class', 'user');
        msg.innerHTML = `<div class="id" style="font-size:0;">${item.id}</div><div class="title"><div><h2>${item.author}<h4 style="margin-top: 0.25rem;">${formatDate(item.createdAt)}</h4></h2></div><div id="svg-edit">
        <img src="assets/img/edit.svg" alt="edit" class="right-block__twit_edit">
        <img src="assets/img/delete.svg" alt="delete" class="right-block__twit_delete"></div></div><div class="text">${item.text.replace(/(#\w+)/g, '<span class="hashtag">$1</span>')}</div><div class="comments">${item.comments.length}</div>`;
        tweetFeed.appendChild(msg);
        if (item.author === 'Анджелина Джоли'){
          msg.setAttribute('class', 'jlo');
        } else if (item.author === 'Алеся Брановицкая') {
          msg.setAttribute('class', 'child');
        }
      } else {
        msg.setAttribute('id', 'main-class');
        msg.setAttribute('class', 'user');
        msg.innerHTML = `<div class="id" style="font-size:0;">${item.id}</div><div class="title"><div><h2>${item.author}<h4 style="margin-top: 0.25rem;">${formatDate(item.createdAt)}</h4></h2></div></div><div class="text">${item.text.replace(/(#\w+)/g, '<span class="hashtag">$1</span>')}</div><div class="comments">${item.comments.length}</div>`;
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
    tweetsController.filterView.clearFilters();
    tweetsController.filterView.loaderFilters();
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

  async getFilterTweets(skip, top, filterConfig) {
    try {
      const result = await tweetFeedApiService.get(skip, top, filterConfig);
      result.forEach((item) => {
        item.createdAt = new Date(item.createdAt);
        item.comments.forEach((item) => {
        item.createdAt = new Date(item.createdAt);
        })
      });
      tweetsController.tweetFeedView.clear();
      tweetsController.tweetFeedView.display(result);
      document.querySelector('#right-block__chat__btn').style.display = 'none';
      if (result.length === 0) {
        const btn = document.querySelector('.right-block__chat__btns');
        btn.setAttribute('style', 'display: none;');
        const rightBlock = document.querySelector('.right-block__chat');
        if (!document.querySelector('.new-block-guest')) {
          const newBlock =  document.createElement('div');
          newBlock.setAttribute('class', 'new-block-guest');
          newBlock.innerHTML = `<div>
          <p>По вашему запросу ничего не найдено. Измените условия поиска</p>
          <button class="btn-main">Назад</button>
          </div>`;
          rightBlock.prepend(newBlock);
        }
        const btnMain = document.querySelector('.btn-main');
        btnMain.addEventListener('click', () => {
          setCheckFeedTweets();
          document.querySelector('.filter-author').value = '';
          document.querySelector('.filter-date-from').value = '';
          document.querySelector('.filter-date-to').value = '';
          document.querySelector('.filter-text').value = '';
          document.querySelector('.filter-hashtag').value = '';
          if (document.querySelector('.new-block-guest')) {
            document.querySelector('.right-block__chat').removeChild(document.querySelector('.new-block-guest'));
          }
          tweetsController.getFeed();
          document.querySelector('.right-block__chat__btn').style.display = 'block';
          if (currentUser === 'Гость') {
            const addTweet = document.getElementById('add-tweet');
            addTweet.setAttribute('class', 'disappear');
          }
        });
      } else if (result.length < 10) {
        const btn = document.querySelector('.right-block__chat__btns');
        btn.setAttribute('style', 'display: none;');
      }
      return result;
    } catch(err) {
      pageError(); 
    }
  }

  loaderFilters() {
    document.querySelector('.left-block__filters__btn-apply').addEventListener('click', (event) => {
      clearInterval(checkFeedTweets);
      document.querySelector('.right-block__chat__btns').style.display = 'block';
      const author = document.querySelector('.filter-author').value;
      const dateFrom = document.querySelector('.filter-date-from').value;
      const defaultDateFrom = '1970-01-01';
      const dateTo = document.querySelector('.filter-date-to').value;
      const defaultDateTo = '2022-04-30';
      const text  = document.querySelector('.filter-text').value;
      const hashtags = document.querySelector('.filter-hashtag').value;
      filterConfig = {};
      filterConfig.author = author ? `&author=${author}` : '';
      filterConfig.text = text ? `&text=${text}` : '';
      filterConfig.dateFrom = dateFrom ? `&dateFrom=${JSON.stringify(new Date(dateFrom)).replace(/\"/g, "")}` : `&dateFrom=${JSON.stringify(new Date(defaultDateFrom)).replace(/\"/g, "")}`;
      filterConfig.dateTo = dateTo ? `&dateTo=${JSON.stringify(new Date(dateTo)).replace(/\"/g, "")}` : `&dateTo=${JSON.stringify(new Date(defaultDateTo)).replace(/\"/g, "")}`;
      const re = /\s* \s*/;
      filterConfig.hashtags = hashtags ? `&hashtags=${hashtags.split(re)}` : '';
      this.getFilterTweets(0, 10, filterConfig);
    });
  }

  clearFilters() {
    document.querySelector('.left-block__filters__btn-clear').addEventListener('click', () => {
      setCheckFeedTweets();
      document.querySelector('.filter-author').value = '';
      document.querySelector('.filter-date-from').value = '';
      document.querySelector('.filter-date-to').value = '';
      document.querySelector('.filter-text').value = '';
      document.querySelector('.filter-hashtag').value = '';
      if (document.querySelector('.new-block-guest')) {
        document.querySelector('.right-block__chat').removeChild(document.querySelector('.new-block-guest'));
      }
      tweetsController.tweetFeedView.clear();
      tweetsController.getFeed();
      document.querySelector('.right-block__chat__btn').style.display = 'block';
      document.querySelector('.right-block__chat__btns').style.display = 'none';
      if (currentUser === 'Гость') {
        const addTweet = document.getElementById('add-tweet');
        const addComment = document.getElementById('comment-id');
        addComment.setAttribute('class', 'disappear');
        addTweet.setAttribute('class', 'disappear');
      }
    });
  }
}

class TweetView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(tweet) {
    const tweetView = document.getElementById(this.containerId);
    tweetView.innerHTML = `<div class="id" style="font-size:0;">${tweet.id}</div><div class="title"><div><h2>${tweet.author}<h4 style="margin-top: 0.25rem;">${formatDate(tweet.createdAt)}</h4></h2></div></div>
    <div class="text">${tweet.text}</div>`;
    tweetView.setAttribute('class', 'tweet');
    const filtersBlock = document.querySelector('.left-block__filters');
    filtersBlock.setAttribute('class', 'index');
    const addTweet = document.querySelector('#add-tweet');
    addTweet.style.display = 'none';
    const chat = document.querySelector('.right-block__scroll-twit');
    chat.setAttribute('class', 'disappear');
    const btn = document.querySelector('.right-block__chat__btn');
    btn.setAttribute('style', 'display: none;');
    const btnFilter = document.querySelector('.right-block__chat__btns');
    btnFilter.setAttribute('style', 'display: none;');
    const addComment = document.getElementById('add-comment');
    if (currentUser === 'Гость') {
      addComment.setAttribute('style', 'display: none;');
    }
    addComment.setAttribute('class', 'right-block__add-comment');
    addComment.innerHTML = `<img src="assets/img/user-comment.svg" alt="avatar">
                            <textarea cols="155" rows="1" maxlength="280" style="width: 100%;" placeholder="Написать комментарий"
                            class="right-block__add-comment__block"></textarea>
                            <button class="right-block__add-comment__btn"></button>`;
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
      const msgCom = document.createElement('div');
      msgCom.setAttribute('class', 'user-comment');
      msgCom.innerHTML = `<div class="title"><h2>${item.author} <h4 style="margin-top: 0.25rem;">${formatDate(item.createdAt)}</h4></h2></div> 
      <div class="text">${item.text}</div>`;
      commentFeed.appendChild(msgCom);
    });
  }

  clear() {
    const child = document.querySelectorAll('.comment');
    const jlo = document.querySelectorAll('.comment-jlo');
    const user = document.querySelectorAll('.user-comment');
    child.forEach((item) => item.remove());
    jlo.forEach((item) => item.remove());
    user.forEach((item) => item.remove());
  }
} 

class TweetsController {
  constructor() {
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

  async getFeed(skip, top) {
    try {
      const array = await tweetFeedApiService.get(skip, top);
      array.forEach((item) => {
        item.createdAt = new Date(item.createdAt);
        item.comments.forEach((item) => {
          item.createdAt = new Date(item.createdAt);
        })
      })
      this.tweetFeedView.display(array);
      return array;
    } catch(err) {
        pageError(); 
    }
  }

  showTweet(id) {
    clearInterval(checkFeedTweets);
    wrapperForGetTweet(id);
    async function wrapperForGetTweet(id) {
      try {
        const array = await tweetFeedApiService.get(0, 1000);
        array.forEach((item) => {
          item.createdAt = new Date(item.createdAt);
          item.comments.forEach((item) => {
            item.createdAt = new Date(item.createdAt);
          })
        });
        const newTweet = get(id);
        tweetsController.tweetView.display(newTweet);
        tweetsController.commentView.display(newTweet.comments);
        function get(id) {
          for (let value of array) {
            if (value.id === String(id)) {
              return value;
            }
            continue;
          }
          return false;
        }
      } catch(err) {
          pageError(); 
      }
    }
  }

  addNewTweet(highlighted) {
    tweetFeedApiService.postTweet(highlighted);
  }

  addComment(id, text) {
    tweetFeedApiService.postComment(id, text);
  }
}

class TweetFeedApiService {
  constructor(url, user) {
    this.address = url;
    this.user = user;
  }

  get(skip = 0, top = 10, filterConfig = {}) {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    let url = this.address;
    url += 'tweet?';
    url += 'count=';
    url += top;
    url += '&from=';
    url += skip;
    url += filterConfig.author ?? '';
    url += filterConfig.text ?? '';
    url += filterConfig.dateFrom ?? '';
    url += filterConfig.dateTo ?? '';
    url += filterConfig.hashtags ?? '';
    
    return this._fetch(url, requestOptions);
  }

  async postRegistration(login, password) {
    let raw = JSON.stringify({
      "login": login,
      "password": password
    });

    let requestOptions = {
      method: 'POST',
      headers: this._headers(login, password),
      body: raw,
      redirect: 'follow'
    };

    try {
      const result = await this._fetch(`${this.address}registration`, requestOptions);
      if (result.statusCode !== 409 && !result.hasOwnProperty('statusCode')) {
        this.postLogin(login, password);
      } else if (result.statusCode === 409) {
        errorName();
        return;
      } else {
        this._error(result);
      }
    } catch(err) {
        pageError(); 
    }
  }

  async postLogin(login, password) {
    let raw = JSON.stringify({
      "login": login,
      "password": password
    });

    let requestOptions = {
      method: 'POST',
      headers: this._headers(login, password),
      body: raw,
      redirect: 'follow'
    };

    try {
      const result = await this._fetch(`${this.address}login`, requestOptions);
      if (result.statusCode !== 403 && !result.hasOwnProperty('statusCode')) {
        currentUser = login;
        pageMain();
        localStorage.setItem('token', JSON.stringify(result.token));
        localStorage.setItem('currentUser', JSON.stringify(login));
        tweetsController.setCurrentUser(login);
        tweetsController.login(login);
        renderMainUsers();
        setCheckFeedTweets();
      } else if (result.statusCode === 403) {
        errorName();
        return;
      } else {
        this._error(result);
      }
    } catch(err) {
    pageError(); 
    }
  }

  async postTweet(text) {
    let raw = JSON.stringify({
      "text": text
    });
  
    let requestOptions = {
      method: 'POST',
      headers: this._headers(),
      body: raw,
      redirect: 'follow'
    };
   
    try { 
      const result = await this._fetch(`${this.address}tweet`, requestOptions);    
      if (result.hasOwnProperty('statusCode')) {
        this._error(result);
      } else {
        tweetsController.tweetFeedView.clear();
        tweetsController.getFeed();
      } 
    } catch(err) {
      pageError(); 
    }
  }

  async putTweet(id, text) {
    let raw = JSON.stringify({
      "text": text
    });

    let requestOptions = {
      method: 'PUT',
      headers: this._headers(),
      body: raw,
      redirect: 'follow'
    };

    let url = `${this.address}tweet/`;
    url += id;

    try {
      const result = await this._fetch(url, requestOptions);    
      if (result.hasOwnProperty('statusCode')) {
        this._error(result);
      } else {
        tweetsController.tweetFeedView.clear();
        tweetsController.getFeed();
        setCheckFeedTweets();
      }
    } catch(err) {
      pageError(); 
    }
  }

  async postComment(id, text) {
    let raw = JSON.stringify({
      "text": text
    });
  
    let requestOptions = {
      method: 'POST',
      headers: this._headers(),
      body: raw,
      redirect: 'follow'
    };

    let url = `${this.address}tweet/`;
    url += id;
    url += '/comment';

    try {
      const result = await this._fetch(url, requestOptions);   
      if (result.hasOwnProperty('statusCode')) {
        this._error(result);
      } else {
        tweetsController.commentView.clear();
        result.comments.forEach((item) => {
          item.createdAt = new Date(item.createdAt);
        });
        tweetsController.commentView.display(result.comments);
      }
    } catch(err) {
      pageError(); 
    }
  }

  delete(id) {
    let requestOptions = {
      method: 'DELETE',
      headers: this._headers(),
      redirect: 'follow'
    };

    let url = `${this.address}tweet/`;
    url += id;
    
    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => {
        if (result === '') {
          tweetsController.tweetFeedView.clear();
          tweetsController.getFeed();
          setCheckFeedTweets();
        } else {
          try {
            const res = JSON.parse(result);
            if (res.hasOwnProperty('statusCode')) {
              this._error(res);
            }
          } catch(err) {
            pageError(); 
          }
        }
      })
      .catch(error => pageError());
  }

  _headers() {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${JSON.parse(localStorage.getItem('token'))}`);
    myHeaders.append("Content-Type", "application/json");
    return myHeaders;
  }

  _fetch(url, requestOptions) {
    return fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        return result;
      })
      .catch(error => pageError());
  }

  _error(result) {
    if (result.statusCode === 401) {
      pageLogIn();
      const main = document.querySelector('main');
      const errorToken = document.createElement('p');
      errorToken.innerHTML = 'Время вашей сессии истекло. Пожалуйста, войдите снова';
      errorToken.setAttribute('class', 'error-token');
      main.prepend(errorToken);
      localStorage.setItem('currentUser', JSON.stringify('Гость'));
      currentUser = JSON.parse(localStorage.getItem('currentUser'));
      localStorage.removeItem('token');
    } else {
      pageError();
    }
  }
}

function createLocalStorage() {
  if (localStorage.getItem('currentUser') === null){
    localStorage.setItem('currentUser', JSON.stringify('Гость'));
  }
}

createLocalStorage();
const tweetsController = new TweetsController();
const tweetFeedApiService = new TweetFeedApiService(url);
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
tweetsController.setCurrentUser(currentUser);
if (currentUser !== 'Гость') {
  renderMainUsers();
} else {
  renderMainGuest();
}
let checkFeedTweets;
setCheckFeedTweets();

function setCheckFeedTweets() {
  checkFeedTweets = setInterval(function() {
    tweetsController.tweetFeedView.clear();
    tweetsController.getFeed();
  }, 300*1000); 
}

document.addEventListener('click', (event) => {
  if (event.target.closest('#main-class')) {
    if (event.target.classList.contains('comments')) {
      const idTweet = event.target.parentNode.querySelector('.id').textContent;
      tweetsController.showTweet(idTweet);
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
          renderMainGuest();
          currentUser = JSON.parse(localStorage.getItem('currentUser'));
          tweetsController.setCurrentUser(currentUser);
          setCheckFeedTweets();
        });
      } else {
        const btnAddComment = document.querySelector('#add-comment');
        btnAddComment.addEventListener('click', (event) => {
          if(event.target.classList.contains('right-block__add-comment__btn')) {
            let textArea = document.querySelector('.right-block__add-comment__block'); 
            const text = textArea.value;
            const id = document.querySelector('.id').textContent;
            tweetsController.addComment(id, text);
            textArea.value = '';
          }
        }); 
        const btnS = document.querySelector('.left-block__btn');
        const mainBtn = document.createElement('button');
        mainBtn.setAttribute('class', 'tweet__btn-main header__btn')
        mainBtn.innerHTML = 'Главная';
        btnS.append(mainBtn);
        mainBtn.addEventListener('click', () => {
          pageMain();
          renderMainUsers();
          currentUser = JSON.parse(localStorage.getItem('currentUser'));
          tweetsController.setCurrentUser(currentUser);
          const addTweet = document.getElementById('add-tweet');
          addTweet.style.display = 'flex';
          setCheckFeedTweets();
        });
      }
    } else if (event.target.classList.contains('right-block__twit_edit')) {
      clearInterval(checkFeedTweets);
      const id = event.target.parentNode.previousSibling.parentNode.previousSibling.textContent;
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
        let sendText = newTextArea.value;
        let highlighted = sendText.replace(/(#\w+)/g, '<span class="hashtag">$1</span>');
        sendText = highlighted;
        tweetFeedApiService.putTweet(id, highlighted);
      });
    } else if (event.target.classList.contains('right-block__twit_delete')) {
      clearInterval(checkFeedTweets);
      const idDelete = event.target.parentNode.previousSibling.parentNode.previousSibling.textContent;
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
        setCheckFeedTweets();
      });
      window.addEventListener('click', (event) => {
        if (event.target == modal) {
          modal.style.display = 'none';
          setCheckFeedTweets();
        }
      });
      const btnDelete = document.querySelector('.btn-delete');
      btnDelete.addEventListener('click', btnClickDelete);
      function btnClickDelete() {
        tweetFeedApiService.delete(idDelete);
        modal.style.display = 'none';
        btnDelete.removeEventListener('click', btnClickDelete);
      }
      const btnCancel = document.querySelector('.btn-cancel');
      btnCancel.addEventListener('click', () => {
        modal.style.display = 'none';
        setCheckFeedTweets();
      });
    }
  } else if (event.target === document.querySelector('.header__btn-main')) {
    clearInterval(checkFeedTweets);
    pageLogIn();
  } else if (event.target === document.querySelector('.header__btn-reg')) {
    clearInterval(checkFeedTweets);
    pageLogUp();
  } else if (event.target === document.querySelector('#right-block__chat__btn')) {
    clearInterval(checkFeedTweets);
    const mainBlock = document.querySelectorAll('#main-class');
    main = mainBlock;
    const loadTweets = document.querySelector('#right-block__chat__btn'); 
    tweetsController.tweetFeedView.clear();
    tweetsController.getFeed(0, 10 + mainBlock.length);
    if (currentUser === 'Гость') {
      const addTweet = document.getElementById('add-tweet');
      const addComment = document.getElementById('comment-id');
      addComment.setAttribute('class', 'disappear');
      addTweet.setAttribute('class', 'disappear');
    }
    compareLengths(0, 1000000, filterConfig, loadTweets);
  } else if (event.target.parentNode === document.querySelector('#add-tweet')) { 
    clearInterval(checkFeedTweets);
    if (event.target === document.querySelector('.right-block__add-twit__btn')) {
      let textArea = document.querySelector('.right-block__add-twit-block'); 
      let text = textArea.value;
      let highlighted = text.replace(/(#\w+)/g, '<span class="hashtag">$1</span>');
      text = highlighted;
      textArea.value = '';
      tweetsController.addNewTweet(highlighted);
      setCheckFeedTweets();
    }
  } else if(event.target.closest('.first') || event.target.closest('.second')) {
    const firstPas = document.querySelector('.first');
    firstPas.style.border = '0.125rem solid #6e9485';
    const secondPas = document.querySelector('.second');
    secondPas.style.border = '0.125rem solid #6e9485';
    if(!document.querySelector('#new-pass').classList.contains('disappear')){
      const newP = document.querySelector('#new-pass');
      newP.classList.toggle('disappear')
    }
  } else if(event.target.closest('.form__name') || event.target.closest('.form__password')) {
    const firstPas = document.querySelector('.form__name');
    firstPas.style.border = '0.125rem solid #6e9485';
    if (!document.querySelector('#new-p').classList.contains('disappear')) {
      const newP = document.querySelector('#new-p');
      newP.classList.toggle('disappear')
    }
  } else if (event.target === document.querySelector('.right-block')) {
    setCheckFeedTweets();
  } else if (event.target === document.querySelector('.right-block__chat__btns')) {
    const mainBlock = document.querySelectorAll('#main-class');
    main = mainBlock;
    tweetsController.filterView.getFilterTweets(0, mainBlock.length + 10, filterConfig);
    if (currentUser === 'Гость') {
      const addTweet = document.getElementById('add-tweet');
      addTweet.setAttribute('class', 'disappear');
    }
    const loadFilters = document.querySelector('.right-block__chat__btns');
    compareLengths(0, 1000, filterConfig, loadFilters);
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
          <button class="right-block__chat__btns">Загрузить еще</button>
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
      <div class="btns">
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
        <p id="new-p" class="disappear">Неверный логин или пароль</p>
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
    renderMainGuest();
    setCheckFeedTweets();
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
    <div class="btns">
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
      <p id="new-p" class="disappear">Пользователь уже существует</p>
      <input type="password" required placeholder="Введите пароль" class="form__password first">
      <input type="password" required placeholder="Подтвердите пароль" class="form__password second">
      <p id="new-pass" class="disappear">Пароли не совпадают</p>
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
    renderMainGuest();
    setCheckFeedTweets();
  });
  logBtn.addEventListener('click', () => {
    pageLogIn();
  });
}

function pageError() {
  const head = document.getElementsByTagName('head')[0];
  head.innerHTML = `<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="assets/css/reset.css">
  <link rel="stylesheet" href="assets/css/error.css">
  <title>Error</title>`;
  document.body.innerHTML = `<div class="wrapper">
  <header class="header__desktop">
    <img src="assets/img/logo_.svg" alt="logotype">
    <div>
      <button class="header__btn" onclick="redirectPageMain();">
        Главная
      </button>
    </div>
  </header>
  <header class="header__mobile">
    <img src="assets/img/logo_mobile.svg" alt="logo" class="header__mobile__logo">
    <div>
      <button class="header__btn header__btn-main header__mobile__btn" onclick="redirectPageMain();">
        Главная
      </button>
    </div>
  </header>
  <main>
    <div class="main__pic">
      <svg id="error" width="371" height="389" viewBox="0 0 371 389" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="main__pic__error"
          d="M164.16 142.7C173.701 152.496 180.655 164.512 184.395 177.665H210V222.68H184.395C180.659 235.844 173.705 247.87 164.16 257.675L176.985 279.875L138.015 302.375L125.22 280.175C111.953 283.521 98.0623 283.521 84.795 280.175L71.985 302.375L33.015 279.875L45.84 257.675C36.2948 247.87 29.3406 235.844 25.605 222.68H0V177.68H25.605C29.3406 164.516 36.2948 152.49 45.84 142.685L33 120.5L71.955 98H72L84.81 120.17C98.0773 116.824 111.968 116.824 125.235 120.17L138 98H138.03L177 120.5L164.175 142.7H164.16ZM150 200.18C150 188.245 145.259 176.799 136.82 168.36C128.381 159.921 116.935 155.18 105 155.18C93.0653 155.18 81.6193 159.921 73.1802 168.36C64.7411 176.799 60 188.245 60 200.18C60 212.115 64.7411 223.561 73.1802 232C81.6193 240.439 93.0653 245.18 105 245.18C116.935 245.18 128.381 240.439 136.82 232C145.259 223.561 150 212.115 150 200.18Z"
          fill="white" />
        <path class="main__pic__error"
          d="M307.889 274.237C309.957 283.783 309.619 293.694 306.903 303.076L322.41 312.772L305.364 340.035L289.857 330.339C282.609 336.897 273.843 341.547 264.349 343.871L263.71 362.173L231.588 361.042L232.245 342.752C222.943 339.754 214.53 334.494 207.762 327.443L191.597 336.038L176.516 307.653L192.69 299.065C190.622 289.512 190.964 279.595 193.687 270.208L178.179 260.511L195.22 233.258L210.727 242.954C217.975 236.396 226.741 231.745 236.235 229.422L236.859 211.124L268.973 212.248L269 212.265L268.363 230.543C277.665 233.541 286.078 238.801 292.846 245.852L308.972 237.258L308.99 237.27L324.072 265.654L307.898 274.243L307.889 274.237ZM277.546 303.687C282.065 296.459 283.528 287.731 281.613 279.425C279.698 271.118 274.561 263.912 267.333 259.392C260.105 254.873 251.377 253.41 243.07 255.325C234.763 257.241 227.558 262.377 223.038 269.606C218.519 276.834 217.056 285.561 218.971 293.868C220.886 302.175 226.023 309.381 233.251 313.9C240.479 318.42 249.207 319.883 257.514 317.967C265.821 316.052 273.026 310.915 277.546 303.687Z"
          fill="white" />
        <path class="main__pic__error"
          d="M277.259 49.4054C287.808 52.7585 297.358 58.6837 305.047 66.6471L323.328 56.8766L340.505 89.015L322.224 98.7855C324.581 109.609 324.205 120.849 321.131 131.491L338.759 142.447L319.522 173.381L301.916 162.414C293.721 169.866 283.804 175.166 273.055 177.84L272.38 198.578L235.972 197.384L236.657 176.641C226.101 173.283 216.547 167.35 208.857 159.377L190.576 169.148L173.405 137.02L191.685 127.25C189.329 116.426 189.705 105.186 192.779 94.5439L175.146 83.6045L194.372 52.676L194.404 52.6588L212.01 63.5989C220.205 56.1473 230.122 50.8469 240.871 48.1733L241.525 27.4742L241.546 27.4627L277.954 28.6562L277.269 49.3996L277.259 49.4054ZM289.083 95.8463C284.528 87.3255 276.776 80.9629 267.531 78.158C258.285 75.3532 248.304 76.3359 239.784 80.89C231.263 85.4441 224.9 93.1966 222.095 102.442C219.29 111.687 220.273 121.668 224.827 130.189C229.381 138.71 237.134 145.072 246.379 147.877C255.625 150.682 265.605 149.699 274.126 145.145C282.647 140.591 289.01 132.839 291.815 123.593C294.619 114.348 293.637 104.367 289.083 95.8463Z"
          fill="white" />
      </svg>
      <svg id="error__mobile" width="207" height="210" viewBox="0 0 207 210" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path class="main__pic__error"
          d="M85.9254 90.7267C91.2107 92.3539 96.008 95.2705 99.8852 99.2136L108.973 94.25L117.699 110.226L108.612 115.19C109.838 120.586 109.701 126.203 108.214 131.533L117.069 136.926L107.6 152.466L98.7553 147.067C94.6953 150.827 89.7654 153.519 84.408 154.904L84.1651 165.266L65.9724 164.835L66.2206 154.47C60.9322 152.84 56.1327 149.92 52.255 145.972L43.1674 150.936L34.4439 134.965L43.5315 130.001C42.3054 124.605 42.4421 118.988 43.9292 113.658L35.0714 108.274L44.5353 92.7365L44.5513 92.7278L53.3955 98.1129C57.4556 94.3534 62.3855 91.6607 67.7429 90.2763L67.9756 79.9334L67.9862 79.9275L86.1789 80.3586L85.9308 90.7238L85.9254 90.7267ZM92.0427 113.872C89.729 109.636 85.8275 106.493 81.1964 105.134C76.5653 103.775 71.5839 104.311 67.3481 106.625C63.1123 108.938 59.9691 112.84 58.6099 117.471C57.2507 122.102 57.7869 127.083 60.1005 131.319C62.4141 135.555 66.3156 138.698 70.9467 140.057C75.5779 141.417 80.5592 140.88 84.795 138.567C89.0308 136.253 92.1741 132.352 93.5333 127.72C94.8924 123.089 94.3563 118.108 92.0427 113.872Z"
          fill="black" />
        <path class="main__pic__error"
          d="M162.436 109.548C165.021 112.535 166.822 116.118 167.677 119.975L175.06 120.41L174.295 133.39L166.912 132.955C165.611 136.688 163.401 140.038 160.482 142.703L163.803 149.322L152.183 155.148L148.871 148.529C144.988 149.268 140.983 149.032 137.214 147.842L133.143 154.026L122.288 146.876L126.363 140.692C123.778 137.703 121.977 134.116 121.123 130.257L113.74 129.822L114.504 116.846L121.888 117.281C123.189 113.548 125.398 110.198 128.317 107.533L124.992 100.918L136.607 95.0918L136.62 95.0926L139.937 101.703C143.82 100.964 147.826 101.2 151.594 102.39L155.652 96.2142L155.661 96.2147L166.516 103.365L162.44 109.549L162.436 109.548ZM157.376 125.883C157.579 122.441 156.406 119.06 154.116 116.483C151.826 113.906 148.606 112.345 145.165 112.142C141.723 111.939 138.342 113.112 135.765 115.402C133.188 117.692 131.626 120.912 131.424 124.353C131.221 127.795 132.393 131.176 134.684 133.753C136.974 136.33 140.194 137.891 143.635 138.094C147.077 138.297 150.458 137.124 153.035 134.834C155.612 132.544 157.173 129.324 157.376 125.883Z"
          fill="black" />
        <path class="main__pic__error"
          d="M107.98 35.6905C112.374 34.8355 116.912 35.0871 121.185 36.4228L125.779 29.4114L138.106 37.4878L133.512 44.4993C136.446 47.8841 138.492 51.9461 139.464 56.319L147.844 56.7902L147.013 71.4983L138.639 71.0189C137.175 75.2523 134.682 79.0559 131.386 82.0886L135.166 89.5794L122.013 96.2138L118.235 88.7188C113.838 89.5735 109.297 89.32 105.022 87.9811L100.428 94.9926L88.1056 86.9188L92.6995 79.9073C89.7651 76.5226 87.7195 72.4605 86.7473 68.0877L78.3686 67.6233L79.1966 52.9193L79.2047 52.9069L87.5738 53.3768C89.0379 49.1435 91.5301 45.3398 94.8268 42.3072L91.0462 34.834L91.0516 34.8258L104.205 28.1915L107.983 35.6864L107.98 35.6905ZM121.179 49.8809C117.911 47.7396 113.926 46.9842 110.101 47.781C106.276 48.5778 102.924 50.8614 100.783 54.1296C98.6418 57.3977 97.8865 61.3826 98.6833 65.2076C99.4801 69.0326 101.764 72.3845 105.032 74.5258C108.3 76.6671 112.285 77.4224 116.11 76.6256C119.935 75.8288 123.287 73.5452 125.428 70.2771C127.569 67.009 128.325 63.0241 127.528 59.1991C126.731 55.374 124.447 52.0222 121.179 49.8809Z"
          fill="black" />
      </svg>

      <div>
        <h1>404</h1>
        <h2>Произошла ошибка</h2>
        <h2 onclick="redirectPageMain();" style="cursor: pointer;">
          Пожалуйста перейдите на www.talker.com
        </h2>
      </div>
    </div>
  </main>

  <footer>
    <h5>Версия 1.0</h5>
    <h5 class="footer__copyright">© Алеся Брановицкая</h5>
    <a href="mailto:alesun4ik@gmail.com">alesun4ik@gmail.com</a>
  </footer>
</div>`
}

function errorName() {
  const nameInp = document.querySelector('.form__name');
  nameInp.style.border = '0.125rem solid #ff8d8d';
  const newP = document.querySelector('#new-p');
  newP.classList.toggle('disappear');
}

function redirectLogIn() {
  const name = document.querySelector('.form__name');
  login = name.value;
  const passwordInput = document.querySelector('.form__password');
  password = passwordInput.value;
  tweetFeedApiService.postLogin(login, password);
}

function redirectLogUp() {
  const firstPas = document.querySelector('.first');
  const secondPas = document.querySelector('.second');
  if (firstPas.value !== secondPas.value) {
    firstPas.style.border = '0.125rem solid #ff8d8d';
    secondPas.style.border = '0.125rem solid #ff8d8d';
    const newP = document.querySelector('#new-pass');
    newP.classList.toggle('disappear');
    return;
  }
  const name = document.querySelector('.form__name');
  log = name.value;
  pass = secondPas.value;
  tweetFeedApiService.postRegistration(log, pass);
}

function redirectPageMain() {
  if (currentUser === 'Гость') {
    pageMain();
    renderMainGuest();
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    tweetsController.setCurrentUser(currentUser);
  } else {
    pageMain();
    renderMainUsers();
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    tweetsController.setCurrentUser(currentUser);
    const addTweet = document.getElementById('add-tweet');
    addTweet.style.display = 'flex';
  }
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
  button.addEventListener('click', (event) => {
    if (event.target.closest('.left-block__footer__btn')) {
      localStorage.setItem('currentUser', JSON.stringify('Гость'));
      tweetsController.filterView.display();
      pageMain(); 
      renderMainGuest();
      currentUser = JSON.parse(localStorage.getItem('currentUser'));
      tweetsController.setCurrentUser(currentUser); 
      localStorage.removeItem('token');
      const addTweet = document.getElementById('add-tweet');
      const addComment = document.getElementById('comment-id');
      addComment.setAttribute('class', 'disappear');
      addTweet.setAttribute('class', 'disappear');
    }
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

function formatDate(date) {
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

async function compareLengths(skip, top, filterConfig, btn) {
  try {
    const array = await tweetFeedApiService.get(skip, top, filterConfig);
    array.forEach((item) => {
      item.createdAt = new Date(item.createdAt);
      item.comments.forEach((item) => {
        item.createdAt = new Date(item.createdAt);
      })
    });
    if (array.length === main.length) {
      btn.setAttribute('style', 'display: none;');
    } 
  } catch(err) {
    pageError(); 
  }
}