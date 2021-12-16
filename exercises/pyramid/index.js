// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const arr = [];
    let amount = 1;
    for (let i = 0; i < n; i++) {
        arr.push('#'.repeat(amount));
        amount += 2;
    }
    const maxLength = arr[arr.length - 1].length;

    for (let item of arr) {
        const sideSpaces = ' '.repeat((maxLength - item.length) / 2);
        console.log(sideSpaces + item + sideSpaces)
    }
}

module.exports = pyramid;
