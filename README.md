# TweenSE

> A tiny javascript tweening animation engine.

[![NPM version](https://badgen.net/npm/v/tweense)](https://npmjs.com/package/tweense) [![NPM downloads](https://badgen.net/npm/dm/tweense)](https://npmjs.com/package/tweense) 

## Install

```bash
npm i tweense -s
```

## Usage

```js
const { animate } = require('tweense')

animate(
  0,                     // initial valud
  1,                     // target value
  1000,                  // duration
  'Quad.easeIn',         // timing function
  (value, isEnding) => { // callback
    if(!isEnding){
      arc.render(value)
    }
  }
)
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**tweense** © [ULIVZ](https://github.com/ulivz), Released under the [MIT](LICENSE) License.<br>
Authored and maintained by ULIVZ with help from contributors ([list](https://github.com/ulivz/tweense/contributors)).

> [github.com/ulivz](https://github.com/ulivz) · GitHub [@ULIVZ](https://github.com/ulivz) · Twitter [@_ulivz](https://twitter.com/_ulivz)
