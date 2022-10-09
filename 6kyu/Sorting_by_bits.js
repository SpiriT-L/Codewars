// Sorting by bits

// https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/javascript

let arr = [3, 8, 3, 6, 5, 7, 9, 1];

function sortByBit(arr) {
  const bitConversion = (bit) => bit.toString(2).replace(/[0]/g, '').length;

  const result = arr.sort((a, b) =>
    bitConversion(a) === bitConversion(b)
      ? a - b
      : bitConversion(a) - bitConversion(b)
  );

  return result;
}
