# redux-debounce

[![Build Status][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![Codecov.io][codecov-image]][codecov-url]

> FSA-compliant middleware for Redux to debounce actions.

## Installation

```sh
$ npm install --save-dev redux-debounce
```

## Usage

```javascript
// Store setup
import { applyMiddleware, createStore } from 'redux'
import createDebounce from 'redux-debounce'
import createLogger from 'redux-logger'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

const config = {
  simple: 300
}

const debouncer = createDebounce(config)
const logger = createLogger()
const createMiddleware = applyMiddleware(thunk, debouncer, promise, thunk)
const store = createMiddleware(createStore)(reducer)

const debounceAction = () => ({
  meta: {
    debounce: 'simple',
  },
  type: 'TEST',
})
```

Debounce middleware **should be** placed near the top of the chain.

### Example

See the example directory.

```sh
$ cd example
$ npm install
$ npm start
```

## API

`redux-debounce` exposes single constructor function for creating debounce middleware.

> createDebounce( options: Object )

### Options

> **Each option is a property to setup different debounces for different actions.**

#### Number

Number of milliseconds to debounce the action for.

#### Object

##### wait (Number)

Number of milliseconds to debounce the action for.

##### maxWait (Number)

Maximum number of milliseconds before the action is called.

See [lodash][lodash-url] for the rest of the supported options.

## License

Copyright © 2015-2016 [Neil Kistner](//github.com/wyze)

Released under the MIT license. See [license](license) for details.

[lodash-url]: https://lodash.com/docs#debounce

[travis-image]: https://img.shields.io/travis/wyze/redux-debounce.svg?style=flat-square
[travis-url]: https://travis-ci.org/wyze/redux-debounce

[npm-image]: https://img.shields.io/npm/v/redux-debounce.svg?style=flat-square
[npm-url]: https://npmjs.com/package/redux-debounce

[codecov-image]: https://img.shields.io/codecov/c/github/wyze/redux-debounce.svg?style=flat-square
[codecov-url]: https://codecov.io/github/wyze/redux-debounce
