//solution from https://edabit.com/user/ak5aPiT6QWpmbnPzD

export function subsets(inputArray, targetSum) {
  //this solution too slow to work on large input arrays
    if (inputArray.length > 20) return false;
//get all subsets by first using reduce to 2d array, made of a concatinated array of each element of the reduce accumulator   
  let subsets = inputArray.reduce((acc, curr) => acc.concat(acc.map((ele) => [...ele, curr])), [[]]);

  //filter out the subset arrays that are == to the target sum
  let filtered = subsets.filter((set) => set.reduce((acc, curr) => acc + curr, 0) == targetSum);

  return filtered.sort((a, b) => {

    //compare the sub array sizes, if equal in size we need to execute further comparison. else we just sort the smaller length element to before the comparison
    if (a.length == b.length) {

      //sub arrays are the same size, loop through each element of the first  
      for (let i = 0; i < a.length; i++) {
        //loop through until we find not identical values for both subset arrays in for each index value. Once we find differing values we sort the lower value to lower index value.
        if (a[i] !== b[i]) {
          return a[i] - b[i];
        }
      }
    } else {
      //smaller subset array (by length) is always lower index value in return array than the longer subset array
      return a.length - b.length;
    }
  });
}