// Practice: Solar System
// Setup
// These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

// mkdir -p ~/workspace/javascript/exercises/array-methods && cd $_
// touch index.html
// touch array-methods.js
// Requirements
// Copy the code below into the JavaScript file, and follow the instructions in the comments.
// const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

// /*
//     Use the forEach method to add the name of each planet
//     to a section element in your HTML with an id of "planets".
//     Use string templates to construct the DOM elements.
// */
// const planetEl = document.getElementById("planets")

// /*
//     Use the map method to create a new array where the
//     first letter of each planet is capitalized. Use the
//     `toUpperCase()` method on strings.

//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// */


// /*
//     Use the filter method to create a new array that
//     contains planets with the letter 'e'. Use the `includes()`
//     method on strings.

//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// */


// // Use the reduce method to create a sentence from the words in the following array
// const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

const body = document.querySelector("body");
const script = document.querySelector("script");
const mainContent = document.createElement("div");
mainContent.setAttribute("id", "planets");

body.insertBefore(mainContent, script);


const planetEl = document.getElementById("planets")

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

// array1.forEach(function(element) {
//     console.log(element);
//   })

function addArrayToDOM(array){
    array.forEach(function(index){
        planetEl.innerHTML +=
            `<h2>${index}</h2>`
    })
}

addArrayToDOM(planets);
// planets.forEach(function(index){
//     planetEl.innerHTML +=
//         `<h2>${index}</h2>`
// });

// /*
//     Use the map method to create a new array where the
//     first letter of each planet is capitalized. Use the
//     `toUpperCase()` method on strings.

//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// */

// The map() method will also iterate over each item in an array and run the logic of the specific function each time. The difference is that running map() creates a new function. You never want to modify your raw data in your database, so when you need to transform it, you need a new array so your source remains unchanged.

let properPlanets = planets.map((planet) =>{
    return planet.charAt(0).toUpperCase() + planet.slice(1);
  });
console.log("step three", properPlanets);

newArray = planets.map(function(str){
    let upperCase = str.charAt(0).toUpperCase();
    let restOfWord = str.slice(1);
    return upperCase  + restOfWord;
});

addArrayToDOM(properPlanets);



// /*
//     Use the filter method to create a new array that
//     contains planets with the letter 'e'. Use the `includes()`
//     method on strings.

//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// */


// let planetsFiltered = planets.filter()

const filtered = properPlanets.filter(function(arguement){
    return arguement.includes("e") + arguement.includes("E")
 })
 console.log("test", filtered);
 
addArrayToDOM(filtered);


// Use the reduce method to create a sentence from the words in the following array

const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const reducedWords = words.reduce(
   function (currentTotal, next) {
       return currentTotal + " " + next
       console.log("one", currentWord);
       console.log(next);
   }
)
console.log(reducedWords)
planetEl.innerHTML += 
    `<div>
        <h2>${reducedWords}</h2>
    </div>`;
