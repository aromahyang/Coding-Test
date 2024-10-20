/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let substr = '';
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (substr.includes(char)) {
            const index = substr.indexOf(char);
            substr = substr.slice(index + 1);
        }
        substr += char;
        max = Math.max(max, substr.length);
    }
    return max;
};