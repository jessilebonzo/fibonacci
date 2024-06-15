const { fibs, fibsRec } = require('./fibs');  // Use './' to indicate the same directory
const { mergeSort } = require('./mergeSort');  // Use './' to indicate the same directory

function testFibonacci() {
    console.assert(JSON.stringify(fibs(8)) === JSON.stringify([0, 1, 1, 2, 3, 5, 8, 13]), 'Test failed for fibs(8)');
    console.assert(JSON.stringify(fibsRec(8)) === JSON.stringify([0, 1, 1, 2, 3, 5, 8, 13]), 'Test failed for fibsRec(8)');
    console.assert(JSON.stringify(fibs(0)) === JSON.stringify([]), 'Test failed for fibs(0)');
    console.assert(JSON.stringify(fibsRec(0)) === JSON.stringify([]), 'Test failed for fibsRec(0)');
    console.assert(JSON.stringify(fibs(1)) === JSON.stringify([0]), 'Test failed for fibs(1)');
    console.assert(JSON.stringify(fibsRec(1)) === JSON.stringify([0]), 'Test failed for fibsRec(1)');
}

function testMergeSort() {
    console.assert(JSON.stringify(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])) === JSON.stringify([0, 1, 1, 2, 3, 5, 8, 13]), 'Test failed for mergeSort([3, 2, 1, 13, 8, 5, 0, 1])');
    console.assert(JSON.stringify(mergeSort([105, 79, 100, 110])) === JSON.stringify([79, 100, 105, 110]), 'Test failed for mergeSort([105, 79, 100, 110])');
    console.assert(JSON.stringify(mergeSort([])) === JSON.stringify([]), 'Test failed for mergeSort([])');
    console.assert(JSON.stringify(mergeSort([1])) === JSON.stringify([1]), 'Test failed for mergeSort([1])');
}

testFibonacci();
testMergeSort();
console.log("All tests passed!");
