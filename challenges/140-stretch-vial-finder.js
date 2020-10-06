// The dogs have successfully carried the cure to Nome
// The vials are in boxes inside of boxes inside of boxes...
// We need to find the vials and count just how many there are

// each box is represented by an array
// you might get an empty box like: []
// or a box might have things in it like: ['vial', 'sandwich', 'dog food']
// or a box might have boxes in it like [['vial', ['dog food', 'dog food'], 'taco'], 'vial', ['vial', vial, ['vial']]]

// Regardless of where they are burried in our luggage, you must count up all of the vials
// in all of the boxes.
// For example, a box list like this:
// [] should return 0

// a box might have things in it like this:
// ['vial', 'sandwich', 'dog food'] should return 1

// a box might have things in it like this:
// [['vial', ['dog food', 'dog food'], 'taco'], 'vial', ['vial', vial, ['vial']]] should return 5

// start small by handling the first two cases (only worry about an array of strings)
// then move on to boxes in boxes in boxes. Boxes in boxes will be a big stretch.
// You may want to research recursion if you get this far.


module.exports = function (box) {
    // YOUR CODE HERE
    
    return getVialCount(box);
}

function getVialCount (box) {
    
    let boxVialCount = 0;
    
    //loop through the box and check if it's a single vial item, or an array
    for (let i=0; i < box.length; i++) {
        console.log('box[i]:', box[i], 'typeof(box[i]:', typeof(box[i]), 'boxVialCount:', boxVialCount);
        //increase the count if a vial is found
        if (box[i] === 'vial'){
            boxVialCount++;
        }
        //recurse the function if the current item is another box
        else if (typeof(box[i]) === 'object') {
            boxVialCount += getVialCount(box[i]);
            console.log('typeof(box[i]:', typeof(box[i]), 'boxVialCount:', boxVialCount);
        }
    }
    return boxVialCount;
}

// Don't forget to write tests!