/*
If a sentence is too long to fit into a chunk, textchunk will split the sentence
on a word boundary instead.
*/

var textchunk = require('textchunk');

var text = "Peter Piper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked. If Peter Piper picked a peck of pickled peppers, where's the peck of pickled peppers Peter Piper picked?";
var parts = textchunk.chunk(text, 48);

console.log(parts);
