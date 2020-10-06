// You can pass anything you want in a module export
// last time we used a number, this time, let's try an object
// the number of mushers should be 20

module.exports = {
    mushers: 20,
    dogs: 150,
    boxes: 140,
};

// now run `node test.js` in the terminal, to see what happens
// the 2nd if/else check in test.js now passes because we changed the number of mushers in this file to 20.