function findTripletsWithSum(arr, targetSum) {
  const result = [];
  //sort array to simplify search
  arr.sort((a, b) => a - b);
  const n = arr.length;
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];

      if (currentSum === targetSum) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

//Test the code
const inputArray = [1, 2, 3, 4, 5, 9];
const targetSum = 9;
const triplets = findTripletsWithSum(inputArray, targetSum);
console.log(triplets); 
