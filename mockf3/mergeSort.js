//1.Merge 2 sorted arrays into 1 sorted array using a callback function. Use merge sort algorithm. and console log the merged array.

 function mergeArrays(arr1, arr2, compareCallback) {
    const mergedArray = []; // Initialize an empty array to store the merged elements
    let i = 0; // Pointer for the first array
    let j = 0; // Pointer for the second array

 
    // Iterate until we reach the end of either array
    while (i < arr1.length && j < arr2.length) {
      // Compare the elements using the provided compareCallback function
      if (compareCallback(arr1[i], arr2[j]) <= 0) {
        // If the element in arr1 is smaller or equal, add it to the merged array
        mergedArray.push(arr1[i]);
        i++; // Move the pointer for arr1 to the next element
      } else {
        // If the element in arr2 is smaller, add it to the merged array
        mergedArray.push(arr2[j]);
        j++; // Move the pointer for arr2 to the next element
      }
    }
    // Add the remaining elements from arr1, if any
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
    // Add the remaining elements from arr2, if any
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
 
    return mergedArray; // Return the merged array
  }   
//example in  output
  const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
function compareNumbers(a, b) {
  return a - b;
}

const mergedArray = mergeArrays(array1, array2, compareNumbers);
console.log(mergedArray);