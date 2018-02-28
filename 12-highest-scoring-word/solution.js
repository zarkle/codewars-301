function high(x){
  let array = x.split(' ');
  let highWord = '';
  let highest = current = 0;
  for (let i in array) {
    for (let j in array[i]) {
      current += (array[i].charCodeAt(j) - 96);
    }
    if (current > highest) {
      highest = current;
      highWord = array[i];
    }
    current = 0;
  }
  return highWord;
}

// So I kept hitting attempt without changing my code and every time it gave me a different number of failed tests and then finally it passed once with the code below. So I just thought that was funny. Now it's in the code wars solutions forever. LOL. The code above passes every time though.
function high(x){
  if (!x) return '';

  let array = x.split(' ');
  let highWord;
  let highest = current = 0;
  for (let i in array) {
    for (let j in array[i]) {
      current += (array[i].charCodeAt(j) - 96);
    }
    if (current > highest) {
      highest = current;
      highWord = array[i];
    } 
    current = 0;
  }
  return highWord;
}
