function cubeOdd(arr) {
  for (let i in arr) {
    if (typeof(arr[i]) !== 'number') return undefined;
  }  
  return arr.filter(number => number %  2 !== 0)
    .map(x => x * x * x)
    .reduce((acc, curr) => {return acc + curr}, 0);
}