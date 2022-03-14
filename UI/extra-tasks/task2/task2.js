let prices = [10006,4,1,5,3,6,4];
function getProfit(prices) {
  if(prices.length >= 1 && prices.length <= 3 * 10 ** 4) {
    let prof = 0;
    for (let i = 0; i < prices.length; i++) {
      if((prices[i] >= 0 && prices[i] <= 10 ** 4) && (prices[i+1] >= 0 && prices[i+1] <= 10 ** 4)){
        if(prices[i+1] < prices[i]){
          continue;
        }
        else if (prices[i+1] > prices[i]){
          prof += prices[i+1] - prices[i];
        } 
      }
    }
    return prof;
  }
  else {
    alert('Массив не соответствует заданию')
  }
}

//console.log(getProfit(prices));