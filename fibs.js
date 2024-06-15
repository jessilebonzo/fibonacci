function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    }

    return fibSequence;
}

function fibsRec(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let seq = fibsRec(n - 1);
    return seq.concat([seq[seq.length - 1] + seq[seq.length - 2]]);
}

module.exports = { fibs, fibsRec };
