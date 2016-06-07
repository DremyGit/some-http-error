var HttpError = require('./');
var expect = require('chai').expect;

describe('HttpError', function () {
  it('is child class of Error', function () {
    expect(new HttpError).to.be.an.instanceof(Error);
  });
});

describe('SomeError', function () {
  it('is an instance of Error', function () {
    expect(new HttpError.NotFoundError).to.be.an.instanceof(Error);
  });
  it('is an instance of HttpError', function () {
    expect(new HttpError.NotFoundError).to.be.an.instanceof(HttpError)
  });
  it('has right prototype', function () {
    var notFoundError = new HttpError.NotFoundError();
    expect(notFoundError.message).to.equal('Not Found');
    expect(notFoundError.name).to.equal('NotFoundError');
    expect(notFoundError.statusCode).to.equal(404);
  })
});
