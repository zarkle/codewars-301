function insertDash(num) {
  let number = num.toString().split('');
  for (let i in number) {
    if ((number[i] % 2 !== 0) && (number[i-1] % 2 !== 0)) {
      number[i-1] = `${number[i-1]}-`;
    }
  }
  return number.join('');
}