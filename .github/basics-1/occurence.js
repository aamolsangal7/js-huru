function countCharacters(str) {
const count = {};

for (let char of str) {
count[char] = (count[char] || 0) + 1;
}

return count;
}

// Example
const result = countCharacters("anna+ ot +ation");
console.log(result);