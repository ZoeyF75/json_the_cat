const request = require("request");

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error,response,body) => {
    const data = JSON.parse(body);
    (data[0]) ? callback(null, data[0].description) : callback(error, 'Cat breed not found :(');
  });
};

module.exports = fetchBreedDescription;