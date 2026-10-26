// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
//getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
//getMaxSubSum([-2, -1, 1, 2]) == 3
//getMaxSubSum([100, -9, 2, -3, 5]) == 100
//getMaxSubSum([1, 2, 3]) == 6 (take all)
//If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

//getMaxSubSum([-1, -2, -3]) = 0

//The task is: find the contiguous subarray of arr with the maximal sum of items.

//Write the function getMaxSubSum(arr) that will return that sum.

let inputArr = [];

function getUserInput() {
  let isValid = false;

  while (!isValid) {
    let firstRound = 0;
    let userChoice;
    if (firstRound < 1) {
      userChoice = +prompt(
        "Choose a set of numbers to find the highest possible subset of(one at a time)",
        0,
      );
      firstRound += 1;
    }
    let nextUserChoice = +prompt(
      "Next Value (if you are done click Cancel):",
      0,
    );
    inputArr.push(userChoice);
    inputArr.push(nextUserChoice);
    if (
      userChoice === "" ||
      userChoice === null ||
      !isFinite(userChoice) ||
      nextUserChoice === "" ||
      nextUserChoice === null ||
      !isFinite(nextUserChoice)
    ) {
      break;
    }
  }
}

function getMaxSubSum(userInput) {
  getUserInput();
  userInput = inputArr;
  let maxSum = 0;

  for (let i = 0; i < userInput.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < userInput.length; j++) {
      sumFixedStart += userInput[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }
  return maxSum;
}
// So I need to get the users input
// Turn the input into an array
// Take the input in an array
// Get each value in the array
// Using a for loop check to see if the sum of two specific values in the array is greater than the sum of any other values in the array
