const fetchBreedDescription = require('./breedFetcher');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const breedInput = () => {
  rl.question('Please enter a cat breed: ', (breed) => {
    fetchBreedDescription(breed, (error, desc) => {
      error ? console.log('Error fetch details:', error) : console.log(desc);
      process.exit();
    });
  });
};

breedInput();