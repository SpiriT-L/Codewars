function formatDuration(seconds) {
  if (seconds <= 0) {
    return 'now';
  }
  let minute = 0;
  let hour = 0;
  let day = 0;
  let year = 0;

  const arr = [];
  const constructorPlural = (i, j) => `${i} ${i > 1 ? j + 's' : j}`;

  if (seconds >= 3600) {
    hour = Math.floor(seconds / 3600);
    seconds = seconds - hour * 3600;
  }
  if (hour >= 24) {
    day = Math.floor(hour / 24);
    hour = hour - day * 24;
  }
  if (day >= 365) {
    year = Math.floor(day / 365);
    day = day - year * 365;
  }
  if (seconds >= 60) {
    minute = Math.floor(seconds / 60);
    seconds = seconds - minute * 60;
  }

  if (year) arr.push(constructorPlural(year, 'year'));
  if (day) arr.push(constructorPlural(day, 'day'));
  if (hour) arr.push(constructorPlural(hour, 'hour'));
  if (minute) arr.push(constructorPlural(minute, 'minute'));
  if (seconds) arr.push(constructorPlural(seconds, 'second'));

  if (arr.length > 1) {
    const duration = arr.pop();
    return arr.join(', ') + ' and ' + duration;
  }

  return arr[0];
}

// console.log(formatDuration(0));
console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3700));
console.log(formatDuration(3600));
console.log(formatDuration(3662));
