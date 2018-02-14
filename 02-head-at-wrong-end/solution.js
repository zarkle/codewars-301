function fixTheMeerkat(arr) {
  let first = arr.shift();
  let last = arr.pop();
  arr.push(first);
  arr.unshift(last);
  return arr;
}