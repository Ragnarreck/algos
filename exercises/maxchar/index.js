// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (chars[char]) chars[char] += 1;
        else chars[char] = 1;
    }
    return Object.entries(chars).sort((a, b) => a[1] > b[1])[0][0];
}

module.exports = maxChar;
