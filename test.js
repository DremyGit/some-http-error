var HttpError = require('./');
var expect = require('chai').expect;

describe('HttpError', function () {
  it('is child class of Error', function () {
    expect(new HttpError).to.be.an.instanceof(Error);
  });
});

describe('BadRequestError', function () {
  it('is an instance of Error', function () {
    expect(new HttpError.BadRequestError).to.be.an.instanceof(Error);
  });
  it('is an instance of HttpError', function () {
    expect(new HttpError.BadRequestError).to.be.an.instanceof(HttpError)
  });
  it('has right prototype', function () {
    var badRequestError = new HttpError.BadRequestError();
    expect(badRequestError.message).to.equal('Bad Request');
    expect(badRequestError.name).to.equal('BadRequestError');
    expect(badRequestError.statusCode).to.equal(400);
  })
});
describe('UnauthorizedError', function () {
  it('is an instance of Error', function () {
    expect(new HttpError.UnauthorizedError).to.be.an.instanceof(Error);
  });
  it('is an instance of HttpError', function () {
    expect(new HttpError.UnauthorizedError).to.be.an.instanceof(HttpError)
  });
  it('has right prototype', function () {
    var unauthorizedError = new HttpError.UnauthorizedError();
    expect(unauthorizedError.message).to.equal('Unauthorized');
    expect(unauthorizedError.name).to.equal('UnauthorizedError');
    expect(unauthorizedError.statusCode).to.equal(401);
  })
});
describe('ForbiddenError', function () {
  it('is an instance of Error', function () {
    expect(new HttpError.ForbiddenError).to.be.an.instanceof(Error);
  });
  it('is an instance of HttpError', function () {
    expect(new HttpError.ForbiddenError).to.be.an.instanceof(HttpError)
  });
  it('has right prototype', function () {
    var forbiddenError = new HttpError.ForbiddenError();
    expect(forbiddenError.message).to.equal('Forbidden');
    expect(forbiddenError.name).to.equal('ForbiddenError');
    expect(forbiddenError.statusCode).to.equal(403);
  })
});
describe('NotFoundError', function () {
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
describe('MethodNotAllowedError', function () {
  it('is an instance of Error', function () {
    expect(new HttpError.MethodNotAllowedError).to.be.an.instanceof(Error);
  });
  it('is an instance of HttpError', function () {
    expect(new HttpError.MethodNotAllowedError).to.be.an.instanceof(HttpError)
  });
  it('has right prototype', function () {
    var methodNotAllowedError = new HttpError.MethodNotAllowedError();
    expect(methodNotAllowedError.message).to.equal('Method Not Allowed');
    expect(methodNotAllowedError.name).to.equal('MethodNotAllowedError');
    expect(methodNotAllowedError.statusCode).to.equal(405);
  })
});
