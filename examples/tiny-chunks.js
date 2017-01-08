/*
What happens when text is chunked into parts much smaller than
the length of the sentences?
*/

var textchunk = require('textchunk');

const text = "We the People of the United States of America";
var parts = textchunk.chunk(text, 5);
console.log(parts);