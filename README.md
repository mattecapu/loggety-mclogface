# loggety-mclogface
### tiny console logging util with basic coloring and tagging

## Installation
Do I really have to write this everytime?
```
npm install --save loggety-mclogface
```

## Usage
The package exports a single function

### `createLogFunction({ type: <string>, color: <string>, tag: <string>, uppercase: <bool>, })`

* `type` *(default: 'log')*: the `console` method to invoke, any of `log`, `error`, `warn`, `info`, ...
* `color` *(default: 'blue')*: the color to use for string arguments, any supported by [`colors`](https://npmjs.com/package/colors)
* `tag` *(default: none)*: a string to prepend to every message, wrapped in square brackets (e.g: setting tag to 'foo' will print messages like `[FOO] this is a message`)
* `uppercase` *(default: true)*: transform `tag` to uppercase when set to `true`, leave it as-is otherwise

## License
MIT
