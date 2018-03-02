function capitalize(s,arr){
  str = s.split('');
  for (let i in arr) {
    if (arr[i] < str.length) {
      str[arr[i]] = str[arr[i]].toUpperCase();
    }
  }
  return str.join('');
}