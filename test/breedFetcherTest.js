const fetchBreedDescription = require('../breedFetcher');
const chai = require('chai');
const assert = chai.assert;

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      // compare returned description
      assert.equal(null, err);
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
  it('returns an error and error message for invalid breed, via callback', (done) => {
    fetchBreedDescription('', (err,desc) => {
      const expectedDesc = 'Cat breed not found :(';
      assert.equal(err, err);
      assert.equal(expectedDesc, desc);
      done();
    });
  });
});