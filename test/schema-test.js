'use strict';

var path = require('path');
var fs = require('fs');
var chai = require('chai');
var process = require('../lib/index.js')
chai.use(require('chai-json-schema'));

var expect = chai.expect;
var data = fs.readFileSync('./test/fixtures/json/valid.json');
data = JSON.parse(data.toString('utf8'))

var schema = process(data);

describe('Generator', function() {
  it('should not contain additionalProperties', function() {
    expect(data).to.be.jsonSchema(schema);
  });
});