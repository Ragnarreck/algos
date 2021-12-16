// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     const fib = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         const sum = fib[0] + fib[1];
//         fib[0] = fib[1];
//         fib[1] = sum;
//     }
//     return fib[1];
// }

const count = (first, second, index, n) => index === n ? first + second : count(second, first + second, index + 1, n);

function fib(n) {
    if (n === 0 || n === 1) return n;
    return count(0, 1, 2, n);
}

module.exports = fib;
