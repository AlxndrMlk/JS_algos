const binSearch = function(array, x) {
  let min_val = 0
  let max_val = array.length - 1
  let guess
  let steps = 0
  
  while (true) {
    
    steps += 1
    
    guess = Math.floor((min_val + max_val) / 2);
    
    if (min_val > max_val) {
      return [-1, steps]
    } 
    
    if (array[guess] === x) {
      return [guess, steps]
    } else if (array[guess] < x) {
      min_val = guess + 1
    } else {
      max_val = guess - 1
    }
  }
}
