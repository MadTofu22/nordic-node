// run `node test.js` in the terminal, to see what happens.
// We have failing messages! That's no good!
// What is `test.js` trying to do?
// test.js is accessing the functions and variables in challenges 110, 120, and 130 to check if the numbers are a passing value, then outputting the result in the console

// module.exports allows us to share information in one file with another file
// change the number to 20, the number of mushers we have available

module.exports = 20;

// now run `node test.js` in the terminal, to see what happens
// it passed the first if/else check because nodeNumbers in test.js is now get the value of 20 from this file