//callback function
const callBackMessage = (msg) =>{
    console.log(`Call back message:  ${msg}`);
}

const greeting = (person) =>{
    console.log(`Hi, ${person}`);
}

const parentFunction = (fx,msg) =>{
    fx(msg);
}

parentFunction(callBackMessage, "calling callback");

parentFunction(greeting, "Heidi");

// ---------Object.freeze()------
const arr = Object.freeze([1,2,3,4,5]); //if you wrap array in object freeze, it is now immutable
arr.push(10);   //error will occur, cannot change array now

//---add item
const addNumber = [...arr, 11];

//---add item by concat
const addByConcat = arr.concat(21);

//---splice vs slice
const newArray = [1,2,3,4,5,6,7]
console.log(...newArray.slice(1,2))
console.log(newArray)

const array2 = [2,3,4,5,6];
console.log(array2.slice(1,2));
console.log(array2);

const prices = arr.map(function())