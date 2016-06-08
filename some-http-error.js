'use strict';

function extend(child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
  return child;
}

function HttpError(statusCode, name, message) {
  this.message = message;
  this.name = name;
  this.statusCode = statusCode;
  this.stack = (new Error()).stack;
}
extend(HttpError, Error);

HttpError.BadRequestError = function (message) {
  message = message || 'Bad Request';
  HttpError.call(this, 400, 'BadRequestError', message);
};

HttpError.UnauthorizedError = function (message) {
  message = message || 'Unauthorized';
  HttpError.call(this, 401, 'UnauthorizedError', message);
};

HttpError.ForbiddenError = function (message) {
  message = message || 'Forbidden';
  HttpError.call(this, 403, 'ForbiddenError', message);
};

HttpError.NotFoundError = function (message) {
  message = message || 'Not Found';
  HttpError.call(this, 404, 'NotFoundError', message);
};

HttpError.MethodNotAllowedError = function (message) {
  message = message || 'Method Not Allowed';
  HttpError.call(this, 405, 'MethodNotAllowedError', message);
};

for (var property in HttpError) {
  if (HttpError.hasOwnProperty(property)) {
    extend(HttpError[property], HttpError);
  }
}

module.exports = HttpError;


