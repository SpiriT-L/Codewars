// function getStack() {
//   let stack = [];
//   stack.push('hi');
//   stack.push('hiш');
//   stack.push('hiш3');

//   // while(stack.length){
//   //   let operation = stack.pop
//   // }

//   return stack;
// }

// console.log(getStack());

let l = [3, 1, 2, 3, 4, 5],
  k = 3;
//  the output should be [1, 2, 4, 5]

function removeKFromList(l, k) {
  if (!l) return null;
  if (l === k) {
    return removeKFromList(l.next, k);
  } else {
    let result = new List(l.value);
    result.next = removeKFromList(l.next, k);
    return result;
  }
}
