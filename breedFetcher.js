const request = require("request");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const breedInput = () => {
  rl.question('Please enter a cat breed: ', (breed) => {
    fetchBreed(breed);
  });
};

const fetchBreed = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error,response,body) => {
    if (error) {
      console.log('error: ', error);
      process.exit();
    }
    const data = JSON.parse(body);
    (data[0]) ? console.log(data[0].description) : console.log("Breed not found :(");
    process.exit();
  });
};

breedInput();

