let array = [21, 10, 22, 23, 18, 24, 15, 25, 5, 26];

function logEachElement(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i} : ${array[i]}`);
  }
}
// logEachElement(array)

function findSum(array) {
  logEachElement(array);

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log(`${sum}`);
}
// findSum(array);

function findMin(array) {
  let min = array.length ? array[0] : 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  console.log(`${min}`);
}
// findMin(array);

function findMax(array) {
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  console.log(`${max}`);
}
findMax(array);

function findAvg(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  let avg = array.length ? sum / array.length : 0;

  console.log(`${avg}`);
}
// findAvg(array);
