// ^\d+(,\d+)*(\n\d+(,\d+)*)*$ 

// let data = "apple,orange\nbanana,grape";
// let fruits = data.split(/[,\n]+/);
// console.log(fruits);

// let data2 = "apple,orange\nbanana,grape";
// let fruit2= data.match(/[,\n]+/);
// console.log(fruit2);

// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(`1,2\n3,4=>${'1,2\n3,4'.match(/[,\n]+/)}`);
// console.log(`1,34=>${'1,34'.match(/[,\n]+/)}`);
// console.log(`1\n2\n3=>${'1\n2\n3'.match(/[,\n]+/)}`);
// console.log(`1,2,3\n4=>${'1,2,3\n4,5'.match(/[,\n]+/)}`);
// console.log('****************************************');
// console.log(`1,,2=>${'1,,2'.match(/[,\n]+/)}`);
// console.log(`1\n\n2=>${'1\n\n2'.match(/[,\n]+/)}`);
// console.log(`1,\n2=>${'1,\n2'.match(/[,\n]+/)}`);
// console.log(`1\n,2=>${'1\n,2'.match(/[,\n]+/)}`);


// Define a regular expression to match your pattern
const regex = /^(\d+([,\n]\d+)*)$/;

// Function to test a string against the regex
function matchString(input) {
    console.log(`********${input}**********`)
    if (regex.test(input)) {
        console.log(`The string "${input}" is valid.`);
    } else {
        console.log(`The string "${input}" is invalid.`);
    }
    console.log(`********${input}**********`)
}

// Example strings to test
const testStrings = [
    "1,2,4\h5,6,7",
    "1,2\n3,4",
    // "1,,2", // Invalid
    // "1\n\n2", // Invalid
    // "1,\n2", // Invalid
    // "1,\s2", // Invalid
    "1,2,4\h5,6,7",
];

// Test each string
testStrings.forEach(matchString);