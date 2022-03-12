'use strict';

const tweets = [
  { id: '1', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-02-16T03:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      { id: '901',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-02-17T05:30:00'),
        author: 'Анджелина Джоли',
      },
      { id: '902',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-02-18T15:30:00'),
        author: 'Анджелина Джоли',
      },
      { id: '903',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-02-19T19:30:00'),
        author: 'Анджелина Джоли',
      }
    ]
  },
  { id: '2', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-02-21T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [
      { id: '904',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-02-22T17:30:00'),
        author: 'Алеся Брановицкая',
      }
    ]
  },
  { id: '3', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-02-24T03:30:00'),
    author: 'Анджелина Джоли',
    comments: []
  },
  { id: '4', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-02-25T03:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      { id: '905',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-02-27T05:30:00'),
        author: 'Анджелина Джоли',
      },
      { id: '906',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-02-28T15:30:00'),
        author: 'Анджелина Джоли',
      }
    ]
  },
  { id: '5', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-01T03:30:00'),
    author: 'Анджелина Джоли',
    comments: []
  },
  { id: '6', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-02T03:30:00'),
    author: 'Анджелина Джоли',
    comments: []
  },
  { id: '7', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-03T03:30:00'),
    author: 'Алеся Брановицкая',
    comments: []
  },
  { id: '8', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-04T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [
      { id: '907',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-05T05:30:00'),
        author: 'Алеся Брановицкая',
      },
      { id: '908',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-06T15:30:00'),
        author: 'Алеся Брановицкая',
      }
    ]
  },
  { id: '9', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-07T03:30:00'),
    author: 'Анджелина Джоли',
    comments: []
  },
  { id: '10', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-08T03:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      { id: '909',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-09T05:30:00'),
        author: 'Анджелина Джоли',
      },
      { id: '910',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-09T18:30:00'),
        author: 'Анджелина Джоли',
      }
    ]
  },
  { id: '11', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-09T23:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      { id: '911',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-10T05:30:00'),
        author: 'Анджелина Джоли',
      },
      { id: '912',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-10T15:30:00'),
        author: 'Анджелина Джоли',
      },
      { id: '913',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-10T19:30:00'),
        author: 'Анджелина Джоли',
      }
    ]
  },
  { id: '12', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-10T21:30:00'),
    author: 'Анджелина Джоли',
    comments: [
      { id: '914',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-10T22:30:00'),
        author: 'Алеся Брановицкая',
      }
    ]
  },
  { id: '13', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-10T23:30:00'),
    author: 'Анджелина Джоли',
    comments: []
  },
  { id: '14', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-11T03:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      { id: '915',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-11T05:30:00'),
        author: 'Анджелина Джоли',
      },
      { id: '916',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-11T08:30:00'),
        author: 'Анджелина Джоли',
      }
    ]
  },
  { id: '15', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-11T11:30:00'),
    author: 'Анджелина Джоли',
    comments: []
  },
  { id: '16', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-11T13:30:00'),
    author: 'Анджелина Джоли',
    comments: []
  },
  { id: '17', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-11T14:30:00'),
    author: 'Алеся Брановицкая',
    comments: []
  },
  { id: '18', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-12T03:30:00'),
    author: 'Анджелина Джоли',
    comments: [
      { id: '917',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-12T05:30:00'),
        author: 'Алеся Брановицкая',
      },
      { id: '918',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-12T09:30:00'),
        author: 'Алеся Брановицкая',
      }
    ]
  },
  { id: '19', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-12T12:30:00'),
    author: 'Анджелина Джоли',
    comments: []
  },
  { id: '20', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
    createdAt: new Date('2022-03-13T09:30:00'),
    author: 'Алеся Брановицкая',
    comments: [
      { id: '919',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-13T12:30:00'),
        author: 'Анджелина Джоли',
      },
      { id: '920',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-13T18:30:00'),
        author: 'Анджелина Джоли',
      }
    ]
  },
];

const myModule = (function() {
  let user = 'Алеся Брановицкая';
  function getTweet(id) {
    return tweets[id-1];
  }
  /*filterConfig = {
      author: 'Anna', 
      dateFrom: new Date('2022-03-10T18:30:00'),
      dateTo: new Date('2022-03-13T18:30:00'),
      hashtags: #main,
      text: 'hello' 
  }*/
  //getTweets(skip, top, filterConfig)
  function getTweets(skip, top, filterConfig) {
//сортируем от большей к меньшей дате
    tweets = tweets.sort((a, b) => a.filterConfig.dateFrom - b.filterConfig.dateTo);
//потом по автору
    tweets = tweets.filter(tweet => tweet.author === filterConfig.author);
//потом по хэштегу
    tweets = tweets.filter(tweet => tweet.text === filterConfig.hashtags);
//потом по тексту
    tweets = tweets.filter(tweet => tweet.text === filterConfig.text);
    //потом skip
    tweets.slice(skip,top)
    //потом top
  }
  function validateTweet(tw) {
    if (tw?.id?.text?.createdAt?.author?.comments !== undefined) {
      return true;
    }
    else {
     return false;
    }
  }
  function addTweet(text){
    let item = {
      id: tweets.length,
      text: text,
      createdAt: new Date(),
      author: user,
      comments: []
    }
    console.log(item)
    return tweets.push(item);
    //проверить валидацию
    //надо ли return
    //как сделать генерацию id
  }
  function editTweet(id, text){
    if (tweets[id-1].author === user) {
      tweets[id-1].text = text
      return true
    }
    else {
     return false
    }
  }
  function removeTweet(id, user) {
    if (tweets[id-1].author === user) {
      let removed = tweets.splice(id-1,1)
      return true
    }
    else {
     return false
    }
  }
  function validateComment(com) {
    if (com?.id?.text?.createdAt?.author !== undefined) {
      return true
    }
    else {
     return false
    }
  }
  function addComment(id, text){
    let item = {
      id: Math.floor(Math.random() * id),
      text: text,
      createdAt: new Date(),
      author: user
  }
  console.log(item)
    return tweets[id-1].comments.push(item);
    //проверить валидацию
    //надо ли return
    //как сделать генерацию id +-
  }
  //void?
  // function changeUser(usr){
  //   console.log(user)
  //   user  = usr;
  //   return usr
  // }
  function changeUser(usr){
    void function () {
      user = usr;
      return usr;
    }
  }
  return {
    getTweets,
    getTweet,
    validateTweet,
    addTweet,
    editTweet,
    removeTweet,
    validateComment,
    addComment,
    changeUser
  };
  })();

  
  //console.log(myModule.getTweet(id));
  //console.log(myModule.validateTweet(tw));
  //console.log(myModule.removeTweet(id));
  //console.log(myModule.changeUser('Alesya'));