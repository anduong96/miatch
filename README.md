# miatch

[![build status](https://img.shields.io/travis/com/anduong96/miatch.svg)](https://travis-ci.com/anduong96/miatch)
[![code coverage](https://img.shields.io/codecov/c/github/anduong96/miatch.svg)](https://codecov.io/gh/anduong96/miatch)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/anduong96/miatch.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/miatch.svg)](https://npm.im/miatch)

> Clean try/catch wrapper


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install miatch
```

[yarn][]:

```sh
yarn add miatch
```


## Usage ES6

```js
import { miatch } from 'miatch'
const {
  FIRST,
  SECOND,
  THIRD
} = miatch()

FIRST === 'FIRST'
SECOND === 'SECOND'
THIRD === 'THIRD'
```


## Contributors

| Name         |
| ------------ |
| **An Duong** |


## License

[MIT](LICENSE) © An Duong


##

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
