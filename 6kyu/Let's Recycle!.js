// Let's Recycle!.js

// https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript

function recycle(array) {
  let materials = ['paper', 'glass', 'organic', 'plastic'];
  return materials.map((item) =>
    array
      .filter((element) => element.material === item || element.secondMaterial === item)
      .map((element) => element.type)
  );
}
