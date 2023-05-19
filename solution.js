// Challenge 1: Remove Last Element
function removeLastElement(arr) {
    arr.pop();
    return arr;
  }
  
  // Challenge 2: Remove First Element
  function removeFirstElement(arr) {
    arr.shift();
    return arr;
  }
  
  // Challenge 3: Add Element to End
  function addElementToEnd(arr, value) {
    arr.push(value);
    return arr;
  }
  
  // Challenge 4: Add Element to Start
  function addElementToStart(arr, value) {
    arr.unshift(value);
    return arr;
  }
  
  // Challenge 5: Reverse Array
  function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
    return reversedArray;
  }
  
  module.exports = {
    removeLastElement,
    removeFirstElement,
    addElementToEnd,
    addElementToStart,
    reverseArray,
  };
  