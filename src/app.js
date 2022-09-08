/* Write your code here */
// Using what you have learned so far, it is time to create a basic encryption algorithm! Try to create this algorithm using 1) an object and 2) a loop. If you are successful, your code should convert a normal message into a secret message!

// Bonus points if you can make your code convert not only letters and words, but also full sentences into secret messages! Even more points if it can turn encoded messages *back* into  regular ones!! And gold star, A+, 10 points to Gryffindor if you can turn your loop into a function! Be the cyber ‘White Hat’ you were always meant to be!

// Tasks
//1.     Log a test sentence to the terminal to make sure everything is set up for development.

console.log(
    'It can also be successfully used as a daily exercise to get writers to begin writing. Being shown a random sentence and using it to complete a paragraph each day can be an excellent way to begin any writing session.'
);

// 2    Create an object with keys of all 26 letters in the English alphabet, and values of all 26 letters in reverse: so, your first property will be "A" : "Z", your second will be "B" : "Y", and your last will be "Z" : "A".

let keyObject = {
    A: 'Z',
    B: 'Y',
    C: 'X',
    D: 'W',
    E: 'V',
    F: 'U',
    G: 'T',
    H: 'S',
    I: 'R',
    J: 'Q',
    K: 'P',
    L: 'O',
    M: 'N',
    N: 'M',
    O: 'L',
    P: 'K',
    Q: 'J',
    R: 'I',
    S: 'H',
    T: 'G',
    U: 'F',
    V: 'E',
    W: 'D',
    X: 'C',
    Y: 'B',
    Z: 'A',
};

//  3  Create two arrays, one called “uiArr” to store our input array and “encryptedArray” to store our output array.
let uiArr = []; // this stores the input array;
let encryptedArray = []; //this stores the output array

// 4 Create a user prompt that will also store a letter or word in a variable.

let inputtedWord = prompt('enter a word or sentence');

//  5 Log this variable to the terminal and test that you're successfully storing the user's input.

console.log(inputtedWord);

// Once we have the user's input, we need to do two checks so that our code doesn’t return weird results. Best practice is to think that the user will always enter something invalid and break everything.

// We need to check if the input is not empty.
// We need to check if the input is a string. (We will help you with this one because this can be tricky).
// To perform a string check, use this:

// /^[a-zA-Z]*$/.test(userInput)
if (inputtedWord.length == '0 ' || /^[a-zA-Z]*$/.test(inputtedWord)) {
    alert('please enter a word');
}
