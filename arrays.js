//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const colorCopy = ['red', 'green', 'black']

//CODE HERE

const faveColors = colorCopy
console.log(colorCopy.slice(2))

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE

colorCopy.push('Yellow')

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const middleNums = [1, 2, 3, 4, 5]

//CODE HERE


middleNums.splice(0, 6)


//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/



// CODE HERE
answers = []

function bigOrSmall(answers) {
  for(let i = 0; i > 100; i++) {
      return answers('big')
      if(let i = 0; i <= 100; i++) {
          return answers('small')
      }
      answers(arr[i])
  }
  return answers,
};

