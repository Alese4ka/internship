let arr = [-2,1,-3,4,-1,2,1,-5,4];
//находим индекс максимального числа
let maxIndex = arr.indexOf(Math.max.apply(null,arr));
//отрезаем массив от максимального числа
let newArr = arr.slice(maxIndex);
//создаем массив куда будем отправлять суммы чисел полученные от массивов
let sumArray = [];
//проходим массив каждый раз его изменяя, начиная с максимального числа и до последжнего индекса, 
//потом с макс и до предпоследнего и так далее
for (let i = newArr.length - 1; i > 0; i--){
  let sum = newArr.slice(0,i).reduce(function(previousValue, currentValue, index, array){
    return previousValue + currentValue;
  });
  sumArray.push(sum);
}
let maxSum = Math.max(...sumArray);
console.log(maxSum);

//массив полученных сумм
//console.log(sumArray);
//находим индекс макс числа
//let maxIndexSumArray = sumArray.indexOf(Math.max.apply(null,sumArray));
//находим само макс число
//let maxSum = Math.max(...sumArray);
//console.log(maxSum);
//получаем подмассив //нарезаем массив начиная от максимального числа и до конца массива,
//конец массива получаем = длина массива - 1 - индекс максимального элемента. 
//Получается что количество элементов - тот номер итерации,на котором получилось макс число
//console.log(arr.slice(maxIndex,arr.length-1-maxIndexSumArray));