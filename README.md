# @esgi/eslint-config-javascript

ESLint configuration for JavaScript

## Usage

### Without configuration

#### Requirements

- Terminal
- [Node](https://nodejs.org/)
- NPX

#### Usage

```console
$ npx @esgi/eslint-config-javascript index.js
```

### With configuration

#### Requirements

- Terminal
- [Node](https://nodejs.org/)
- NPM

#### Installation

```console
$ npm install --save-dev eslint @esgi/eslint-config-javascript
```

#### Configuration

```console
$ touch .eslintrc.js
```

```javascript
"use strict";

module.exports = {
  extends: "@esgi/eslint-config-javascript"
};
```

```console
$ touch package.json
```

```json
{
  "scripts": {
    "eslint": "eslint index.js"
  }
}
```

#### Usage

```console
$ npm run eslint
```

## Changelog

See [`CHANGELOG.md`](./CHANGELOG.md).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## License

See [`LICENSE`](./LICENSE).

## Code of conduct

See [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md).
