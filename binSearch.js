const binSearch = function(array, x) {
  
  // Takes an array and a number. Returns an array with an index and number of steps performed to find the number in the array. If number hasn't been found returns -1 as an index.
  
  let min_val = 0
  let max_val = array.length - 1
  let guess
  let steps = 0
  
  while (min_val <= max_val) {
        
    guess = Math.floor((min_val + max_val) / 2)
    steps += 1
    
    if (array[guess] === x) {
        return [guess, steps]
    } else  if (x > array[guess]) {
        min_val = guess + 1
    } else {
        max_val = guess - 1;
    }
    }
	return [-1, steps]
}
