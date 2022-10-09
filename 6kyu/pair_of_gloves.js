// Pair of gloves
// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript

function numberOfPairs(gloves) {
  let drawer = {};

  for (let i = 0; i < gloves.length; i++) {
    if (!drawer[gloves[i]]) {
      drawer[gloves[i]] = 1;
    } else {
      drawer[gloves[i]] = drawer[gloves[i]] + 1;
    }
  }

  let result = 0;

  Object.keys(drawer).forEach(
    (element) => (result += Math.floor(drawer[element] / 2))
  );

  return result;
}
