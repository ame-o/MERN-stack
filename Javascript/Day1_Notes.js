//var
/*  var can hoist to the global scope */
//const & let
/* use const and let for local scope, default usually using const as the default*/
const name = "America" // unable to reassign
let stack = "MERN" // able to reassign
stack ="JAVA" //reassigning with "="

//cannot re-declare in the same scope, but can do in separate scopes, including functions and for/while loops
for (let i=0;i<5;i++){
    console.log(i);
}

//----------------------
const array = [1,2,3,4]; // an array is only a memory address
array.push(5); //can push because it is stored at a memory address
array.pop();   //can use
trips = []; //cannot reassign / will cause error

//---------------------
const post = {      //object
    title : "first day in MERN",
    viewers:35,
    likes:50,
    description:"An awesome day with MERN. It just works."
}
//-------------------desctructuring-------------------------------
//can copy by using object dot notation to target specfic key-value pair
const titleFromPost = post.title;   
const viewersFromPost = post.viewers; 

//objects are unordered so you can copy by just using key name
const {likes, title, description} = post;   // just a copy not reassigning

    //arrays do require "," because order matters, but name doesnt matter
const[firstPlace,  , thirdPlace] = trips;   // just a copy not reassigning

//-------------------spread/rest-------------------------------
const postCopy = {...post};//makes a copy
console.log(postCopy);

const arrayCopy = [...array];   //makes a copy
arrayCopy.pop();    //can use array methods to make changes

//-------------------arrow function-------------------------------
        //a function is technically a variable
function printHello(){
    console.log("Hello");
}

const printHello2 = ()=> {  //use fat arrow is like "equals" / declare function
    console.log("Hello2");

// short-handed arrow function
}