Splits a block of text at N characters, using sentence boundaries. Sticks as many
sentences into a single group of chars as possible, without going over your
specified limit.

Not all chunks will be equal size. The module attempts to break the block of text
into natural sentences as much as possible.

Useful for taking a large group of text and sending it over a text message, or other
length-constrained usage.

## Usage

```javascript
var parts = textchunk.chunk(text, numberOfParts, options);
```

Returns an array of sentences. Each sentence will be `numberOfParts` long or shorter.

#### Optional Options

```
var options = {
    "callback"           : null,
    "newline_boundaries" : false,
    "html_boundaries"    : false,
    "sanitize"           : false,
    "allowed_tags"       : false,
    "abbreviations"      : null
};
```

* `callback`, send result to this callback, instead of returning it
* `newline_boundaries`, force sentence split at newlines
* `html_boundaries`, force sentence split at specific tags (br, and closing p, div, ul, ol)
* `sanitize`: If you don't expect nor want html in your text.
* `allowed_tags`: To sanitize html, the library [santize-html](https://github.com/punkave/sanitize-html) is used. You can pass the allowed tags option.
* `abbreviations`: list of abbreviations to override the original ones for use with other languages. Don't put dots in abbreviations.

Other than the `callback` option, all options are simply passthroughs to the [`sbd`](https://www.npmjs.com/package/sbd) module, that provides the sentence detection.

## Examples

Split the Gettysburg Address into 200 character parts.


```javascript
var textchunk = require('textchunk');

var text = " Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.\
\
Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.\
\
But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.";

var parts = textchunk.chunk(text, 200);
console.log(parts);

>>> [ 'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal',
  'Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure.',
  'We are met on a great battle-field of that war.',
  'We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live.',
  'It is altogether fitting and proper that we should do this',
  'But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground.',
  'The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract.',
  'The world will little note, nor long remember what we say here, but it can never forget what they did here.',
  'It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced.',
  'It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of dev',
  'otion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people,',
  'for the people, shall not perish from the earth.' ]
```