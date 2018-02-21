function disemvowel(str) {
  let array = [];
  for (let i in str) {
    if (!str[i].match(/[aeiouAEIOU]/)) {
      array.push(str[i]);
    }
  }
  return array.join('');
}