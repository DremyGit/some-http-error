# some-http-error

[![Build Status](https://travis-ci.org/DremyGit/some-http-error.png)](https://travis-ci.org/DremyGit/some-http-error)
[![Coverage Status](https://coveralls.io/repos/github/DremyGit/some-http-error/badge.svg?branch=master)](https://coveralls.io/github/DremyGit/some-http-error?branch=master)

A javascript error creator for some often used HTTP error

## Getting started

## Install

```
$ npm install some-http-error
```

## Usage

You can use this module in any node.js web frameworks, such as
[express](https://github.com/expressjs/express)

### In controllers
```js
var HttpError = require('some-http-error');

function handle(req, res, next) {

  var userId = req.query.id;

  // If some error happened
  if (!userId) {
    // You can pass it to error handling middleware
    next(new HttpError.BadRequestError('"id" is not set'));
    // Or just throw it!
    // throw new HttpError.BadRequestError('"id" is not set'));
  }

  // In promise
  User.findById(userId).then(user => {

    if (!user) {
      // Not found, just throw it!
      throw new HttpError.NotFoundError('User not found');
    }

    // ...

    // Don't forget catch the error, and pass it to error handling
  }).catch(next);
}
```

### In error handing middleware
```js
var HttpError = require('some-http-error');

function errorHandle(err, req, res, next) {

  if (err instanceof HttpError) {
    // If it is an HttpError, send the HTTP status code and error message
    res.sendStatus(err.statusCode).json(err.message);
  } else {
    // Otherwise send 500
    res.sendStatus(500).json(err.message);
  }
```

## API

#### HttpError(statusCode, errorName, message)

The basic HttpError object constructor.

##### HttpError.BadRequestError(message)

+ statusCode: `400`
+ message: `Bad Request`

##### HttpError.UnauthorizedError(message)

+ statusCode: `401`
+ message: `Unauthorized`

##### HttpError.ForbiddenError(message)

+ statusCode: `403`
+ message: `Forbidden`

##### HttpError.NotFoundError(message)

+ statusCode: `404`
+ message: `Not Found`

##### HttpError.MethodNotAllowedError(message)

+ statusCode: `405`
+ message: `Method Not Allowed`

## License

[MIT](https://github.com/DremyGit/some-http-error/blob/master/LICENSE)
