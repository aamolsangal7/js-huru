const myArr = [1,2,3,4,5,6,7,8,9,10]

//console.log(myArr[5]);
const array2 = new Array(1,4,9,15,22,30)
//console.log(array2[3])

myArr.push(67)
//console.log(myArr.includes(19));

// console.log("Amol", array2);

const newArr = myArr.join(1,2,4,8,16,32,64,128,256,512,1024,2048,4096)
//console.log(myArr);

//console.log(newArr);
const sliceArray = myArr.slice(0,3)
//console.log("hururu1", sliceArray);

const spliceArray = myArr.splice(0,5)
//console.log("hururu2", spliceArray);

//console.log("hururu3",myArr);
// console.log(myArr);

const aFamily = ['Ayushi', 'Devagya', 'Amol']
const pFamily = ['Bhawna', 'Sarita', 'Narendra']

const oFamily = aFamily.concat(pFamily)
//console.log(oFamily);

const fFamily = oFamily.concat(pFamily)
console.log(fFamily.includes('Amol'));


// OR

const nFamily = [...aFamily, ...pFamily]
//console.log(nFamily);

console.log(Array.isArray("Amol"));
console.log(Array.from("Amol"));
console.log(Array.from({name:"Amol"}));         //interesting as interviewer may ask this

const a = 100
const b = 300
const c = 900

console.log(Array.of(a,b,c));



