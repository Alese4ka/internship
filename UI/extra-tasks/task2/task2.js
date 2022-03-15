'use strict';

function getProfit(prices) {
  if(prices.length >= 1 && prices.length <= 3 * 10 ** 4) {
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
      if((prices[i] >= 0 && prices[i] <= 10 ** 4) && (prices[i+1] >= 0 && prices[i+1] <= 10 ** 4)){
        if(prices[i+1] < prices[i]){
          continue;
        }
        else if (prices[i+1] > prices[i]){
          profit += prices[i+1] - prices[i];
        } 
      }
    }
    return profit;
  }
  else {
    alert('Массив не соответствует заданию');
  }
}

//console.log(getProfit([7, 1, 5, 3, 6, 4]));