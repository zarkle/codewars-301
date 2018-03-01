function mutateMyStrings(stringOne, stringTwo) {
  let str1 = stringOne.split('');
  let str2 = stringTwo.split('');
  let final = `${stringOne}\n`;
  for (let i in str1) {
    if (str1[i] !== str2[i]) {
      str1[i] = str2[i];
      final += `${str1.join('')}\n`;
    }
  }
  return final;
}