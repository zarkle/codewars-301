function solution(str){
  let newArr = [];
  let arr = str.split('');
  for (let i in str) {
    newArr.push(arr.pop());
  }
  return newArr.join('');  
}