'use strict';

let arr =['2564', '48975', '132178', '97456', '23579', '9875', '356'];

arr.forEach((item) => {
    if (item[0] === '2' || item[0] === '4') {
        console.log(item);
    }
});


// for (let i = 0; i <=100; i++) {

// }

loop:
for (let i = 2; i <= 100; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
        continue loop;
    }
  }
  console.log(i + ` : Делители этого числа: 1 и ${i}`);
}