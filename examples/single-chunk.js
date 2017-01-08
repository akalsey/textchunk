/*
If the chunk size is larger than the sentence, a single-element array is returned
*/

var textchunk = require('textchunk');

const text = "Bacon ipsum dolor amet ut do pariatur dolor corned beef pancetta in tri-tip enim.";
var parts = textchunk.chunk(text, 90);

console.log(parts);