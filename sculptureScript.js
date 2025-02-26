const sculptureList = require('./data.js'); // import data.js

//current element
let index = 0; 

//iterate through each element in data
for (let i = 0; i < sculptureList.length; i++) {

    //get current element
    const element = sculptureList[index]

    //iterate through current element to get length
    for (const key in element){
        console.log(`${key}: ${element[key].length}`)       //output
    }

    //next element
    index++; 

    console.log("\n");
}