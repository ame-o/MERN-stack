//callback function
const callBackMessage = (msg) =>{
    console.log(`Call back message:  ${msg}`);
}

const greeting = (person) =>{
    console.log(`Hi, ${person}`);
}

const parentFunction = (fx) =>{
    fx("Message from parent");
}

parentFunction(callBackMessage);

parentFunction(greeting);