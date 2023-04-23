// task1
// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

// function giveParcel() {
// alert(`${peopleWaiting.shift()} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек`);
// };
// giveParcel( peopleWaiting.length);
// giveParcel(peopleWaiting.length);
// giveParcel(peopleWaiting.length);

// function leaveQueueWithoutParcel() {
//     alert(`${peopleWaiting.pop()} не получил(а) посылку и ушел(ла)`);
//     };
// leaveQueueWithoutParcel(peopleWaiting[peopleWaiting.length-1]);
// leaveQueueWithoutParcel(peopleWaiting[peopleWaiting.length-1]);
// leaveQueueWithoutParcel(peopleWaiting[peopleWaiting.length-1]);
// leaveQueueWithoutParcel(peopleWaiting[peopleWaiting.length-1]);

// task2


// function getSumOfSequence(number) {
//     const array=[];
//     let sum;
//     for (let i=1; i < number; i++){
//     array.push(i)
//     sum = array[1]+array[array.length-1];
//   }
// return sum}

// console.log(getSumOfSequence(5));

// Task3

// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// coffeeName = prompt(`Поиск кофе по названию`);
// coffeeName=coffeeName.toLocaleLowerCase();
// const coffe = coffees.some((item) => {
//     return item.toLocaleLowerCase() === coffeeName.toLocaleLowerCase();
// })

// if(coffe == true){ 
//     const number = coffees.findIndex((item)=>{
//         return item.toLocaleLowerCase() === coffeeName.toLocaleLowerCase();
//     });
//     alert(`Держите ваш любимый кофе ${coffeeName.charAt(0).toUpperCase() + coffeeName.slice(1)}, Он ${number+1}-й по популярности в нашей кофейне.`)}
// else {alert(`К сожалению, такого вида кофе нет в наличии`)}

// Task4

// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const prices = [1.5, 1, 2];
// const updatedPrices = prices.map((item) =>
// {return item+0.5});
// coffees.forEach((item, index, array) => {
//     const price = updatedPrices[index]
//     alert(`Кофе ${item} сейчас стоит ${price} евро.`)
//     })

// Task5

// let  clientsEstimations = [];

// function askClientToGiveEstimation() {
//  const t = Number(prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`));
//  if (t>0 && t<=10){
//  clientsEstimations.push(t)}
// return clientsEstimations;
// }
// for (i=0; i<5; i++){
// askClientToGiveEstimation();  
// }
// const goodEstimations = clientsEstimations.filter(clientsEstimations => clientsEstimations > 5);
// const notGoodEstimations = clientsEstimations.filter(clientsEstimations => clientsEstimations <= 5);

// alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`)

// task 6


// const numbers = [10, 4, 100, -5, 54, 2];

// // 1. Через цикл for
// let sum=0;
// for (let i = 0; i < numbers.length; i++) {
//  sum += Math.pow(numbers[i], 3)
//  };
// console.log('FOR', sum); 

// //   2. Через цикл for..of
// let sum1=0;
//   for (const item of numbers) {
//     sum1 += Math.pow(item, 3);
//     };
//     console.log('FOR OF', sum1); 

// // 3.Через метод forEach()
//     let sum2=0;
//     numbers.forEach ((element) => {
//         sum2 += Math.pow(element, 3);
//     })
//     console.log('ForEach', sum2); 

// // 4.Через метод reduce()
// const sum3 = numbers.reduce((acc, item) => {
//         return acc += Math.pow(item, 3);
//     }, 0);
//     console.log('reduce', sum3); 