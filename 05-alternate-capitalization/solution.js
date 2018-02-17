function capitalize(s){
  let string = s.split('');
  let result = [];
  for (let i in string) {
    if (i % 2 === 0) {
      string[i] = string[i].toUpperCase();
    }
  }
  result[0] = string.join('');
  string = s.split('');
  for (let i in string) {
  if (i % 2 === 1) {
      string[i] = string[i].toUpperCase();
    }
  }
  result[1] = string.join('');
  return result;
}