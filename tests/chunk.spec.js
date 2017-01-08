const chai = require('chai');
const  textchunk = require('textchunk');

var assert = chai.assert;

var expect = chai.expect;

describe('chunk', function () {
  it('should split Peter Piper into 48 characters', function() {
    const text = "Peter Piper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked. If Peter Piper picked a peck of pickled peppers, where's the peck of pickled peppers Peter Piper picked?";
    var parts = textchunk.chunk(text, 48);

    expect(parts.length).to.equal(5);
    expect(parts[0]).to.equal('Peter Piper picked a peck of pickled peppers.');
    expect(parts[1]).to.equal('A peck of pickled peppers Peter Piper picked.');
    expect(parts[2]).to.equal('If Peter Piper picked a peck of pickled peppers,');
    expect(parts[3]).to.equal('where\'s the peck of pickled peppers Peter Piper');
    expect(parts[4]).to.equal('picked?');
  });

  it('should not split the gettysburg address', function () {
    const text = "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.";
    var parts = textchunk.chunk(text, 177);

    expect(parts.length).to.equal(1);

    expect(parts[0]).to.equal("Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.");
  });

  it('should split the constitution preamble', function () {
    const text = "We the People of the United States of America";
    var parts = textchunk.chunk(text, 5);

    expect(parts.length).to.equal(9);

    expect(parts[0]).to.equal('We th');
    expect(parts[1]).to.equal('e Peo');
    expect(parts[2]).to.equal('ple o');
    expect(parts[3]).to.equal('f the');
    expect(parts[4]).to.equal('Unit');
    expect(parts[5]).to.equal('ed St');
    expect(parts[6]).to.equal('ates');
    expect(parts[7]).to.equal('of Am');
    expect(parts[8]).to.equal('erica');
  });

});
