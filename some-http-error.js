'use strict';

var errors = {
  "400": "Bad Request",
  "401": "Unauthorized",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed"
};

function extend(child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
  return child;
}

function HttpError(statusCode, message) {
  if (!statusCode || statusCode < 400 || statusCode > 405) {
    throw new Error(statusCode + ' is not support');
  }
  this.statusCode = +statusCode;
  this.name = messageToName(errors[statusCode]);
  this.message = message || errors[statusCode];
  this.stack = (new Error()).stack;
}
extend(HttpError, Error);

HttpError.BadRequestError = function() {};
HttpError.UnauthorizedError = function() {};
HttpError.ForbiddenError = function() {};
HttpError.NotFoundError = function() {};
HttpError.BadRequestError = function() {};

for (var errorCode in errors) {
  if (errors.hasOwnProperty(errorCode)) {
    var message = errors[errorCode];
    var errorName = messageToName(message);
    HttpError[errorName] = (function (code) {
      return function (message) {
        HttpError.call(this, code, message);
      }
    })(errorCode);
    extend(HttpError[errorName], HttpError)
  }
}

function messageToName(message) {
  if (!message || typeof message !== 'string') {
    return 'Error'
  }
  return message
    .split(/\s+/)
    .map(function(word) {
      return word[0].toUpperCase() + word.substr(1, word.length - 1)
    })
    .concat('Error')
    .join('')
}

module.exports = HttpError;


