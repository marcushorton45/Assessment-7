const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


function measureRuntime(fn, args) {
    perf.start();
    fn(args);
    let results = perf.stop();
    return results.time;
  }

console.log('Tiny Array\t|', measureRuntime(doublerAppend, tinyArray), 'ms\t\t|', measureRuntime(doublerInsert, tinyArray), 'ms');
console.log('Small Array\t|', measureRuntime(doublerAppend, smallArray), 'ms\t\t|', measureRuntime(doublerInsert, smallArray), 'ms');
console.log('Medium Array\t|', measureRuntime(doublerAppend, mediumArray), 'ms\t\t|', measureRuntime(doublerInsert, mediumArray), 'ms');
console.log('Large Array\t|', measureRuntime(doublerAppend, largeArray), 'ms\t\t|', measureRuntime(doublerInsert, largeArray), 'ms');
console.log('Extra Large Array\t|', measureRuntime(doublerAppend, extraLargeArray), 'ms\t\t|', measureRuntime(doublerInsert, extraLargeArray), 'ms');

