// strCount({
//   first:  "1",
//   second: "2",
//   third:  false,
//   fourth: ["anytime",['2'],3,4],
//   fifth:  null,
//   sixth:  undefined,
//   seventh:{}
// })

// function strCount(obj) {

//   // console.log(obj1)
//   let newObj = Object.values(obj);
//   console.log(newObj)
//   let newObj1 = newObj.flat(Infinity);
//   console.log(newObj1)
//   let sumObj;

//   // console.log(newObj);

//   const result = newObj1.filter((sumObj) => typeof sumObj == 'string').length;
//   console.log(result);

//   return result;
// }

// const showRS = () => arguments[0] + arguments[1]

// const showRS = (year, quarter) => year + quarter

// const showRS = (text = year + quarter) => text

// const showRS = (year, quarter) => {return year + quarter}

// const showRS = (year, quarter) => {return year, quarter}
// let a = 4
// let b = 5

// const sum = {a, b} => ( return a + b )

// const sum = (a, b) => {  a + b }

// const sum = {a, b} => a + b
//
// const sum = (a, b) => a + b

// const sum = a, b => a + b

// console.log(sum(6, 5));

// if {}

// if (condition) {}

// if (condition) {} else {}

// if (condition) {} else (condition) {}

// if (condition) {} else if (condition) {}

// эти имена свойств допустимы

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
