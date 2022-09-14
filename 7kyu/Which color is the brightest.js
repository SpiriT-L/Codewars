// https://www.codewars.com/kata/62eb800ba29959001c07dfee

function brightest(colors) {
  let colorParametr = 0;
  let maxValue = 0;

  for (let i = 0; i < colors.length; i++) {
    let color = colors[i],
      r = parseInt(color.slice(1, 3), 16),
      g = parseInt(color.slice(3, 5), 16),
      b = parseInt(color.slice(5, 7), 16),
      value = Math.max(r, g, b);
    if (value > maxValue) {
      maxValue = value;
      colorParametr = i;
    }
  }
  return colors[colorParametr];
}

console.log(brightest(["#00FF00", "#FFFF00"]));