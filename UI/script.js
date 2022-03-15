'use strict';

const tweets = [
  { id: '1', 
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro #datamola',
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
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #datamola',
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
  function getTweets(skip = 0, top = 10, filterConfig = {}) {
    let array = [];
    filterConfig.author = filterConfig.author ? filterConfig.author : '';
    filterConfig.dateFrom = filterConfig.dateFrom ? new Date(filterConfig.dateFrom) : null;
    filterConfig.dateTo = filterConfig.dateTo ? new Date(filterConfig.dateTo) : null;
    filterConfig.text = filterConfig.text ? filterConfig.text : '';
    if (filterConfig.hashtags === undefined){
      return tweets
        .slice(skip, skip+top)
        .filter(tweets => tweets.author.toLowerCase().indexOf(filterConfig.author.toLowerCase()) !== -1)
        .filter(({ createdAt }) => {
          return !((filterConfig.dateFrom && filterConfig.dateFrom > createdAt) || (filterConfig.dateTo && filterConfig.dateTo < createdAt));
        })
        .filter(tweets => tweets.text.toLowerCase().indexOf(filterConfig.text.toLowerCase()) !== -1)
        .sort((a, b) => b.createdAt - a.createdAt);
    }
    else {
      for(let i = 0; i < filterConfig.hashtags.length; i++){
        array = array.concat(tweets.filter(tweets => tweets.text.toLowerCase().indexOf(filterConfig.hashtags[i].toLowerCase()) !== -1));
      }
      return array
      .slice(skip, skip+top)
        .filter(tweets => tweets.author.toLowerCase().indexOf(filterConfig.author.toLowerCase()) !== -1)
        .filter(({ createdAt }) => {
          return !((filterConfig.dateFrom && filterConfig.dateFrom > createdAt) || (filterConfig.dateTo && filterConfig.dateTo < createdAt));
        })
        .filter(tweets => tweets.text.toLowerCase().indexOf(filterConfig.text.toLowerCase()) !== -1)
        .sort((a, b) => b.createdAt - a.createdAt);
    }
  }
  function getTweet(id) {
    for(let i = 0; i < tweets.length; i++){
      if (tweets[i].id === String(id)){
        return tweets[i];
      }
    }
  }
  function validateTweet(tw) {
    if (typeof tw.id === 'string' && typeof tw.text === 'string' && toString.call(tw.createdAt) === "[object Date]" && typeof tw.author === 'string' && tw.comments instanceof Array) 
      return true;
      return false; 
  }
  function addTweet(text){
    let item = {
      id: String(+(tweets[tweets.length-1].id)+1),
      text: text,
      createdAt: new Date(),
      author: user,
      comments: []
    };
    if (validateTweet(item) && item.author === user) { 
      tweets.push(item);
      return true;
    }
      return false;
  }
  function editTweet(id, text){
    for(let i = 0; i < tweets.length; i++){
      if (validateTweet(tweets[i]) && tweets[i].id === String(id) && tweets[i].author === user){
        tweets[i].text = text;
        return true;
      }
    }
    return false;
  }
  function removeTweet(id) {
    for(let i = 0; i < tweets.length; i++){
      if (validateTweet(tweets[i]) && tweets[i].id === String(id) && tweets[i].author === user){
        tweets.splice(i,1);
        return true;
      }
    }
    return false;
  }
  function validateComment(com) {
    if (typeof com.id === 'string' && typeof com.text === 'string' && toString.call(com.createdAt) === "[object Date]" && typeof com.author === 'string') 
      return true;
      return false;
  }
  function addComment(id, text){
    for(let i = 0; i < tweets.length; i++){
      if (tweets[i].id === String(id)){
        let item = {
          id: String(+(tweets[tweets.length-1].comments[tweets[tweets.length-1].comments.length-1].id)+1),
          text: text,
          createdAt: new Date(),
          author: user,
        };
        if (validateComment(item)) {
          tweets[i].comments.push(item);
          return true;
        }
        return false;
      }
      return false;
    }
  }
  function changeUser(usr){
    user = usr;
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
    changeUser,
  };
  })();
  
  //console.log(myModule.getTweets(0,10)); 
  //console.log(myModule.getTweets(0,10, {author: 'Anna'}));
  //console.log(myModule.getTweets(10, 10, {author: 'Алеся', dateFrom: new Date('2022-03-11T09:30:00'), dateTo: new Date('2022-03-13T09:30:00'), hashtags: ['#intro', '#datamola'], text: 'sum'})); 
  //console.log(myModule.getTweet(20)); 
  /*console.log(myModule.validateTweet({ id: '20', 
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
  }));*/
  //console.log(myModule.addTweet('hello')); 
  //console.log(myModule.editTweet(4,'text')); 
  //console.log(myModule.removeTweet(1));
  /*console.log(myModule.validateComment({ id: '919',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type #make #intro',
        createdAt: new Date('2022-03-13T12:30:00'),
        author: 'Анджелина Джоли',
      }));*/
  //console.log(myModule.addComment(1,'hello'));
  //console.log(myModule.changeUser('Alesya'));