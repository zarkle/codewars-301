function formatWords(words){
  if (words == null || words.length === 0) return '';
  let array = words.filter(word => word !== '');
  switch (array.length) {
    case 0:
      return '';
    case 1:
      return array[0];
    case 2:
      return `${array[0]} and ${array[1]}`;
    default:
      for (let i = 0; i < array.length - 2; i++) {
          array[i] = `${array[i]}, `;
      }
      let last = array.splice(-1);
      return `${array.join('')} and ${last}`;  
  }
}