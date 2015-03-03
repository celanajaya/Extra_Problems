function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce(function(prevVal, currVal, index){
    // console.log(startingVal);
    prevVal[currVal] = ++prevVal[currVal] || 1;
    return prevVal;
  }, {});
  
}

var reduce = function (arr, fn, initial) {
  if (arr.length === 0) {
    return initial;
  }
  var nextStartVal = fn(initial, arr.shift());
  return reduce (arr, fn, nextStartVal);
};


function mapReduce(arr, fn) {
      // SOLUTION GOES HERE
      var returnArray = [];
      return arr.reduce(function(prev, curr, index, arr){
        return prev.concat(fn(curr,index,arr));
      }, []);
    }
