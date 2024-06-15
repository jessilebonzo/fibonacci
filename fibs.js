function fibs(n) {
    if (n <= 0) return []; //returns an empty array bc no Fibonacci numbers to return.
    if (n === 1) return [0]; // returns an array "first Fibonacci number: [0]"
    if (n === 2) return [0, 1]; // returns an array  "first two Fibonacci numbers: [0, 1]"

    let fibSequence = [0, 1]; // Initializes the fibonnaci seq. "first 2 numbers"
    for (let i = 2; i < n; i++) { // first 2 numbers are already defined.
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    } // calculated by adding the last two numbers in seq.
      // continues until the sequence contains "n" numbers.
    return fibSequence;
}

function fibsRec(n) {
    if (n <= 0) return []; // returns an empty array
    if (n === 1) return [0]; // returns [0]
    if (n === 2) return [0, 1]; //returns [0, 1]

    let seq = fibsRec(n - 1); // recursion "function calls itself with n - 1 to generate the sequence up to the n-1th number"
    return seq.concat([seq[seq.length - 1] + seq[seq.length - 2]]); // seq. up to n-1, it calculates the next Fibonacci number by adding the last 2 numbers in the seq.
}

module.exports = { fibs, fibsRec };
