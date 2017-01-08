var tokenizer = require('sbd');

// Split text into *lenght* sized chunks, attempting to split on
// sentence boundaries if possible.
exports.chunk = function(text, length, options = {}) {
  if (options.callback) {
    var callback = options.callback;
    delete(options.callback);
  }

  var addToStack = function() {
    tmpstring = tmpstring.trim();
    result.push(tmpstring);
    stringcount = 0;
    tmpstring = '';
  }

  var sentences = tokenizer.sentences(text);
  var result = [];
  var stringcount = 0;
  var tmpstring = '';
  while(sentence = sentences.shift()) {
    var s = tmpstring + sentence + ' ';
    if (sentence.length >= length) {
      // put the current candidate into the result & reset
      addToStack();
      // the sentence has no newlines and exceeds our length, so split it up in the middle
      var parts = sentence.match(new RegExp('.{1,'+length+'}', "g")) || [];
      parts = parts.map(function(p){return p.trim();})
      // now merge the split sentence into the result
      result = result.concat(parts);
    } else if (stringcount + s.length <= length) {
      // adding this sentence won't cause us to exceed length
      stringcount += s.length;
      tmpstring = s;
    } else {
      // adding sentence would cause excessive length, push to result and reset
      addToStack();
      // put this sentence back on the stack
      sentences.unshift(sentence);
    }
  }

  // If last iteration left us with leftover content, add to the result
  if (tmpstring.length) {
    addToStack();
  }
  if (callback) {
    callback(result);
  }
  return result;
}