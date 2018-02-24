// they both work; debating on which one is more readable

function find_average(array) {
  let total = array.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
  return total / array.length;
}

function find_average(array) {
  return (array.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0)) / array.length;
}

// or in one line
function find_average(array) {
  return (array.reduce((accumulator, current) => accumulator + current, 0)) / array.length;
}

// one line with arrow functions
let find_average = (array => (array.reduce((accumulator, current) => accumulator + current, 0)) / array.length);