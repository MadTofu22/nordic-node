const nodeNumbers = require('./challenges/110-node-numbers');
const nodeObjects = require('./challenges/120-node-objects');
const nodeFunction = require('./challenges/130-node-function');
const vialCount = require('./challenges/140-stretch-vial-finder');

if (nodeNumbers == 20) {
    console.log('Passed nodeNumbers test!');
} else {
    console.log(`
    XXXXXXXXXXX FAILED nodeNumbers XXXXXXXXXXX
    `);
}

if (nodeObjects.mushers == 20) {
    console.log('Passed nodeObjects test!');
} else {
    console.log(`
    XXXXXXXXXXX FAILED nodeObjects XXXXXXXXXXX
    `);
}

if (nodeFunction(16) == 10) {
    console.log('Passed nodeFunction test 1!');
} else {
    console.log(`
    XXXXXXXXXXX
    FAILED nodeFunction
    function should return 10 when 16 is passed
    XXXXXXXXXXX`);
}

if (nodeFunction(3) == 4) {
    console.log('Passed nodeFunction test 2!');
} else {
    console.log(`
    XXXXXXXXXXX
    FAILED nodeFunction
    function should return 6 when 10 is passed
    XXXXXXXXXXX`);
}

let test0 = []; //vialCount = 0
let test1 = ['vial', 'sandwich', 'dog food']; //vialCount = 1
let test2 = [['vial', ['dog food', 'dog food'], 'taco'], 'vial', ['vial', 'vial', ['vial']]]; //vialCount = 5

if (vialCount(test0) == 0) {
    console.log('first test passed');
}
else {
    console.log('XXXXXX Failed first vialCount test');
}

if (vialCount(test1) == 1) {
    console.log('second test passed');
}
else {
    console.log('XXXXXX Failed second vialCount test');
}
