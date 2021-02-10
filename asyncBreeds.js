// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackFuncWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) callbackFuncWhenThingsAreDone(data);
  });
};

// CHANGE 1: Moved the console.log into a new function
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed); // => after change, will print out correctly when called
};

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('Bombay', printOutCatBreed);