let arr = [7,1,5,3,6,4]
//нашли миним число и продали по этой цене
let minPrice = Math.min(...arr);
let indexMinPrice = arr.indexOf(Math.min.apply(null,arr));
//написать цикл 
if(arr[indexMinPrice] < arr[indexMinPrice+1]){
  let sum = arr[indexMinPrice+1] - arr[indexMinPrice] 
  //console.log(sum)
  if (sum > arr[indexMinPrice+2] || arr[indexMinPrice+2] > arr[indexMinPrice+3]) {
   let sum2 = arr[indexMinPrice+3]  - arr[indexMinPrice+2]
  console.log(sum+sum2)
}
  
}



arr = arr.slice(indexMinPrice)
let maxPrice = Math.max(...arr);
//let indexMaxPrice = arr.indexOf(Math.max.apply(null,arr));
let sum = maxPrice - minPrice
//console.log(maxPrice);