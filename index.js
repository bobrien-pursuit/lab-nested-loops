const { arrayBuffer } = require("stream/consumers");
const examplegridCalc = require("./data/gridCalc");
const exampleSchedule = require("./data/schedule");
const { get } = require("http");

/// Problem 1: Count Zeroes
/**
 * Counts the number of zeroes in a 2D array.
 * @param {number[][]} matrix - A 2D array of numbers.
 * @returns {number} - The count of zeroes in the matrix.
 * @example
 * // returns 2
 * countZeroes([[1, 0, 3], [4, 5, 0], [7, 8, 9]])
 */
function countZeroes(matrix) {
  // Function implementation.
  let count = 0;

  for(let i=0; i < matrix.length; i++)
    for(let j=0; j < matrix[i].length; j++)
        if(matrix[i][j] == 0)
            count++;

            return count;
}


/// Problem 2: Search for an Element
/**
 * Searches for a specific element in a 2D array and returns its position.
 * @param {number[][]} matrix - A 2D array of numbers.
 * @param {number} element - The element to search for.
 * @returns {string} - The position of the element or 'Element not found'.
 * @example
 * // returns 'Element found at row 1, column 1'
 * findElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5)
 */
function findElement(matrix, element) {
  // Function implementation.
  for (let i=0; i < matrix.length; i++)
    for (let j=0; j < matrix[i].length; j++)
          if (element == matrix[i][j])
              return `Element found at row ${i}, column ${j}`;
          else
            continue;

            return 'Element not found'
}


/// Problem 3: Grid Coordinate Logger

/**
 * Logs the value and coordinates of each element in a 2D array.
 * @param {any[][]} matrix - A 2D array.
 * @example
 * // logs: 'Element at row 0, column 0 is 1', 'Element at row 0, column 1 is 2', ...
 * logGridCoordinates([[1, 2], [3, 4]])
 */

function logGridCoordinates(matrix) {
  // Function implementation.
  for (let r = 0; r < matrix.length; r++)
    for (let c = 0; c < matrix[r].length; c++)
      console.log(`Element at row ${r}, column ${c} is ${matrix[r][c]}`);
}


/// Problem 4: School Schedule Organizer
/**
 * Organizes a weekly class schedule into a structured format. You will need to import the schedule from data/schedule.js.
 * @param {Object[][]} schedule - A 2D array where each element is an object with class details.
 * @returns {Object} - An object with organized schedule.
 * @example See tests in Jests in index.test.js for examples.
 */

function organizeSchedule(schedule) {
  // Function implementation.

  let organizedScheduleArr = {};
    
      for (let i = 0; i < schedule.length; i++)
        for (let j = 0; j < schedule[i].length; j++){
           switch(i){

           case 0:
           if(organizedScheduleArr.hasOwnProperty('Monday'))
           organizedScheduleArr.Monday.push(schedule[i][j].subject + ' with ' + schedule[i][j].teacher);
           else {
           organizedScheduleArr.Monday = [];
           organizedScheduleArr.Monday.push(schedule[i][j].subject + ' with ' + schedule[i][j].teacher);
           }
           break; 

           case 1:
           if(organizedScheduleArr.hasOwnProperty('Tuesday'))
           organizedScheduleArr.Tuesday.push(schedule[i][j].subject + ' with ' + schedule[i][j].teacher);
           else {
           organizedScheduleArr.Tuesday = [];
           organizedScheduleArr.Tuesday.push(schedule[i][j].subject + ' with ' + schedule[i][j].teacher);
           }
           break; 
           
           case 2:
           if(organizedScheduleArr.hasOwnProperty('Wednesday'))
           organizedScheduleArr.Wednesday.push(schedule[i][j].subject + ' with ' + schedule[i][j].teacher);
           else {
           organizedScheduleArr.Wednesday = [];
           organizedScheduleArr.Wednesday.push(schedule[i][j].subject + ' with ' + schedule[i][j].teacher);
           }
           break;
           
           case 3:
           if(organizedScheduleArr.hasOwnProperty('Thursday'))
           organizedScheduleArr.Thursday.push(schedule[i][j].subject + ' with ' + schedule[i][j].teacher);
           else {
           organizedScheduleArr.Thursday = [];
           organizedScheduleArr.Thursday.push(schedule[i][j].subject + ' with ' + schedule[i][j].teacher);
           }
           break;
           
           case 4:
           if(organizedScheduleArr.hasOwnProperty('Friday'))
           organizedScheduleArr.Friday.push(schedule[i][j].subject + ' with ' + schedule[i][j].teacher);
           else{
           organizedScheduleArr.Friday = [];
           organizedScheduleArr.Friday.push(schedule[i][j].subject + ' with ' + schedule[i][j].teacher);
           }
           break;
           
           default:

           break;
           }
      
        }
        
        
        return organizedScheduleArr;
        
      }
      console.log(organizeSchedule(exampleSchedule));
      
/// Problem 5: Grid Function Calculator (Challenging)
/**
 * Calculates the sum of results from a grid of functions. You will need to import the grid from data/gridCalc.js.
 * @param {Object[][]} grid - A 2D array where each element is an object containing a function and its parameters.
 * @returns {number} - The sum of the results of all functions in the grid.
 * @example See tests in Jests in index.test.js for examples.
 */

function calculateGridFunctions(grid) {
  // Function implementation.
  return grid;
}


module.exports = {
    countZeroes,
    findElement,
    logGridCoordinates,
    organizeSchedule,
    calculateGridFunctions
}
