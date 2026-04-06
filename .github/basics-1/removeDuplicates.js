const numbers = [1,1,2,2,3,3,4,4,3,6,7,6]
// const uniqueN = [...new Set(numbers)]
// console.log(uniqueN);
const unique = []
for(let i =0; i<numbers.length; i++){
    if(!unique.includes(numbers[i])){
        unique.push(numbers[i])
    }
}
console.log(unique);
